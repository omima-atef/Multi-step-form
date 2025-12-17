import { useContext } from "react";
import { PostContext } from "../page/MainPage";
import styles from "./ListPlan.module.css";

function OptionPlan({ item }) {
  const { timeBill, billingChange } = useContext(PostContext);

  return (
    <div className={styles.billing}>
      <input
        type="radio"
        name="billing"
        id={item.name}
        onClick={() => billingChange(item)}
        checked={item.isChecked}
        readOnly
      />
      <label htmlFor={item.name}>
        <img
          src={`/assets/images/icon-${item.name.toLowerCase()}.svg`}
          alt={`${item.name} Icon`}
          className="icon"
        />
        <div>
          <h1>{item.name}</h1>
          <h2>
            {timeBill === "Monthly" ? `${item.price}/mo` : `${item.price}0/yr`}
          </h2>
          {timeBill === "Yearly" && <h3>2 months free</h3>}
        </div>
      </label>
    </div>
  );
}

export default OptionPlan;
