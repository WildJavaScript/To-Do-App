import React, { useState } from "react";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import axios from "axios";

const Register = () => {
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
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  let sendData = () => {
    axios
      .post("https://todo-application-2.herokuapp.com/registerPerson", {
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        console.log(typeof res.data);
        if (typeof res.data === "object") {
          window.location = "/";
        } else {
          window.location = "/register";
        }
      });
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>Register</h2>
          <Typography>Create an account!</Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="First Name"
            required
            onChange={(e) => setFirstNameInput(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Last Name"
            required
            onChange={(e) => setLastNameInput(e.target.value)}
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            required
            onChange={(e) => setEmailInput(e.target.value)}
          ></TextField>
          <TextField fullWidth label="Username" required></TextField>
          <TextField
            fullWidth
            label="Password"
            required
            type={show ? "text" : "password"}
            onChange={(e) => setPasswordInput(e.target.value)}
          ></TextField>
          <FormControlLabel
            control={<Switch color="primary"></Switch>}
            label="Show Password"
            onClick={() => setShow(!show)}
          ></FormControlLabel>
          <FormControlLabel
            control={<Switch color="primary" required></Switch>}
            label="I accept terms and conditions"
          />
          <Button
            type="button"
            variant="contained"
            style={btnStyle}
            fullWidth
            color="primary"
            onClick={() => sendData()}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
