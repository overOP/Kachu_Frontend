import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Factories from "./pages/Factories";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/factories" element={<Factories />} />
        </Routes>
      </div>
  );
};

export default App;