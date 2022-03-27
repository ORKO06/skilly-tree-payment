import React from "react";
import style from "../styles/payment.module.css";

function Visa() {
  return (
    <div className={style.visaContainer}>
      <div className={style.topRightCircle} />
      <div className={style.bottomLeftCircle} />
      <div className={style.backgroundBlur} />
      <div className={style.details}>
        <div className={style.selectBtn} />
        <p className={style.accNumber}>XXXX 4023</p>
      </div>
    </div>
  );
}

export default Visa;
