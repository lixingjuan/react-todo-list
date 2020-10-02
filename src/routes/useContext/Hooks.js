import React from "react";

const themes = {
  light: {
    foreground: "#000000",
    backgroundColor: "yellow"
  },
  dark: {
    foreground: "#ffffff",
    backgroundColor: "black"
  }
};

const ProviderContext = React.createContext(themes);

const ProviderReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const theme = Object.is(state.theme, themes.light)
        ? themes.dark
        : themes.light;

      return {
        ...state,
        theme
      };

    default:
      return state;
  }
};

export { ProviderContext, themes, ProviderReducer };
