import React from "react";
import { Grid, Paper, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";

const Register = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: "300px",
    margin: "20px auto",
    backgroundColor: "darkorange",
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>Register</h2>
          <Typography>Create an account!</Typography>
        </Grid>
        <form>
          <TextField fullWidth label="First Name" required></TextField>
          <TextField fullWidth label="Last Name" required></TextField>
          <TextField fullWidth label="Email" required></TextField>
          <TextField fullWidth label="Username" required></TextField>
          <TextField
            fullWidth
            label="Password"
            required
            type="password"
            id="passwordInput"
          ></TextField>
          <FormControlLabel
            control={<Checkbox color="secondary"></Checkbox>}
            label="Show Password"
          ></FormControlLabel>
          <FormControlLabel
            control={<Switch color="primary" required />}
            label="I accept terms and conditions"
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
