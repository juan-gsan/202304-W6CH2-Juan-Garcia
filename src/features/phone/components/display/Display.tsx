import { usePhone } from "../../hooks/use.phone";

export function Display() {
  const phone = usePhone();
  return (
    <>
      <span className="number">{phone.phoneNumber}</span>
    </>
  );
}
