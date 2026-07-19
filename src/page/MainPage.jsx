import { createContext, useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import { useLocation } from "react-router-dom";

export const PostContext = createContext();

function MainPage({ children }) {
  const nav = useLocation();
  const [timeBill, setTimeBill] = useState("Monthly");
  const [billing, setBilling] = useState([
    {
      name: "Arcade",
      price: "9",
      timeBill,
      isChecked: true,
    },
    {
      name: "Advanced",
      price: " 12",
      timeBill,
      isChecked: false,
    },
    {
      name: "Pro",
      price: "15",
      timeBill,
      isChecked: false,
    },
  ]);

  const [pickers, setPicker] = useState([
    {
      header: "Online service",
      describe: "Access to multiplayer games",
      price: 1,
      isChecked: false,
    },
    {
      header: "Larger storage",
      describe: "Extra 1TB of cloud save",
      price: 2,
      isChecked: false,
    },
    {
      header: "Customizable Profile",
      describe: "Custom theme on your profile",
      price: 2,
      isChecked: false,
    },
  ]);
  const [totalAccount, setTotalAccount] = useState(0);

  const billingChange = function (item) {
    setBilling((elements) =>
      elements.map((ele) => {
        return {
          ...ele,
          isChecked: ele === item,
        };
      }),
    );
  };
  useEffect(
    function () {
      setTotalAccount(() => 0);
      pickers.map((ele) =>
        ele.isChecked
          ? setTotalAccount((e) =>
              timeBill === "Yearly" ? +e + +ele.price * 10 : +e + +ele.price,
            )
          : null,
      );
      billing.map((ele) =>
        ele.isChecked
          ? setTotalAccount((e) =>
              timeBill === "Yearly" ? +e + +ele.price * 10 : +e + +ele.price,
            )
          : null,
      );
    },
    [pickers, billing, timeBill],
  );

  const data = JSON.parse(localStorage.getItem("formData"));
  const picker = pickers
    .filter(({ isChecked }) => isChecked)
    .map(({ header }) => header);

  const bill = billing
    .filter(({ isChecked }) => isChecked)
    .map(({ name }) => name);
  useEffect(function () {
    if (nav.pathname.startsWith("/msg")) {
      data.pickers = picker;
      data.billing = `${bill}(${timeBill})`;
      data.totalAccount = totalAccount;

      localStorage.setItem("formData", JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem("formData")));
    }
  });
  return (
    <PostContext.Provider
      value={{
        billing,
        setBilling,
        timeBill,
        setTimeBill,
        pickers,
        setPicker,
        billingChange,
        totalAccount,
      }}
    >
      <div className={styles.main}>
        <div className={styles.container}>{children}</div>
      </div>
    </PostContext.Provider>
  );
}

export default MainPage;
