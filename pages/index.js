import Navbar from "../components/Navbar";
import OrderSummary from "../components/OrderSummary";
import Payment from "../components/Payment";

export default function Home() {
  return (
    <div style={{ background: "#FFFDFD" }} className=" m-auto">
      <Navbar />
      <div className="flex md:grid flex-col-reverse md:grid-cols-main md:grid-rows-none grid-cols-none  ">
        <div className="shadow-[-3px_4px_11px_rgba(0,0,0,0.18)] md:shadow-none m-4  md:my-10 rounded-2xl md:rounded-none px-4">
          <Payment />
        </div>
        <div className="md:bg-[#E5E5E5] sm:bg-white px-4 sm:m-0 mt-6 rounded-2xl md:rounded-none">
          <div
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: " 600",
              fontSize: "16px",
              lineheight: "24px",
              textTransform: "uppercase",
              color: "#665F60",
              marginBottom: "10px",
            }}
            className="block sm:hidden"
          >
            ORDER SUMMARY
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
