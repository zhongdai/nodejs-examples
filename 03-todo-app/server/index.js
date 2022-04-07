const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleeware

app.use(cors());
app.use(express.json());

// Routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.status(201).json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const Todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(Todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );

    if (updatedTodo.rowCount === 0) {
        res.json({message: `todo_id = ${id} is not found`})
    } else {
        res.json({message: `todo_id = ${id} is updated`})
    }

    res.json(updatedTodo);
  } catch (error) {
    console.error(error.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id]);

        // res.json(`Todo ${id} is deleted`);
        if (deletedTodo.rowCount === 0) {
            res.json(`Not found the todo ${id}`);
        } else {
            res.json(`${deletedTodo.rowCount} row(s) is deleted for todo_Id = ${id}`);
        }

    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5001, () => {
  console.log("server has started on port 5001");
});
