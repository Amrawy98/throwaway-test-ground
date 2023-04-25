export type FieldsetProps = {
  legend: string;
  options: string[];
  type: "checkbox" | "radio";
};

const Fieldset = ({ legend, options, type }: FieldsetProps) => {
  return (
    <fieldset className="block">
      <legend className="text-gray-700">{legend}</legend>
      <div className="mt-2">
        {options.map((option, index) => (
          <div key={`fieldsetOption${index}`}>
            <label className="inline-flex items-center">
              <input
                className={type === "checkbox" ? "form-checkbox" : "form-radio"}
                type={type}
                defaultChecked={index === 0}
                defaultValue={index}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Fieldset;
