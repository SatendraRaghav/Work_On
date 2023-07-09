import React, { useReducer, createContext, useMemo } from "react";
import { useLocalStorage } from "./Authentication/useLocalStorage";
export const DataContext = createContext<any>({}); 
export const actions = {
    isDrawerOpen:"isDrawerOpen",
  }
const initialState:any = {
  drawerBoolean:false,
  drawerWidth: 260
};
const reducer = (state:any, action:any) => {
    switch (action.type) {
        case actions.isDrawerOpen:
          return {
           ...state,drawerBoolean:!(state.drawerBoolean)
          };
        default:
          return state;
  }
};
export const DataProvider = ({ children }:any) => {
  const [user,setUser] = useLocalStorage("user",null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
