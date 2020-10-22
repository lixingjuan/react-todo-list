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
import Modal from "./routes/Modal/index.tsx";
import Del from "./routes/Del/index.tsx";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/TodoList" component={TodoList} />
        <Route path="/useState" component={useState} />
        <Route path="/useEffect" component={useEffect} />
        <Route path="/useContext" component={useContext} />
        <Route path="/useReducer" component={useReducer} />
        <Route path="/Del" component={Del} />
        <Route path="/Modal" component={Modal} />
      </Switch>
    </Router>
  );
}
