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
  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
            <Typography>Log in your account!</Typography>
          </Grid>
          <form>
            <TextField fullWidth label="Email" required></TextField>
            <TextField
              fullWidth
              label="Password"
              required
              type={show ? "text" : "password"}
            ></TextField>
            <FormControlLabel
              control={<Switch color="primary"></Switch>}
              label="Show Password"
              onClick={() => setShow(!show)}
            ></FormControlLabel>
            <Button
              type="submit"
              variant="contained"
              style={btnStyle}
              fullWidth
              color="primary"
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
