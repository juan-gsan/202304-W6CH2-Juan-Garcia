import { useReducer } from "react";
import { phoneReducer } from "../reducer/reducer";
import * as actionCreator from "../reducer/actions.creator";
import { PhoneStructure } from "../models/phone.structure";

export function usePhone() {
  const initialState: PhoneStructure = {
    isCalling: false,
    phoneNumber: "",
  };

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  const handleAddNumber = (item: string) => {
    console.log(item);
    dispatch(actionCreator.updateDisplay(item));
  };

  const handleDeleteNumber = (item: string) => {
    dispatch(actionCreator.deleteDisplay(item));
  };

  return {
    phoneNumber: phoneState.phoneNumber,
    handleDeleteNumber,
    handleAddNumber,
  };
}
