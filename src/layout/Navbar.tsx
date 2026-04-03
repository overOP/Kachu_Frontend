import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-10 w-full flex justify-center z-50">
      <div className="w-full max-w-325 h-14 mx-4 md:mx-10 rounded-2xl bg-gray-300 px-6 md:px-8 flex items-center justify-between text-black">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-30 md:h-40 w-auto mt-3 object-contain"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
          <Link to="/products" className="hover:text-blue-300 transition">
            Products
          </Link>
          <Link to="/factories" className="hover:text-blue-300 transition">
            Factories
          </Link>
          <Link to="/shop" className="hover:text-blue-300 transition">
            Shop
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:block relative">
            <IoIosSearch className="absolute left-3 top-2.5 text-lg text-gray-600" />
            <input
              type="search"
              placeholder="Search Products..."
              className="pl-10 pr-4 py-2 w-40 md:w-52 lg:w-60 h-9 rounded-full bg-gray-100 text-gray-700 border border-red-400 focus:outline-none"
            />
          </div>

          <BsFillPersonFill className="text-xl md:text-2xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
