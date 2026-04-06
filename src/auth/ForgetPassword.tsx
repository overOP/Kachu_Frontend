import React from "react";
import { FaTimes } from "react-icons/fa";

// Props type
interface ForgetPasswordProps {
  goNext: () => void;
  onClose: () => void;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ goNext, onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goNext();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md relative text-center"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
        >
          <FaTimes />
        </button>

        <div className="border-2 border-gray-400 p-4 rounded-2xl">
          {/* Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/auth/password.jpg"
              alt="Forgot Password"
              className="h-20 w-20 object-cover rounded-full border-2 border-blue-300"
            />
          </div>

          <h1 className="text-2xl font-bold mb-2">
            Forgot Password
          </h1>

          <p className="text-gray-700 text-sm mb-4">
            Enter your email to receive a verification code
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-500 text-gray-700 bg-gray-100 rounded-lg focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;