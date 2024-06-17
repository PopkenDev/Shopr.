import React from "react";

interface FormInputProps {
  placeholder: string;
  type: string;
  name: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  type,
  name,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`w-fit bg-[#222] px-4 py-1 rounded-md text-white placeholder:text-white/70 placeholder:text-sm outline-none light-shadow ${className}`}
    />
  );
};

export default FormInput;
