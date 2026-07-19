import styles from "./Form.module.css";

function InputField({ id, type, placeholder, register, error }) {
  return (
    <div className={`${error ? styles.error : ""}`}>
      {error && <p>{error}</p>}
      <label htmlFor={id} className={`${styles.label}`}>
        {id}
      </label>

      <input type={type} id={id} placeholder={placeholder} {...register} />
    </div>
  );
}

export default InputField;
