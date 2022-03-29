import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      style={{
        boxShadow: `0px 4px 11px rgba(0, 0, 0, 0.14)`,
        padding: "20px 0",
      }}
      className="sm:p-0"
    >
      <div className="md:grid hidden sm:gap-4 max-w-8xl m-auto grid-cols-2 sm:grid-cols-navbar ">
        <div className="flex flex-row gap-4 justify-center">
          <Image
            width={60}
            height={60}
            src="/images/logo.png"
            alt="skilly tree logo"
          />
          <div className="flex items-center flex-col justify-center">
            <p
              className=" text-base md:text-2xl"
              style={{
                fontWeight: "700",
                background: `linear-gradient(106.15deg, #FDA02F -0.58%, #FC4D6D 41.78%)`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                letterSpacing: "0.135em",
              }}
            >
              SKILLYTREE
            </p>
            <b
              style={{
                fontSize: "9px",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#8B8B8B",
                letterSpacing: "0.1em",
              }}
            >
              Upskill with A Personal Touch
            </b>
          </div>
        </div>
        <div className=" md:flex lg:flex items-center hidden justify-end  ">
          <input
            type="text"
            placeholder="SEARCH A SKILL"
            className="border-solid border-2 rounded-full py-2 px-4 ml-40"
            style={{
              borderColor: "rgba(167, 167, 167, 0.56)",
            }}
          />
        </div>
        <div className="flex items-center sm:min-w-250  justify-around">
          <div className="flex flex-col gap-1 ">
            <h4
              style={{
                border: "4px solid #000000",
                width: "60px",
              }}
            />
            <h4
              style={{
                border: "4px solid #000000",
                width: "40px",
              }}
            />
            <h4
              style={{
                border: "4px solid #000000",
                width: "20px",
              }}
            />
          </div>
          <h1 className="hidden sm:block"> Log In</h1>
          <div className="text-sm md:text-xs">
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
        </div>
      </div>
      <div className="grid md:hidden  py-8 block sm:gap-4 grid-cols-navbar sm:grid-cols-navbar ">
        <div className="flex flex-col gap-1 align-center justify-center px-2">
          <h4
            style={{
              border: "2px solid #000000",
              width: "30px",
            }}
          />
          <h4
            style={{
              border: "2px solid #000000",
              width: "20px",
            }}
          />
          <h4
            style={{
              border: "2px solid #000000",
              width: "10px",
            }}
          />
        </div>

        <div className="flex flex-row gap-4 ">
          <Image
            width={30}
            height={30}
            src="/images/logo.png"
            alt="skilly tree logo"
          />
          <div className="flex items-center flex-col">
            <p
              className=" text-sm"
              style={{
                fontWeight: "700",
                background: `linear-gradient(106.15deg, #FDA02F -0.58%, #FC4D6D 41.78%)`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                letterSpacing: "0.135em",
              }}
            >
              SKILLYTREE
            </p>
            <b
              style={{
                fontSize: "4.7px",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#8B8B8B",
                letterSpacing: "0.1em",
              }}
            >
              Upskill with A Personal Touch
            </b>
          </div>
        </div>

        <div className="flex items-center sm:min-w-250  justify-around">
          <div className="text-sm md:text-xs">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
