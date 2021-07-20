import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaperStyle, GridStyle } from "./Home.style";

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
      });
  }, []);

  let sendTodo = () => {
    if (task !== "") {
      axios
        .post("https://todo-application-2.herokuapp.com/action", {
          name: task,
          isDone: false,
          personId: window.localStorage.getItem("userId"),
        })
        .then((res) => {
          console.log(res);
          setTodos([...todos, res.data.name]);
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
      .then((res) => console.log(res));
  };
  let taskDelete = (id) => {
    axios
      .delete("https://todo-application-2.herokuapp.com/action", {
        id,
      })
      .then((res) => {
        console.log(res);
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
              label="Create a new tast"
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
                    <Grid>{t}</Grid>
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
