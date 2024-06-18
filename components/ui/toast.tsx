"use client";

import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformation2Fill,
} from "@remixicon/react";
import { useEffect, useState } from "react";

const ToastVariants = {
  success: {
    title: "Success",
    bg: "bg-emerald-500",
    text: "text-emerald-500",
    icon: <RiCheckboxCircleFill className="text-white" />,
  },
  error: {
    title: "Error",
    bg: "bg-red-500",
    text: "text-red-500",
    icon: <RiErrorWarningFill className="text-white" />,
  },
  warning: {
    title: "Warning",
    bg: "bg-yellow-500",
    text: "text-yellow-500",
    icon: <RiAlertFill className="text-white" />,
  },
  info: {
    title: "Info",
    bg: "bg-blue-500",
    text: "text-blue-500",
    icon: <RiInformation2Fill className="text-white" />,
  },
};

// Definieer een type voor de mogelijke varianten
type VariantType = "success" | "error" | "warning" | "info";

// Definieer de ToastVariant interface
interface ToastVariant {
  bg: string;
  text: string;
  icon: JSX.Element;
  title: string;
}

// Definieer de ToastVariants interface
interface ToastVariants {
  success: ToastVariant;
  error: ToastVariant;
  warning: ToastVariant;
  info: ToastVariant;
}

// Definieer de ToastProps interface met de variant property als VariantType
interface ToastProps {
  variant: VariantType;
  message: string;
}

const Toast: React.FC<ToastProps> = ({ variant, message }) => {
  const { bg, text, icon, title } = ToastVariants[variant];

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const timer = setTimeout(() => {
      setActive(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {active && (
        <div className="absolute top-12 left-1/2 bg-[#333] text-white rounded-md overflow-hidden flex items-center light-shadow slide-in-down">
          <div className={`bg-emerald-500 py-4 px-3 ${bg}`}>{icon}</div>
          <div className="px-4">
            <h3 className={`${text} font-semibold`}>{title}</h3>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
