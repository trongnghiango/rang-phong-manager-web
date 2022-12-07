/**
 * interfaces.ts
 */
 import { INIT_STORED, LOGIN, LOGOUT, THEME } from '../ActionTypes';
import { IMandibularToggle, IMaxillaryToggle, ITeeth, TeethActions } from './teeth.interface';
import { IUser } from './user.interface';

 
 export interface ITheme {
   dark: boolean;
 }
 
 // for action
 export interface IState {
   user: IUser;
   teeth: ITeeth;
   loading: boolean;
  //  theme: ITheme;
 }

 export interface IDataInit {
  type: typeof INIT_STORED;
  payload: IState;
 }
 
 export interface IUserLogin {
   type: typeof LOGIN;
   payload: IUser;
 }
 
 export interface IUserLogout {
   type: typeof LOGOUT;
   payload: {};
 }
 

 //
 export interface IThemeAction {
   type: typeof THEME;
   payload: { toggle: boolean };
 }
 
 export type UserActions = IUserLogin | IUserLogout;
//  export type TeethActions = IMaxillaryToggle | IMandibularToggle;
 export type StateActions = UserActions | IThemeAction | TeethActions | IDataInit;