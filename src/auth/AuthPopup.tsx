import React, { useState } from "react";
import ForgetPassword from "../auth/ForgetPassword";
import VerifyCode from "./VerifyCode";
import Newpassword from "./Newepassword";

// Props type
interface AuthPopupProps {
  onClose: () => void;
}

const AuthPopup: React.FC<AuthPopupProps> = ({ onClose }) => {
  const [step, setStep] = useState<"forgot" | "verify" | "new">("forgot");

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {step === "forgot" && (
          <ForgetPassword goNext={() => setStep("verify")} />
        )}
        {step === "verify" && (
          <VerifyCode goNext={() => setStep("new")} />
        )}
        {step === "new" && (
          <Newpassword onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default AuthPopup;