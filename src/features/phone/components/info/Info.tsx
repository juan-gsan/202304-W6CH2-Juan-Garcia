import { usePhone } from "../../hooks/use.phone";

export function Info() {
  const phone = usePhone();
  return <>{phone.phoneIsCalling ? <span>Calling...</span> : <span></span>}</>;
}
