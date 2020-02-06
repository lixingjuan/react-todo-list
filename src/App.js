import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import TodoList from "./routes/todoList/index";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/TodoList" />} />
          <Route path="/Page1" component={Page1} />
          <Route path="/Page2" component={Page2} />
          <Route path="/TodoList" component={TodoList} />
        </Switch>
      </Router>
    );
  }
}
