import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./finalStep.module.css";
import { PostContext } from "../page/MainPage";

function FinalStep() {
  const { billing, pickers, timeBill, totalAccount } = useContext(PostContext);

  console.log(billing);
  return (
    <div className={`content ${styles.finalConfirm}`}>
      <div className="title">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.price}>
        <div>
          {billing.map((ele) =>
            ele.isChecked ? (
              <>
                <div>
                  <h1>
                    {ele.name} ({timeBill})
                  </h1>
                  <Link className={styles.change} to="/plan">
                    Change
                  </Link>
                </div>
                <span key={ele.name}>
                  ${ele.price}
                  {timeBill === "Monthly" ? `/mo` : `0/yr`}
                </span>
              </>
            ) : (
              ""
            )
          )}
        </div>
        <div>
          {pickers.map(
            (picker) =>
              picker.isChecked && (
                <div key={picker.index}>
                  <p>{picker.header}</p>
                  <span>
                    +${picker.price}
                    {timeBill === "Monthly" ? `/mo` : `0/yr`}{" "}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
      <div className={styles.total}>
        <p>Total (per month)</p>
        <span className={styles.total}>+${totalAccount}/mo</span>
      </div>
      <form action="" className={styles.button}>
        <Button goBack="/picker" toPage="/msg">
          Confirm
        </Button>
      </form>
    </div>
  );
}

export default FinalStep;
