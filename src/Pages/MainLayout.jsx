import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });

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
