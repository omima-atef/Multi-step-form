import styles from "./ThanksMsg.module.css";

function ThanksMsg() {
  return (
    <div className={`content ${styles.final}`}>
      <div className="title">
        <img src="/assets/images/icon-thank-you.svg" alt="" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default ThanksMsg;
