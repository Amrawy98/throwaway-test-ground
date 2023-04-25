export type TextareaProps = {
  label: string;
  defaultValue: string;
  placeholder: string;
};

const Textarea = ({ label, defaultValue, placeholder }: TextareaProps) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <textarea
        className="form-textarea mt-1 block h-24 w-full"
        rows={3}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Textarea;
