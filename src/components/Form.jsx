import { useContext } from "react";
import styles from "./Form.module.css";
import InputField from "./InputField";
import Button from "./Button";
import { PostContext } from "../page/MainPage";

function Form() {
  const { userName, email, phoneNumber, disabled, errorEnput, errors } =
    useContext(PostContext);

  return (
    <div className="content">
      <div className="title">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className={styles.form}>
        <form className={styles.formGroup}>
          <InputField
            id="Name"
            type="text"
            placeholder="e.g. Stephen King"
            value={userName}
            error={errors.errUserName}
          />
          <InputField
            id="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            error={errors.errEmail}
          />
          <InputField
            id="Phone Number"
            type="number"
            placeholder="e.g. +1 234 567 890"
            value={phoneNumber}
            error={errors.errPhone}
          />
          <Button toPage={"/plan"} onClick={(e) => disabled && errorEnput(e)}>
            Next Step
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
