import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";
import stylesButton from "./Button.module.css";
import InputField from "./InputField";

function Form() {
  const navigate = useNavigate();
  const savedData = JSON.parse(localStorage.getItem("formData"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: savedData || {
      userName: "",
      email: "",
      phoneNumber: "",
    },
  });

  function onSubmit(data) {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    navigate("/plan");
  }

  return (
    <div className="content">
      <div className="title">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <div className={styles.form}>
        <form className={styles.formGroup} onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="Name"
            type="text"
            placeholder="e.g. Stephen King"
            register={register("userName", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "This field is required",
              },
            })}
            error={errors.userName?.message}
          />

          <InputField
            id="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "This field is required",
              },
            })}
            error={errors.email?.message}
          />

          <InputField
            id="Phone Number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            register={register("phoneNumber", {
              required: "This field is required",
              minLength: {
                value: 10,
                message: "This field is required",
              },
            })}
            error={errors.phoneNumber?.message}
          />

          <div className={stylesButton.buttonContainer}>
            <button type="submit" className={stylesButton.button}>
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
