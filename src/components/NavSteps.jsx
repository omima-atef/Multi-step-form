import styles from "./NavSteps.module.css";
import StepItem from "./StepItem";
function NavSteps() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <StepItem num={1} navLink={"form"}>
          Your info
        </StepItem>
        <StepItem num={2} navLink={"plan"}>
          Select plan
        </StepItem>
        <StepItem num={3} navLink={"picker"}>
          add-ons
        </StepItem>
        <StepItem num={4} navLink={"final"}>
          summary
        </StepItem>
      </ul>
    </nav>
  );
}

export default NavSteps;
