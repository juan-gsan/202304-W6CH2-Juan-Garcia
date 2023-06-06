import { usePhone } from "../../hooks/use.phone";

type PropsType = {
  item: string;
};

export function KeyItem({ item }: PropsType) {
  const phone = usePhone();

  const handleClick = () => {
    phone.handleAddNumber(item);
  };

  const handleClickDelete = () => {
    phone.handleDeleteNumber();
  };

  return (
    <>
      <li>
        {item !== "Delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big" onClick={handleClickDelete}>
            {item}
          </button>
        )}
      </li>
    </>
  );
}
