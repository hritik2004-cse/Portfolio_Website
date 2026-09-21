import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const Toast = ({ Icon, title, description }) => {
  return (
    <Alert className="bg-[#140e25]/95 border-accent/30 text-white shadow-2xl backdrop-blur-md p-4 rounded-xl">
      {Icon && <Icon className="text-accent !size-5" />}
      <AlertTitle className="text-white font-semibold tracking-wide text-base">{title}</AlertTitle>
      <AlertDescription className="text-white/70 text-sm mt-1">{description}</AlertDescription>
    </Alert>
  );
};

export default Toast;
