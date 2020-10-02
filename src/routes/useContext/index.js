import React from "react";

import ContextContainer from "./ContextContainer";
import DemoUseContext from "./DemoUseContext";
import DemoNotUseContext from "./DemoNotUseContext";
import Toolbar from "./Toolbar";
import { NoteList } from "../../components";

export default function Container() {
  const noteArr = [
    "context的value的改变会触发被其包裹的所有组件的重新渲染，不管子组件是否使用该value",
    `将context.provider单独写为一个组件，对context.provider（即ContextContainer）,他的值是来自props, 
    所以每次当ThemeProvider的state被switchTheme改变而重新渲染的时候，它看到的子组件(this.props.children)是App传给他的，
    不需要重新用React.createElement穿件，所以this.props.children是不变的，于是Context.Provider也就不会让this.props.children重新渲染了, 这种写法避免了重复渲染造成性能浪费`
  ];

  const useContextNote = [
    "在cotext.provider，通过value属性传递下去",
    '在consumer中，通过 import { ProviderContext } from "./Hooks"; const { state, dispatch } = useContext(ProviderContext);'
  ];

  return (
    /* 将context单独写为组件，以免被context包裹的所有组件（不管是否依赖context的value）重复渲染 */
    <ContextContainer>
      <NoteList NoteList={noteArr} />
      <h3>useContext使用方法</h3>
      <NoteList NoteList={useContextNote} />
      <Toolbar />
      <DemoUseContext />
      <DemoNotUseContext />
    </ContextContainer>
  );
}
