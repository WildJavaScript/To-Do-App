import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import axios from "axios";
import { PaperStyle } from "./Login.style";
const Login = () => {
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
        console.log(res);
        if (typeof res.data === "object") {
          window.localStorage.setItem("userId", res.data.id);
          window.location = "/home";
        } else {
          window.location = "/";
        }
      });
  };
  return (
    <div>
      <Grid>
        <PaperStyle>
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
        </PaperStyle>
      </Grid>
    </div>
  );
};

export default Login;
