import { createSlice } from "@reduxjs/toolkit";
import { PhoneStructure } from "../models/phone.structure";

const initialState: PhoneStructure = {
  phoneNumber: "",
  isCalling: false,
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    updateCalling: (state) => ({
      ...state,
      phone: { ...state, isCalling: !state.isCalling },
    }),

    addNumberToDisplay: (state, { payload }) => ({
      ...state,
      phone: { ...state, phoneNumber: state.phoneNumber + payload },
    }),

    deleteDisplay: (state) => ({
      ...state,
      phone: {
        ...state,
        phoneNumber: state.phoneNumber.slice(0, -1),
      },
    }),
  },
});

export const { updateCalling, addNumberToDisplay, deleteDisplay } =
  slicePhone.actions;

export default slicePhone.reducer;
