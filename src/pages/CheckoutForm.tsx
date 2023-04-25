import Fieldset, { FieldsetProps } from "../components/form/Fieldset";
import InputField, { InputFieldProps } from "../components/form/InputField";
import SelectField, { SelectFieldProps } from "../components/form/SelectField";
import Textarea, { TextareaProps } from "../components/form/Textarea";

const CheckoutForm = () => {
  const inputFieldArray: InputFieldProps[] = [
    {
      label: "Input (text)",
      inputProps: {
        type: "text",
        className: "form-input mt-1 block w-full",
        placeholder: "john@example.com",
      },
    },
    {
      label: "Email",
      inputProps: {
        type: "email",
        className: "form-input mt-1 block w-full",
        placeholder: "john@example.com",
      },
    },
    {
      label: "Password",
      inputProps: {
        type: "password",
        className: "form-input mt-1 block w-full",
        placeholder: "Password",
      },
    },
    {
      label: "Input (date)",
      inputProps: {
        type: "date",
        className: "form-input mt-1 block w-full",
      },
    },
    {
      label: "Input (datetime-local)",
      inputProps: {
        type: "datetime-local",
        className: "form-input mt-1 block w-full",
      },
    },
    {
      label: "Input (month)",
      inputProps: {
        type: "month",
        className: "form-input mt-1 block w-full",
      },
    },
    {
      label: "Input (time)",
      inputProps: {
        type: "time",
        className: "form-input mt-1 block w-full",
      },
    },
    {
      label: "Input (week)",
      inputProps: {
        type: "week",
        className: "form-input mt-1 block w-full",
      },
    },
    {
      label: "Phone Number",
      inputProps: {
        type: "tel",
        className: "form-input mt-1 block w-full",
        placeholder: "Phone Number",
      },
    },
  ];
  const selectFieldArray: SelectFieldProps[] = [
    { label: "Select", options: ["Option 1", "Option 2"] },
    {
      label: "Select",
      options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      multiple: true,
    },
  ];

  const fieldsetArray: FieldsetProps[] = [
    {
      legend: "Checkboxes",
      type: "checkbox",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      legend: "Checkboxes",
      type: "radio",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ];

  const textareaArray: TextareaProps[] = [
    { defaultValue: "", label: "Address", placeholder: "address" },
  ];

  return (
    <form action="">
      <div className="px-6 text-gray-900 antialiased">
        <div className="mx-auto max-w-xl py-12 md:max-w-4xl">
          <div className="mt-8 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
            {inputFieldArray.map((inputField, index) => (
              <InputField key={`inputField${index}`} {...inputField} />
            ))}
            {selectFieldArray.map((selectField, index) => (
              <SelectField key={`selectField${index}`} {...selectField} />
            ))}
            {fieldsetArray.map((fieldset, index) => (
              <Fieldset key={`fieldset${index}`} {...fieldset} />
            ))}
            {textareaArray.map((textarea, index) => (
              <Textarea key={`textarea${index}`} {...textarea} />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
