import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
