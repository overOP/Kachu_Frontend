import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface VerifyCodeProps {
  goNext: () => void;
  onClose: () => void;
}

const VerifyCode: React.FC<VerifyCodeProps> = ({ goNext, onClose }) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const code = inputs.current
      .map((input) => input?.value || "")
      .join("");

    if (code.length < 4) {
      alert("Please enter all 4 digits");
      return;
    }

    goNext();
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
        <div className="border-2 border-gray-400 rounded-2xl p-6">
          {/* Image */}
          <div className="flex justify-center mb-4">
            <img
              src="/auth/VerifyCode.jpg"
              alt="Verify Code"
              className="h-20 w-20 object-cover rounded-full border-2 border-blue-300 shadow"
            />
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
          >
            <FaTimes />
          </button>

          <h1 className="text-2xl font-bold mb-2">Verify Code</h1>

          <p className="text-gray-700 text-sm mb-4">
            Enter the 4-digit code sent to your email
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3 mb-4">
              {[0, 1, 2, 3].map((_, idx) => (
                <input
                  key={idx}
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  ref={(el) => (inputs.current[idx] = el)}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="w-12 h-12 border border-gray-400 rounded-lg text-center text-gray-700 text-lg bg-gray-100 focus:outline-none"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;