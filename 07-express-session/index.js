if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const session = require("express-session");
const redis = require("redis");
const connectRedis = require("connect-redis");

const app = express();
app.use(express.json());

// if run behind a proxy (kubernetes, nginx)
// app.set('trust proxy', 1);

const RedisStore = connectRedis(session);

// 1. Config our redis
const redisClient = redis.createClient({
  port: 6379,
  host: "localhost",
  legacyMode: true // https://github.com/tj/connect-redis/issues/336
});

// this is required for v4.0.1
redisClient.connect().catch(console.error);

redisClient.on("error", function (err) {
  console.error("Could not establish a connection with redis. " + err);
});
redisClient.on("connect", function (err) {
  console.log("Connected to redis successfully");
});

// 2. Config the session middleware
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false, // should be true in production, and only send back when https
      httpOnly: true, // if true, it prevents client side JS from reading the cookie
      maxAge: 1000 * 60 * 30, // in milliseconds
      sameSite: "lax",
    },
  })
);

// 3. create a login endpoint (unprotected)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log(`Getting login request, email: ${email}, password: ${password}`);

  // check if the credentials are correct
  // ...

  // assume always correct
  req.session.clientId = email;
  req.session.myNumber = 5;

  res.end("You are logged in");
});

// 4. plug in the middleware to check if user is authenticated or not
// all requests that are plugged in after this middleware will only be accessible
// if the user is logged in
// this is globally
function auth(req, res, next) {
  // ensure session and clientId is existing
  if (!req.session || !req.session.clientId) {
    const err = new Error("you should not pass");
    err.statusCode = 401;
    next(err);
  }
  next();
}

app.get("/profile", auth, (req, res) => {
  res.json(req.session);
});

app.listen(8080, () => console.log("server is running on port 8080"));
