import { ITeeth, TeethActions } from 'state/interfaces/teeth.interface';
import {
  INC_STEP,
  SET_STEP,
  SET_STEPS,
  TOGGLE_MANDIBULAR,
  TOGGLE_MAXILLARY,
  TOGGLE_PLAY,
  TOGGLE_SUPER,
  TOGGLE_UPPER,
} from '../ActionTypes';
import { StateActions } from '../interfaces';

const teethReducer = (teethState: ITeeth, action: StateActions) => {
  const { type, payload } = action;

  // console.log('State::', teethState.currentStep)
  // console.log('Payload::', payload)
  switch (type) {
    case TOGGLE_MAXILLARY:
      return {
        ...teethState,
        toggleMaxillary: !teethState.toggleMaxillary,
      };
    case TOGGLE_MANDIBULAR:
      return {
        ...teethState,
        toggleMandibular: !teethState.toggleMandibular,
      };
    case TOGGLE_SUPER:
      return {
        ...teethState,
        isSuper: !teethState.isSuper,
      };

    case INC_STEP:
      return {
        ...teethState,
        currentStep: teethState.currentStep + 1,
      };

    case SET_STEP:
      return {
        ...teethState,
        ...payload,
      };

    case TOGGLE_PLAY:
      return {
        ...teethState,
        isPlaying: !teethState.isPlaying,
      };

    case TOGGLE_UPPER:
      return {
        ...teethState,
        upperAction: !teethState.upperAction,
      };

    case SET_STEPS:
      return {
        ...teethState,
        ...payload,
      };

    default:
      return teethState;
  }
};
export default teethReducer;
