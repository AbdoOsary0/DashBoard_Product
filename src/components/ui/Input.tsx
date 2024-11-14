import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}
const Input = ({ ...rest }: IProps) => {
  return (
    <input {...rest}
      className="border-2 border-gray-300 rounded-md 
    py-1 px-3 text-md w-full focus:border-indigo-500 focus:outline-none *
    focus: ring-indigo-500    " />
  );
}

export default Input;