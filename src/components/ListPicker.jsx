import Button from "./Button";
import OptionPick from "./OptionPick";
import styles from "./ListPicker.module.css";
import { useContext } from "react";
import { PostContext } from "../page/MainPage";

function ListPicker() {
  const { pickers } = useContext(PostContext);

  return (
    <div className="content">
      <div className="title">
        <h1>Pcik add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form action="">
        <div>
          <div className={styles.optionPick}>
            {pickers.map((e, i) => (
              <OptionPick
                header={e.header}
                describe={e.describe}
                price={e.price}
                key={i}
                index={i}
                isChecked={e.isChecked}
              />
            ))}
          </div>
        </div>
        <Button goBack="/plan" toPage="/final">
          Next Step
        </Button>
      </form>
    </div>
  );
}

export default ListPicker;
