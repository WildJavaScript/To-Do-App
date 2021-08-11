import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaperStyle, GridStyle } from "./Home.style";
import "./Home.css";

function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://todo-application-2.herokuapp.com/people")
      .then((res) => console.log(res.data));
    axios
      .post("https://todo-application-2.herokuapp.com/actionsOfUser", {
        personId: window.localStorage.getItem("userId"),
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          setTodos(res.data);
        }
      });
  }, []);

  let sendTodo = () => {
    if (task !== "") {
      axios
        .post("https://todo-application-2.herokuapp.com/action", {
          name: task,
          isDone: 0,
          personId: window.localStorage.getItem("userId"),
        })
        .then((res) => {
          console.log(res);
          setTodos([...todos, res.data]);
          setTask("");
        });
    }
  };
  let taskCheck = (id, isDone) => {
    axios
      .put("https://todo-application-2.herokuapp.com/action", {
        id,
        isDone: !isDone,
      })
      .then((res) => {
        console.log(res);
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !isDone } : todo
          )
        );
        // let newTodos = JSON.parse(JSON.stringify(todos));
        // for (let i = 0; i < newTodos.length; ++i) {
        //   if (newTodos[i].id === id) {
        //     newTodos[i].isDone = !newTodos[i].isDone;
        //   }
        // }
        // setTodos(newTodos);
      });
  };
  let taskDelete = (id) => {
    axios
      .delete("https://todo-application-2.herokuapp.com/action", {
        data: {
          id,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodos(
          todos.filter((x) => {
            return x.id !== id;
          })
        );
      });
  };
  return (
    <div>
      <Grid>
        <PaperStyle>
          <Grid align="center">
            <h2>What are your plans?</h2>
            <Typography>Manage yor everyday plans</Typography>
          </Grid>

          <Grid align="center">
            <TextField
              label="Create a new task"
              fullWidth
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></TextField>
            <Button
              type="button"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => sendTodo()}
            >
              Add the task
            </Button>
          </Grid>
          <Paper>
            <Grid align="center">
              {todos.map((t, key) => {
                return (
                  <GridStyle key={key}>
                    <Grid className={t.isDone ? "checked" : "unchecked"}>
                      {t.name}
                    </Grid>
                    <Grid>
                      <Button
                        type="button"
                        color="default"
                        variant="contained"
                        onClick={() => taskCheck(t.id, t.isDone)}
                      >
                        ✅
                      </Button>
                      <Button
                        type="button"
                        color="default"
                        variant="contained"
                        onClick={() => taskDelete(t.id)}
                      >
                        🗑
                      </Button>
                    </Grid>
                  </GridStyle>
                );
              })}
            </Grid>
          </Paper>
        </PaperStyle>
      </Grid>
    </div>
  );
}

export default Home;
