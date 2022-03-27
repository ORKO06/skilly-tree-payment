import Navbar from "../components/Navbar";
import OrderSummary from "../components/OrderSummary";
import Payment from "../components/Payment";

export default function Home() {
  return (
    <div style={{ background: "#FFFDFD" }} className="max-w-8xl m-auto">
      <Navbar />
      <div className="flex md:grid flex-col-reverse md:grid-cols-main md:grid-rows-none grid-cols-none  ">
        <div>
          <Payment />
        </div>
        <div className="md:bg-[#E5E5E5] sm:bg-white">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
