const express = require("express");
const app = express();

app.use(express.json());

const personRouter = require("./routes/person");
app.use("/person", personRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started to listen on 3001");
});
