import React from "react";
import Visa from "./Visa";
import style from "../styles/payment.module.css";

function Payment() {
  return (
    <div className={style.paymentParentContainer}>
      <h1 className={style.head}>
        Personal Details <span>• Payment section</span>
      </h1>
      <h1 className={style.heading}>Payment Section</h1>
      <h1 className={style.subheading}>saved cards</h1>
      <div className={style.cardContainer}>
        <Visa />
        <Visa />
      </div>
      <h1 className={style.subheading} style={{ marginTop: "15px" }}>
        Other payment methods
      </h1>
      <div className={style.buttonContainer}>
        <button className={style.btn}>Credit/Debit Card</button>
        <button className={style.btn}>Net Banking</button>
        <button className={style.btn}>UPI</button>
      </div>
      <div className={style.inputDetailsContainer}>
        <div className={style.CardNumberSet}>
          <h1 className={style.DetailsHead}>Card Number</h1>
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            className={style.CardInput}
          />
        </div>
        <div className={style.CardNumberSet}>
          <h1 className={style.DetailsHead}>Name on Card</h1>
          <input
            type="text"
            className={style.CardInput}
            placeholder="ENTER YOUR NAME"
          />
        </div>
        <div className={style.CardNumberSetHead}>
          <div className={style.CardNumberSet}>
            <h1 className={style.DetailsHead}>Expiry Date</h1>
            <input
              type="text"
              className={style.CardInput}
              placeholder="MM/YY"
            />
          </div>
          <div className={style.CardNumberSet}>
            <h1 className={style.DetailsHead}>CW</h1>
            <input type="text" className={style.CardInput} placeholder="---" />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-between m-4">
        <p style={{ color: "blue" }}>Back to Personal Details</p>
        <button
          className="rounded-full px-4 sm:px-6 py-2 text-white"
          style={{
            background:
              "linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)",
          }}
        >
          Sign In
        </button>
      </div>
      <button
        className="rounded-full block m-auto my-4 sm:none px-4 sm:px-6 py-2 text-white"
        style={{
          background:
            "linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)",
        }}
      >
        Sign In
      </button>
    </div>
  );
}

export default Payment;
