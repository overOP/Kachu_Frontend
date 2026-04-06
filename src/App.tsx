import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Factories from "./pages/Factories";
import ShopBy from "./components/ShopBy";
import ShopBydetails from "./details/ShopBydetails";
import Productsdetails from "./details/Productsdetails";
import Footer from "./layout/Footer";
import Factoriedetails from "./details/Factoriedetails";
import Admin from "./pages/Admin";
import AuthPopup from "./auth/AuthPopup";
import { useState } from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import ForgetPassword from "./auth/ForgetPassword";
import VerifyCode from "./auth/VerifyCode";
import Newpassword from "./auth/Newepassword";


const App: React.FC = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />

{/* auth */}
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<SignUp/>} />
<Route path="/forgot-password" element={<ForgetPassword/>} />
<Route path="/verify-code" element={<VerifyCode/>} />
<Route path="/new-password" element={<Newpassword/>} />




        <Route path="/factories" element={<Factories />} />
        <Route path="/factories/:name" element={<Factoriedetails />} />
        <Route path="/shopby" element={<ShopBy />} />
        <Route path="/shop/:name" element={<ShopBydetails />} />
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Productsdetails />} />
         
      </Routes>
      <Footer />
      {openPopup && (
        <AuthPopup onClose={() => setOpenPopup(false)} />
      )}
    </div>
  );
};

export default App;