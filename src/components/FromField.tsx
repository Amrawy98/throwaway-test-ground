import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type FromFieldProps = {
  label: string;
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const FromField = ({ label, inputProps }: FromFieldProps) => {
  //make fields optional and filter the fields for undefined ones
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input {...inputProps} />
    </label>
  );
};

export default FromField;
