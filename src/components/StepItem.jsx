import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PostContext } from "../page/MainPage";

function StepItem({ num, navLink, children }) {
  const { disabled, errorEnput } = useContext(PostContext);
  const nav = useLocation();
  console.log("render", nav.pathname);
  const handleStepClick = (num, e) => {
    // console.log(nav.pathname);
    // if (nav.pathname.startsWith("/msg")) return;

    if (num === 2 && disabled) {
      errorEnput(e);
      e.preventDefault();
    }
  };
  return (
    <li key={num}>
      <NavLink
        disabled={true}
        to={nav.pathname.startsWith("/msg") ? "/msg" : navLink}
        onClick={(e) => handleStepClick(num, e)}
      >
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
