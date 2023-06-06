import { useContext } from "react";
import { Context } from "../../context/context";

export function Display() {
  const {
    phoneContext: { phoneNumber },
  } = useContext(Context);

  return (
    <>
      <span className="number">{phoneNumber}</span>
    </>
  );
}
