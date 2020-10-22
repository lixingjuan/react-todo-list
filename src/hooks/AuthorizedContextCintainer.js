import React, { useReducer } from "react";

import {
  AuthorizedContext,
  initPermissionList,
  ProviderReducer
} from "./index.js";

export default function ContextContainer(props) {
  const [state, dispatch] = useReducer(ProviderReducer, initPermissionList);

  return (
    <AuthorizedContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthorizedContext.Provider>
  );
}
