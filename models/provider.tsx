import React, { useReducer, createContext, ReactNode } from "react";

import { reducer, initialState } from "./reducers";
import { createReduxContext } from "./context";

export const Context = createContext(
  createReduxContext(initialState, () => {})
);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={createReduxContext(state, dispatch)}>
      {children}
    </Context.Provider>
  );
};
