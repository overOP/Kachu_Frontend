import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginProps {
  onClose: () => void;
  openSignUp: () => void;
  openForgot: () => void;
}

const Login: React.FC<LoginProps> = ({
  onClose,
  openSignUp,
  openForgot,
}) => {
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

        {/* Left Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="auth.png"
            alt="Auth"
            className="mr-18 h-125 object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 mr-0 md:mr-14 pt-20">
          <h1 className="text-2xl font-sm text-center mb-5">
            Welcome Back!
          </h1>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border-b focus:outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border-b pr-10 focus:outline-none"
                required
              />

              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                />
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Remember me
              </label>

              <span
                onClick={openForgot}
                className="text-sm hover:text-blue-500 hover:underline cursor-pointer"
              >
                Forget Password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full md:w-20 ml-0 md:ml-26 bg-green-500 hover:bg-green-700 text-white py-2 rounded-lg border border-gray-400 cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-5">
            <hr className="flex-1 border-black" />
            <span className="px-3 text-gray-600 text-sm">
              Or login with
            </span>
            <hr className="flex-1 border-black" />
          </div>

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

          <p className="text-center text-sm mt-5">
            Don’t have an account?
            <button
              onClick={openSignUp}
              className="text-blue-500 font-medium hover:underline cursor-pointer"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;