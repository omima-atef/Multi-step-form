import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PostContext } from "../page/MainPage";

function StepItem({ num, navLink, children }) {
  const { disabled, errorEnput } = useContext(PostContext);

  const handleStepClick = (num, e) => {
    if (num === 2 && disabled) {
      errorEnput(e);
      e.preventDefault();
    }
  };
  return (
    <li key={num}>
      <NavLink to={navLink} onClick={(e) => handleStepClick(num, e)}>
        <span>{num}</span>
        <div>
          <h5>STEP {num}</h5>
          <h1>{children}</h1>
        </div>
      </NavLink>
    </li>
  );
}

export default StepItem;
