"use client";

const ButtonVariants = {
  variants: {
    default: {
      bg: "bg-gray-500",
      text: "text-white",
    },
    primary: {
      bg: "bg-teal-800",
      text: "text-white",
    },
    error: {
      bg: "bg-red-500",
      text: "text-white",
    },
  },
  size: {
    sm: "px-4 py-2",
    lg: "",
    xl: "",
  },
};

type VariantType = "default" | "primary" | "error";
type SizeType = "sm" | "lg" | "xl";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  variant: VariantType;
  size: SizeType;
  type: ButtonType;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  size,
  type,
  className,
  onClick,
}) => {
  const { bg, text } = ButtonVariants.variants[variant];

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${bg} ${text} ${ButtonVariants.size[size]} ${className} text-sm font-semibold rounded-md light-shadow transition hover:bg-teal-900 flex items-center gap-x-1`}
    >
      {children}
    </button>
  );
};

export default Button;
