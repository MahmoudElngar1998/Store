import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useEffect } from "react";
// import { useCart } from "../Store";

export default function MainLayout() {
  // const { calcTotal, items } = useCart();

  // useEffect(() => {
  //   calcTotal();
  // }, [items]);
  return (
    <div className=" flex flex-col items-center">
      <Header />
      <div className="container  min-h-[70dvh]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
