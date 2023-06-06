import { PhoneStructure } from "../models/phone.structure";
import { PhoneAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export const phoneReducer = (state: PhoneStructure, action: PhoneAction) => {
  let payload: string | boolean;
  switch (action.type) {
    case actionTypes.updateCalling:
      return {
        ...state,
        phone: { ...state, isCalling: !state.isCalling },
      };

    case actionTypes.updateDisplay:
      payload = action.payload as string;
      return {
        ...state,
        phone: { ...state, phoneNumber: payload },
      };

    case actionTypes.deleteDisplay:
      payload = action.payload as string;
      return {
        ...state,
        phone: {
          ...state,
          phoneNumber: state.phoneNumber.slice(0, -1),
        },
      };

    default:
      return { ...state };
  }
};
