import styles from "./Form.module.css";
import { useContext } from "react";
import { PostContext } from "../page/MainPage";

function InputField({ id, type, placeholder, value, error }) {
  const { handleInputChange } = useContext(PostContext);

  return (
    <div>
      <label
        htmlFor={id}
        className={`${styles.label} ${error && styles.error}`}
      >
        {id}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required
        aria-required="true"
        aria-describedby={`${id}Error`}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
export default InputField;
