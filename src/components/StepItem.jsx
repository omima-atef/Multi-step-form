import { NavLink, useLocation } from "react-router-dom";

function StepItem({ num, navLink, children }) {
  const nav = useLocation();

  const handleStepClick = (num, e) => {
    if (nav.pathname.startsWith("/msg") || !localStorage.getItem("formData"))
      e.preventDefault();
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
