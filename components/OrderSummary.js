//components
import Image from "next/image";

//icons
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const OrderSummary = () => {
  return (
    <div className=" flex justify-center">
      <div className="max-w-300  float-right sm:rounded-xl md:rounded-none p-2 md:bg-[#E5E5E5] sm:bg-white sm:shadow-[-3px_4px_11px_rgba(0,0,0,0.18)] md:shadow-none sm:m-0 md:my-10 ">
        {true && (
          <span className="my-2 hidden md:block ">
            <div className="flex flex-row gap-2">
              <p className="text-lg font-bold">ORDER SUMMARY</p>
              <p className="text-xs text-blue-600 flex">Edit</p>
            </div>
            <h4
              style={{ border: "1px solid #dddddd" }}
              className="max-w-250 m-auto "
            />
          </span>
        )}
        <div className="flex m-auto my-3 md:my-6 gap-4">
          <Image
            src="/images/logo.png"
            alt="profile icon"
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-base ">ELLA .H</p>
              <CheckCircleOutlineOutlinedIcon style={{ color: "#15C11C" }} />
              <Image
                src="/images/united-kingdom.png"
                width={20}
                height={20}
                alt="nationality = great britain"
              />
            </div>
            <div className="flex flex-row gap-2">
              <SchoolRoundedIcon style={{ color: "#5B5B5B" }} />
              <p className="font-thin text-xs mt-1">English</p>
            </div>
          </div>
        </div>
        <h4
          style={{ border: "1px solid #dddddd" }}
          className="max-w-300 m-auto "
        />

        <div className="my-2 md:my-6">
          <p style={{ color: "#8C8C8C" }} className="text-xs">
            Date and Time
          </p>
          <p style={{ color: "#5B5B5B" }} className="text-xl font-bold ">
            Friday, February 4, 18:30
          </p>
          <p style={{ color: "#8C8C8C" }} className="text-sm">
            GMT +5:30
          </p>
        </div>
        <h4
          style={{ border: "1px solid #dddddd" }}
          className="max-w-300 m-auto "
        />

        <div className="flex justify-around md:my-6 my-2 ">
          <p className="font-thin text-sm" style={{ color: "#6B6B6B" }}>
            Apply Coupon
          </p>
          <input
            className="rounded-lg"
            style={{ background: "#f5f5f5", width: "80px" }}
            type="text"
          />
        </div>
        <h4
          style={{ border: "1px solid #dddddd" }}
          className="max-w-300 m-auto "
        />

        <div className="flex justify-between p-4 m-0 md:my-4">
          <div style={{ color: "#8C8C8C" }}>
            <p className="text-sm font-normal"> Service Details</p>
            <p className="text-base font-normal">1 hour lesson</p>
            <p className="text-base font-normal">Transaction fees</p>
            <p className="text-base font-normal">Lesson Cancellation</p>
          </div>
          <div className="text-right">
            <p style={{ color: "#8C8C8C" }} className="text-sm font-normal">
              Price per hour
            </p>
            <p style={{ color: "#6b6b6b" }} className="text-base font-semibold">
              $3000.80
            </p>
            <p style={{ color: "#6b6b6b" }} className="text-base font-semibold">
              $22.51
            </p>
            <p style={{ color: "#15C11C" }} className="text-base font-semibold">
              Free
            </p>
          </div>
        </div>
        <h4
          style={{ border: "1px solid #dddddd" }}
          className="max-w-300 m-auto "
        />

        <div className="flex justify-between px-4">
          <p style={{ color: "#8C8C8C" }} className="text-lg font-normal">
            Total
          </p>
          <p style={{ color: "#6b6b6b" }} className="text-lg font-bold">
            Rs: 3496.00
          </p>
        </div>
        <div className="my-4 md:my-6 mx-2 flex justify-between gap-2">
          <p>
            <CheckBoxOutlinedIcon style={{ color: "#15C11C" }} />
          </p>
          <p style={{ color: "#6b6b6b" }} className="text-xs font-normal">
            I want a <span style={{ color: "#15C11C" }}>free lesson</span> or a
            refund if the tutor doesn&apos;t meet my needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
