import React from "react";

const Dropdown = ({
  labelName,
  required = false,
  name,
  options,
  selectedValue,
  onBlur,
  onChange,
  errorMessage = "",
}) => {
  return (
    <div className="inputFieldContainer">
      <label className="inputFieldLabel" htmlFor="class">
        {labelName}
        {required && <sup className="required">*</sup>}
      </label>
      <br />
      <select
        className="inputField"
        name={name}
        value={selectedValue}
        onBlur={onBlur}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option value={index === 0 ? "" : option}>{option}</option>
        ))}
      </select>
      <p className="error-msg">{errorMessage}</p>
      <br />
    </div>
  );
};

export default Dropdown;
