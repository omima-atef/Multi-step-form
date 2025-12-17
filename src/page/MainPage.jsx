import { createContext, useEffect, useState } from "react";
import styles from "./MainPage.module.css";

export const PostContext = createContext();

function MainPage({ children }) {
  const [formData, setFormData] = useState({
    Name: "",
    "Email Address": "",
    "Phone Number": "",
  });
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

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({
    errUserName: false,
    errEmail: false,
    errPhone: false,
  });

  const billingChange = function (item) {
    setBilling((elements) =>
      elements.map((ele) => {
        return {
          ...ele,
          isChecked: ele === item,
        };
      })
    );
  };
  function errorEnput(e) {
    e.preventDefault();
    setErrors({ errUserName: false, errEmail: false, errPhone: false });
    if (formData.Name.trim().length < 5) {
      setErrors((e) => ({ ...e, errUserName: true }));
    }
    if (formData["Email Address"].trim().length < 5) {
      setErrors((e) => ({ ...e, errEmail: true }));
    }
    if (formData["Phone Number"].trim().length < 5) {
      setErrors((e) => ({ ...e, errPhone: true }));
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(
    function () {
      setErrors((e) => ({
        ...e,
        errEmail: false,
        errUserName: false,
        errPhone: false,
      }));
      setDisabled(() => false);
      if (
        formData.Name.trim().length < 5 ||
        formData["Email Address"].trim().length < 5 ||
        formData["Phone Number"].trim().length < 5
      ) {
        setDisabled(() => true);
      }
    },
    [formData]
  );
  useEffect(
    function () {
      setTotalAccount(() => 0);
      pickers.map((ele) =>
        ele.isChecked
          ? setTotalAccount((e) =>
              timeBill === "Yearly" ? +e + +ele.price * 10 : +e + +ele.price
            )
          : null
      );
      billing.map((ele) =>
        ele.isChecked
          ? setTotalAccount((e) =>
              timeBill === "Yearly" ? +e + +ele.price * 10 : +e + +ele.price
            )
          : null
      );
    },
    [pickers, billing, timeBill]
  );
  return (
    <PostContext.Provider
      value={{
        userName: formData.Name,
        email: formData["Email Address"],
        phoneNumber: formData["Phone Number"],
        billing,
        setBilling,
        timeBill,
        setTimeBill,
        pickers,
        setPicker,
        billingChange,
        totalAccount,
        disabled,
        errorEnput,
        handleInputChange,
        errors,
      }}
    >
      <div className={styles.main}>
        <div className={styles.container}>{children}</div>
      </div>
    </PostContext.Provider>
  );
}

export default MainPage;
