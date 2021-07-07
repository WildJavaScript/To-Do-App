import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register/Register";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login"></Route>
          <Route exact path="/home"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
