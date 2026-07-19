import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, toPage, goBack = null, onClick }) {
  return (
    <>
      <div className={styles.buttonContainer}>
        {goBack && (
          <Link to={goBack} className={styles.back}>
            Go Back
          </Link>
        )}
        <Link to={toPage} onClick={onClick} className={styles.next}>
          {children}
        </Link>
      </div>
    </>
  );
}

export default Button;
