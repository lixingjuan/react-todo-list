import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";

import Index from "./routes";
import TodoList from "./routes/TodoList/index.js";
import useState from "./routes/useState";
import useEffect from "./routes/useEffect";
import useContext from "./routes/useContext";
import useReducer from "./routes/useReducer";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/TodoList" component={TodoList} />
        <Route path="/useState" component={useState} />
        <Route path="/useEffect" component={useEffect} />
        <Route path="/useContext" component={useContext} />
        <Route path="/useReducer" component={useReducer} />
      </Switch>
    </Router>
  );
}
