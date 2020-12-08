import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";

import Index from "./routes";
// import TodoList from "./routes/TodoList/index.js";
import useState from "./routes/useState";
import useEffect from "./routes/useEffect";
import useContext from "./routes/useContext";
import useReducer from "./routes/useReducer";
import Modal from "./routes/Modal/index.tsx";
import Menu from "./routes/Menu";

import DragCom from "./routes/Del/DragCom.tsx";
import DragAndFlexCom from "./routes/Del/DragAndFlexCom.tsx";
import FlexClassCom from "./routes/Del/FlexClassCom.tsx";
import FlexFuncCom from "./routes/Del/FlexFuncCom.tsx";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/TodoList" component={TodoList} /> */}
        <Route path="/useState" component={useState} />
        <Route path="/useEffect" component={useEffect} />
        <Route path="/useContext" component={useContext} />
        <Route path="/useReducer" component={useReducer} />
        <Route path="/Modal" component={Modal} />
        <Route path="/Menu" component={Menu} />
        {/* <Route path="/Del" component={Del} /> */}
        <Route path="/FlexClassCom" component={FlexClassCom} />
        <Route path="/FlexFuncCom" component={FlexFuncCom} />
        <Route path="/DragCom" component={DragCom} />
        <Route path="/DragAndFlexCom" component={DragAndFlexCom} />
      </Switch>
    </Router>
  );
}
