import { PhoneStructure } from "../models/phone.structure";
import phoneReducer, {
  addNumberToDisplay,
  deleteDisplay,
  updateCalling,
} from "./phone.slice";

describe("Given a phoneReducer", () => {
  const initialState: PhoneStructure = {
    phoneNumber: "",
    isCalling: false,
  };

  describe("When it receives an unknown action", () => {
    test("Then it should dispatch the initialState", () => {
      expect(phoneReducer(undefined, { type: "unknown" })).toEqual(
        initialState
      );
    });
  });
  describe("When it receives an addNumberToDisplay action with payload 3", () => {
    test("Then it should return an updated display with the number 3", () => {
      const actual = phoneReducer(initialState, addNumberToDisplay("3"));
      expect(actual.phoneNumber).toEqual("3");
    });
  });
  describe("When it receives a deleteDisplay action", () => {
    test("Then it should erase the display", () => {
      const actual = phoneReducer(initialState, deleteDisplay);
      expect(actual.phoneNumber).toEqual("");
    });
  });
  describe("When it receives an updateCalling action", () => {
    test("Then it should change calling to true", () => {
      const actual = phoneReducer(initialState, updateCalling);
      expect(actual.isCalling).toEqual(true);
    });
  });
});
