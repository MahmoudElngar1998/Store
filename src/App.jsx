import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import Error404 from "./Pages/Error404";
import MainLayout from "./Pages/MainLayout";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="w-full h-dvh overflow-auto bg-white text-dark ">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
