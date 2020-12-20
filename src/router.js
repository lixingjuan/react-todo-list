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
import Del from "./routes/Del/index.tsx";
import Modal from "./routes/Modal/index.tsx";
import Menu from "./routes/Menu";
import Tab from "./routes/Tab/index";

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
        <Route path="/Menu" component={Menu} />
        <Route path="/Tab" component={Tab} />
      </Switch>
    </Router>
  );
}
