import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import axios from "axios";
const Login = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: "300px",
    margin: "20px auto",
    backgroundColor: "darkorange",
  };
  const btnStyle = {
    margin: "8px",
  };
  const [show, setShow] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  let sendData = () => {
    axios
      .post("https://todo-application-2.herokuapp.com/loginPerson", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        if (typeof res.data === "object") {
          window.location = "/home";
        } else {
          window.location = "/";
        }
      });
  };
  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
            <Typography>Log in your account!</Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              onChange={(e) => setEmailInput(e.target.value)}
              label="Email"
              required
            ></TextField>
            <TextField
              fullWidth
              label="Password"
              required
              onChange={(e) => setPasswordInput(e.target.value)}
              type={show ? "text" : "password"}
            ></TextField>
            <FormControlLabel
              control={<Switch color="primary"></Switch>}
              label="Show Password"
              onClick={() => setShow(!show)}
            ></FormControlLabel>
            <Button
              type="button"
              variant="contained"
              style={btnStyle}
              fullWidth
              color="primary"
              onClick={() => sendData()}
            >
              Log In
            </Button>
            <Typography>
              Do you have an account?
              <Link href="/register">Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
