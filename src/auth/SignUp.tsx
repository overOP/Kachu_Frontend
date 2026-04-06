import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

interface SignUpProps {
  onClose: () => void;
  openLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onClose, openLogin }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden relative animate-scaleIn"
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          e.stopPropagation()
        }
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-xl font-bold text-gray-500 hover:text-black z-50 cursor-pointer"
        >
          ✕
        </button>

        {/* Logo */}
        <img
          src="logo.png"
          alt="Logo"
          className="absolute -top-5 -left-5 w-40 md:w-50 z-50"
        />

        {/* Left Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="auth.png"
            alt="Auth"
            className="mr-18 w-72 h-125 object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 mr-0 md:mr-14 p-6 md:p-8 pt-20">
          <h1 className="text-2xl font-sm text-center mb-5">
            Create Account
          </h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border-b focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border-b focus:outline-none"
            />

            {/* Password Field */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border-b pr-10 focus:outline-none"
              />

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                {showPassword ? (
                  <FaEye
                    className="text-gray-500"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaEyeSlash
                    className="text-gray-400"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-20 ml-0 md:ml-26 bg-green-500 hover:bg-green-700 text-white py-2 rounded-lg border border-gray-400 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <hr className="flex-1 border-black" />
            <span className="px-3 text-gray-600 text-sm">
              or signup with
            </span>
            <hr className="flex-1 border-black" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="flex items-center justify-center cursor-pointer">
              <FaFacebook className="text-blue-600 text-2xl" />
            </button>

            <button className="flex items-center justify-center">
              <img
                src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
                alt="Google"
                className="w-6 h-6 cursor-pointer"
              />
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <button
              onClick={openLogin}
              className="text-blue-500 font-medium hover:underline cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;