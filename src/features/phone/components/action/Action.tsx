import { usePhone } from "../../hooks/use.phone";

export function Action() {
  const phone = usePhone();

  const handleCallHang = () => {
    phone.handleIsCalling();
  };

  return (
    <>
      {phone.phoneIsCalling ? (
        <>
          <a href="#" className="hang active" onClick={handleCallHang}>
            Hang
          </a>
          <a href="#" className="call" onClick={handleCallHang}>
            Call
          </a>
        </>
      ) : (
        <>
          <a href="#" className="hang" onClick={handleCallHang}>
            Hang
          </a>
          <a href="#" className="call active" onClick={handleCallHang}>
            Call
          </a>
        </>
      )}
    </>
  );
}
