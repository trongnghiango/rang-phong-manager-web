/**
 * AppProvider.tsx
 */

import React, { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { IDataInit, IState, IThemeAction, StateActions, UserActions } from "./interfaces";
import { TeethActions } from "./interfaces/teeth.interface";
import appStateReducer from "./reducers/appStateReducer";
import teethReducer from "./reducers/teethReducer";
import userReducer from "./reducers/userReducer";
//  import themeReducer from "./reducers/themeReducer";
export const APP_STATE_NAME = "testing";

//Check if state already exist and take the instance or set a default value
//in case there is no state in the localstorage

// **NOTES** NGHIA:localStorage is not defined on the server side 
// You'll have to wait until the browser renders it in order to use localStorage
const initialState: IState = {
  user: {
    name: "",
    userId: "",
    username: "",
    active: false,
  },
  teeth: {
    userId: undefined,
    stepsData: undefined,
    currentStep: -1,
    toggleMaxillary: true,
    toggleMandibular: true,
    isSuper: false,
    upperAction: false
  },
  loading: false,

};

const AppContext = createContext<{
  state: IState;
  dispatch: Dispatch<StateActions>;
}>({ state: initialState, dispatch: () => null });

const combinedReducers = (
  state: IState,
  action: UserActions | IThemeAction | TeethActions | IDataInit,
) => ({
  ...appStateReducer(state, action),
  user: userReducer(state.user, action),
  teeth: teethReducer(state.teeth, action),
  loading: false,

  //  theme: themeReducer(theme, action),
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  // Watches for any changes in the state and keeps the state update in sync
  //Refresh state on any action dispatched
  
  useEffect(() => {
    //Update the localstorage after detected change

    console.log('Store State::\n', state)
    if (state !== initialState)
      localStorage.setItem(APP_STATE_NAME, JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateValue = () => useContext(AppContext);

export default AppProvider;
export { AppContext, AppProvider };