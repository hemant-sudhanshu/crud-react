import React from "react";
import "./InputField.css";

const InputField = ({
  id,
  labelName,
  required = false,
  errorMessage = "",
  type = "text",
  onBlur = () => {},
  value,
  onChange,
  min = null,
  max = null,
}) => {
  return (
    <div className="inputFieldContainer">
      <label htmlFor={id} className="inputFieldLabel">
        {/* Label for the input field */}
        {labelName}
        {/* Conditionally render asterisk */}
        {required && <sup className="required">*</sup>}
      </label>
      <br />
      <input
        id={id}
        className="inputField"
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min={min} // Set min date to 18 years ago
        max={max} // Set max date to 10 years ago
      />
      <br />
      <p className="error-msg">{errorMessage}</p>
      <br />
    </div>
  );
};

export default InputField;
