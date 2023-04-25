export type SelectFieldProps = {
  label: string;
  options: string[];
  multiple?: boolean;
};
const SelectField = ({ label, options, multiple }: SelectFieldProps) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <select className="form-select mt-1 block w-full" multiple={!!multiple}>
        {options.map((option, index) => (
          <option key={`selectFieldOption${index}`}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
