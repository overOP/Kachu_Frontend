import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Factories from "./pages/Factories";
import ShopBy from "./components/ShopBy";
import ShopBydetails from "./details/ShopBydetails";
import Productsdetails from "./details/Productsdetails";
import Footer from "./layout/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/factories" element={<Factories />} />


        <Route path="/shopby" element={<ShopBy />} />
        <Route path="/shop/:name" element={<ShopBydetails />} />
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Productsdetails />} />
         
      </Routes>
      <Footer />
    </div>
  );
};

export default App;