import { INC_STEP, SET_STEP, SET_STEPS, TOGGLE_MANDIBULAR, TOGGLE_MAXILLARY, TOGGLE_PLAY, TOGGLE_SUPER, TOGGLE_UPPER } from "state/ActionTypes";

export interface ITeeth {
  userId: string | undefined;
  stepsData: IOrthodontics<IStep> | undefined;
  currentStep: number;  
  toggleMaxillary?: boolean;
  toggleMandibular?: boolean;
  isSuper?: boolean;
  isPlaying?: boolean;
  upperAction?: boolean;
  length?: number;
  maxLength?: number;
  manLength?: number;
  doctor?: string;
}

export interface IOrthodontics<IStep> {
  [Key: string]: IStep; // Key tuong duong voi step
}

export interface IStep {
  maxillary: string;//IOrth;
  mandibular: string;//IOrth;
} 

export interface IOrth {
  name: string;
  url: string;
  info?: string;
} 


//for action
// action an/hien ham Tren
export interface IMaxillaryToggle {
  type:  typeof TOGGLE_MAXILLARY;
  // payload: { toggleMaxillary: boolean}
  payload: {}
}
export interface IMandibularToggle {
  type:  typeof TOGGLE_MANDIBULAR;
  payload: { }
}

export interface ISuperToggle {
  type: typeof TOGGLE_SUPER;
  payload: {}
}

export interface IStepIncre {
  type: typeof INC_STEP;
  payload: {}
}

export interface IStepSetValue {
  type: typeof SET_STEP;
  payload: {currentStep: number}
}

export interface IPlayToggle {
  type: typeof TOGGLE_PLAY;
  payload: {}
}

export interface ISetOrths {
  type: typeof SET_STEPS;
  payload: { stepsData: IOrthodontics<IStep>, length: number, maxLength: number, manLength: number}
}

export interface IUpperAction {
  type: typeof TOGGLE_UPPER;
  payload: {}
}

export type TeethActions = IMaxillaryToggle 
| IMandibularToggle 
| IStepIncre 
| IStepSetValue 
| IPlayToggle
| ISetOrths
| ISuperToggle
| IUpperAction
;