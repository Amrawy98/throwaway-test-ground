import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputFieldProps = {
  label: string;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const InputField = ({ label, inputProps }: InputFieldProps) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input {...inputProps} />
    </label>
  );
};

/*
name: string;
  className: string;
  id: string;
  type: string;
  placeholder: string;
  "aria-label": string;
  autocomplete: string;
*/

export default InputField;
