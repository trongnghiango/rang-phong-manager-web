import { IUser } from "state/interfaces/user.interface";
import { INIT_STORED, LOGIN, LOGOUT } from "../ActionTypes";
import { IState, StateActions, UserActions } from "../interfaces";

const appStateReducer = (appState: IState, action: StateActions) => {
  
  const { type, payload } = action;

  switch (type) {
    case INIT_STORED:
      return { ...appState, ...payload };
   
    default:
      return appState;
  }
};
export default appStateReducer;