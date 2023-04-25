export type SelectFieldProps = {
  label: string;
  options: string[];
  multiple?: boolean;
};
const FormSelectField = ({ label, options, multiple }: SelectFieldProps) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <select className="form-select mt-1 block w-full" multiple={!!multiple}>
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default FormSelectField;
