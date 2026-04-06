import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

interface NewpasswordProps {
  onClose: () => void;
}

const Newpassword: React.FC<NewpasswordProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters ❌");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Password Changed Successfully ✅");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center relative"
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          e.stopPropagation()
        }
      >
        {/* Inner Box */}
        <div className="border-2 border-gray-400 rounded-2xl p-6">
          {/* Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/auth/password.jpg"
              alt="New Password"
              className="h-20 w-20 object-cover rounded-full border-2 border-blue-300 shadow"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
          >
            <FaTimes />
          </button>

          <h1 className="text-2xl font-bold mb-2">
            Set New Password
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* New Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
                minLength={8}
                className="w-full px-4 py-2 border border-gray-400 bg-gray-100 rounded-lg pr-10 focus:outline-none"
              />

              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-3 text-gray-600 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-3 text-gray-600 cursor-pointer"
                />
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                required
                className="w-full px-4 py-2 border border-gray-400 bg-gray-100 rounded-lg pr-10 focus:outline-none"
              />

              {showConfirm ? (
                <FaEye
                  onClick={() => setShowConfirm(false)}
                  className="absolute right-3 top-3 text-gray-600 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowConfirm(true)}
                  className="absolute right-3 top-3 text-gray-600 cursor-pointer"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
              Set Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newpassword;