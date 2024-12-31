import { ButtonProps } from "../../app/types";

const Button = (buttonProps: ButtonProps) => {
  const { label, onClick } = buttonProps;
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
