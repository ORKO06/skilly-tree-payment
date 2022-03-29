import React from "react";
import Visa from "./Visa";
import style from "../styles/payment.module.css";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Payment() {
  return (
    <div className={style.paymentParentContainer}>
      <h1 className={style.head}>
        Personal Details <span>• Payment section</span>
      </h1>
      <h1 className={style.head2}>PAYMENT CHECKOUT</h1>
      <h1 className={style.heading}>Payment Section</h1>
      <h1 className={style.subheading}>
        saved cards <span>Edit</span>
      </h1>
      <div className={style.cardContainer}>
        <Visa circleColor={true} logo={true} />
        <Visa />
      </div>
      <h1 className={style.subheading} style={{ marginTop: "15px" }}>
        Other payment methods
      </h1>
      <div className={style.buttonContainer}>
        <button className={style.btnRed}>Credit/Debit Card</button>
        <button className={style.btn}>Net Banking</button>
        <button className={style.btn}>UPI</button>
      </div>
      <div className={style.inputDetailsContainer}>
        <div className={style.CardNumberSet}>
          <h1 className={style.DetailsHead}>Card Number</h1>
          <div className={style.CardInputBold}>XXXX XXXX XXXX XXXX</div>
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
            <div style={{ width: "120px" }} className={style.CardInput}>
              MM/YY
            </div>
          </div>
          <div className={style.CardNumberSet}>
            <h1 className={style.DetailsHead}>CW</h1>
            <div style={{ width: "120px" }} className={style.CardInput}>
              ---
              <span>
                <InfoOutlinedIcon
                  style={{
                    color: "blue",
                    fontSize: "14px",
                    marginLeft: "50px",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-between my-4 items-center">
        <p style={{ color: "blue" }}>
          <span>
            <ArrowBackIcon />
          </span>
          Back to Personal Details
        </p>
        <button
          className="rounded-full px-4 sm:px-6 py-2 text-white none sm:block"
          style={{
            background:
              "linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)",
          }}
        >
          Make Payment
        </button>
      </div>
      <button
        className="rounded-full block m-auto my-4  px-4 sm:px-6 py-2 text-white sm:hidden"
        style={{
          background:
            "linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)",
        }}
      >
        Make Payment
      </button>
    </div>
  );
}

export default Payment;
