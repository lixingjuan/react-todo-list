import React, { useReducer } from "react";

import { ProviderContext, themes, ProviderReducer } from "./Hooks";

const initState = {
  theme: themes.light
};

export default function ContextContainer(props) {
  const [state, dispatch] = useReducer(ProviderReducer, initState);

  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProviderContext.Provider>
  );
}
