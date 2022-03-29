import Image from "next/image";
import React from "react";
import style from "../styles/payment.module.css";

function Visa({ circleColor, logo }) {
  return (
    <div className={style.visaContainer}>
      <div className={style.topRightCircle} />
      <div className={style.bottomLeftCircle} />
      <div className={style.backgroundBlur} />
      <div className={style.details}>
        <div
          className={style.selectBtn}
          style={
            circleColor
              ? {
                  borderColor: "red",
                }
              : {
                  borderColor: "white",
                }
          }
        />
        <p className={style.accNumber}>XXXX 4023</p>
        {!logo && (
          <Image
            src="/images/mastercard-logo.png"
            alt="f"
            width={30}
            height={30}
          />
        )}
        {logo && <p className={style.visaLogo}>VISA </p>}
      </div>
    </div>
  );
}

export default Visa;
