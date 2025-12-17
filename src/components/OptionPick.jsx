import { useContext } from "react";
import { PostContext } from "../page/MainPage";

function OptionPick({ header, describe, price, index, isChecked }) {
  const { setPicker, timeBill } = useContext(PostContext);

  const handleCheckboxChange = () => {
    setPicker((prevPickers) =>
      prevPickers.map((item, indexItem) =>
        indexItem === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  return (
    <>
      <input
        type="checkbox"
        name={header}
        id={index}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={index}>
        <span></span>
        <div>
          <h1>{header}</h1>
          <p>{describe}</p>
        </div>
        <h2>+${timeBill === "Monthly" ? `${price}/mo` : `${price}0/yr`}</h2>
      </label>
    </>
  );
}

export default OptionPick;
