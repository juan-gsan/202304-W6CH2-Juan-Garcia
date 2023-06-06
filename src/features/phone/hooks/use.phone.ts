import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import {
  addNumberToDisplay,
  deleteDisplay,
  updateCalling,
} from "../redux/phone.slice";

export function usePhone() {
  const phone = useSelector((state: RootState) => state.phone);
  const dispatch: AppDispatch = useDispatch();

  const handleAddNumber = (item: string) => {
    dispatch(addNumberToDisplay(item));
  };
  const handleDeleteNumber = () => {
    dispatch(deleteDisplay());
  };
  const handleIsCalling = () => {
    dispatch(updateCalling());
  };
  return {
    phoneNumber: phone.phoneNumber,
    phoneIsCalling: phone.isCalling,
    handleAddNumber,
    handleDeleteNumber,
    handleIsCalling,
  };
}
