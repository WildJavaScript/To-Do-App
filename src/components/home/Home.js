import { Button, Grid, TextField, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PaperStyle } from "./Home.style";

function Home() {
  const [input, setInput] = useState("");
  //   const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    axios
      .get("https://todo-application-2.herokuapp.com/people")
      .then((res) => console.log(res.data));
  }, []);
  let sendTodo = () => {
    axios
      .post("https://todo-application-2.herokuapp.com/action", {
        name: input,
        isDone: false,
        personId: window.localStorage.getItem("userId"),
      })
      .then((res) => {
        console.log(res);
        setInput("");
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
            <Grid align="center"></Grid>
          </Paper>
        </PaperStyle>
      </Grid>
    </div>
  );
}

export default Home;
