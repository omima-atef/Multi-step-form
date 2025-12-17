import { useContext } from "react";
import styles from "./ListPlan.module.css";
import OptionPlan from "./OptionPlan";
import Button from "./Button";
import { PostContext } from "../page/MainPage";

function ListPlan() {
  const { timeBill, setTimeBill, billing } = useContext(PostContext);

  function toggleBill() {
    setTimeBill((e) => (e === "Monthly" ? "Yearly" : "Monthly"));
  }

  return (
    <div className="content">
      <div className="title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div>
        <div>
          <div className={styles.groupOptions}>
            {billing.map((item, index) => (
              <OptionPlan item={item} key={index} />
            ))}
          </div>
          <div
            className={`${styles.boxCheck} ${styles[timeBill.toLowerCase()]}`}
          >
            <button onClick={() => setTimeBill("Monthly")}>Monthly</button>
            <button onClick={toggleBill}></button>
            <button onClick={() => setTimeBill("Yearly")}>Yearly</button>
          </div>
        </div>
        <Button goBack="/form" toPage="/picker">
          Next Step
        </Button>
      </div>
    </div>
  );
}

export default ListPlan;
