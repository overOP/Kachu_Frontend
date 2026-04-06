import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import ForgetPassword from "../auth/ForgetPassword";
import VerifyCode from "../auth/VerifyCode";
import Newpassword from "../auth/Newepassword";

const Navbar: React.FC = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false); // Hamburger menu
  const [showMobileSearch, setShowMobileSearch] = useState(false); // Mobile search toggle

  return (
    <>
      <nav className="sticky top-10 w-full flex justify-center z-50">
        <div className="w-full max-w-325 h-14 mx-4 md:mx-10 rounded-2xl bg-gray-300 px-6 md:px-8 flex items-center justify-between text-black relative border-b-2 border-gray-400 shadow-lg">
          
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

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
            <Link to="/products" className="hover:text-blue-300 transition">Products</Link>
            <Link to="/factories" className="hover:text-blue-300 transition">Factories</Link>
            <Link to="/admin" className="hover:text-blue-300 transition">Admin</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Desktop Search */}
            <div className="hidden lg:block relative">
              <IoIosSearch className="absolute left-3 top-2.5 text-lg text-gray-600" />
              <input
                type="search"
                placeholder="Search Products..."
                className="pl-10 pr-4 py-2 w-40 md:w-52 lg:w-60 h-9 rounded-full bg-gray-100 text-gray-700 border border-red-400 focus:outline-none"
              />
            </div>

            {/* Mobile Search Icon */}
            <button
              className="md:hidden text-xl"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <IoIosSearch />
            </button>

            {/* User Icon */}
            <button onClick={() => setShowLogin(true)}>
              <BsFillPersonFill className="text-xl md:text-2xl cursor-pointer" />
            </button>

            {/* Hamburger Menu */}
            <button
              className="md:hidden text-2xl ml-2"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="absolute top-full left-0 w-full bg-gray-300 flex flex-col items-center gap-4 py-4 md:hidden rounded-b-2xl z-50">
              <Link to="/products" className="hover:text-blue-300 transition" onClick={() => setMobileMenu(false)}>Products</Link>
              <Link to="/factories" className="hover:text-blue-300 transition" onClick={() => setMobileMenu(false)}>Factories</Link>
              <Link to="/admin" className="hover:text-blue-300 transition" onClick={() => setMobileMenu(false)}>Admin</Link>
            </div>
          )}

          {/* Mobile Search Input */}
          {showMobileSearch && (
            <div className="absolute top-full left-0 w-full bg-gray-300 flex justify-center py-2 md:hidden z-50">
              <div className="relative w-11/12">
                <IoIosSearch className="absolute left-3 top-2.5 text-lg text-gray-600" />
                <input
                  type="search"
                  placeholder="Search Products..."
                  className="pl-10 pr-4 py-2 w-full h-9 rounded-full bg-gray-100 text-gray-700 border border-red-400 focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ================= AUTH MODALS ================= */}
      {showSignup && <SignUp onClose={() => setShowSignup(false)} openLogin={() => { setShowSignup(false); setShowLogin(true); }} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} openSignUp={() => { setShowLogin(false); setShowSignup(true); }} openForgot={() => { setShowLogin(false); setShowForgot(true); }} />}
      {showForgot && <ForgetPassword goNext={() => { setShowForgot(false); setShowVerify(true); }} onClose={() => setShowForgot(false)} />}
      {showVerify && <VerifyCode goNext={() => { setShowVerify(false); setShowNewPass(true); }} onClose={() => setShowVerify(false)} />}
      {showNewPass && <Newpassword onClose={() => setShowNewPass(false)} />}
    </>
  );
};

export default Navbar;