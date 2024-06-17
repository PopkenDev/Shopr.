interface FormLabelProps {
  label: string;
  name: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ label, name }) => {
  return (
    <label
      htmlFor={name}
      className="dark:text-white font-semibold text-sm mb-1"
    >
      {label}
    </label>
  );
};

export default FormLabel;
