import { actionTypes } from "./actions.types";

type Keys = keyof typeof actionTypes;

export type PhoneAction = {
  type: (typeof actionTypes)[Keys];
  payload?: string | boolean;
};

export function updateDisplay(payload: string): PhoneAction {
  return {
    type: actionTypes.updateDisplay,
    payload,
  };
}
export function deleteDisplay(payload: string): PhoneAction {
  return {
    type: actionTypes.deleteDisplay,
    payload,
  };
}
export function updateCalling(): PhoneAction {
  return {
    type: actionTypes.updateCalling,
  };
}
