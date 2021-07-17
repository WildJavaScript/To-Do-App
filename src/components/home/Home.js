import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaperStyle } from "./Home.style";

function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  //   const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    axios
      .get("https://todo-application-2.herokuapp.com/people")
      .then((res) => console.log(res.data));
  }, []);
  let sendTodo = () => {
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
        console.log(todos);
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
              {/* <ul>
                {todos.map((t) => {
                  return <li>{t.value}</li>;
                })}
              </ul> */}
            </Grid>
          </Paper>
        </PaperStyle>
      </Grid>
    </div>
  );
}

export default Home;
