import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ onClick = null, children, toPage, goBack }) {
  return (
    <div className={styles.buttonContainer}>
      {goBack && (
        <Link to={goBack} className={styles.back}>
          <button type="button">Go Back</button>
        </Link>
      )}
      <Link to={toPage} onClick={onClick} className={styles.next}>
        <button type="button">{children}</button>
      </Link>
    </div>
  );
}

export default Button;
