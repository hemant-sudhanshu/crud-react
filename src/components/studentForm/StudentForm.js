import React, { useState } from "react";
import "./StudentForm.css";
import InputField from "../input/InputField";
import GenderInput from "../genderInput/GenderInput";
import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import {
  FIRST_NAME_REQUIRED,
  INVALID_DATE,
  INVALID_EMAIL,
  LAST_NAME_REQUIRED,
  FILL_REQUIRED_INPUTS,
  SELECT_CLASS,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  email,
  lastName,
  firstName,
  dob,
  DOB,
  CLASS,
  classes,
} from "../../constants/Constants";

import {
  validateName,
  validateEmail,
  validateDate,
} from "../../utils/validations";

const StudentForm = React.forwardRef((props, ref) => {
  const { addData } = props;
  // Calculate min and max date values for input
  const currentDate = new Date();
  const maxDate = new Date(
    currentDate.getFullYear() - 8,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split("T")[0];
  const minDate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split("T")[0];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    class: "",
  });

  const [formError, setFormError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    dobError: "",
    classError: "",
  });

  const fillWithData = (data) => {
    setFormData(data);
  };

  // Expose the function through the ref
  React.useImperativeHandle(ref, () => ({
    fillWithData,
  }));

  // Handle First Name Validation
  const handleFirstNameBlur = () => {
    let errorMessage = validateName(formData.firstName.trim())
      ? ""
      : FIRST_NAME_REQUIRED;
    setFormError({ ...formError, firstNameError: errorMessage });
  };

  // Handle First Name Validation
  const handleLastNameBlur = () => {
    let errorMessage = validateName(formData.lastName.trim())
      ? ""
      : LAST_NAME_REQUIRED;
    setFormError({ ...formError, lastNameError: errorMessage });
  };

  const handleEmailBlur = () => {
    console.log("handleEmailBlur");
    let errorMessage = validateEmail(formData.email.trim())
      ? ""
      : INVALID_EMAIL;
    setFormError({ ...formError, emailError: errorMessage });
  };

  const handleDobBlur = () => {
    let errorMessage = validateDate(formData.dob.trim()) ? "" : INVALID_DATE;

    setFormError({ ...formError, dobError: errorMessage });
  };

  // Handle Class Validation
  const handleClassBlur = () => {
    let errorMessage = formData.class.trim().length > 0 ? "" : SELECT_CLASS;
    setFormError({ ...formError, classError: errorMessage });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      addData(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        dob: "",
        class: "",
      });
    } else {
      alert(FILL_REQUIRED_INPUTS);
    }
  };

  const validateInputs = () => {
    return (
      validateName(formData.firstName.trim()) &&
      validateName(formData.lastName.trim()) &&
      validateEmail(formData.email.trim()) &&
      validateDate(formData.dob.trim()) &&
      formData.class.trim().length > 0
    );
  };

  return (
    <div className="user-form">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3 className="centered-heading">Student's Form</h3>
        <input type="hidden" id="id" />

        {/* First Name field */}
        <InputField
          id={firstName}
          labelName={FIRST_NAME}
          required={true}
          errorMessage={formError.firstNameError}
          type="text"
          onBlur={handleFirstNameBlur}
          value={formData.firstName}
          onChange={handleChange}
        />

        {/* Last Name field */}
        <InputField
          id={lastName}
          labelName={LAST_NAME}
          required={true}
          errorMessage={formError.lastNameError}
          type="text"
          onBlur={handleLastNameBlur}
          value={formData.lastName}
          onChange={handleChange}
        />

        {/* Email field */}
        <InputField
          id={email}
          labelName={EMAIL}
          required={true}
          errorMessage={formError.emailError}
          type="email"
          onBlur={handleEmailBlur}
          value={formData.email}
          onChange={handleChange}
        />

        {/* DOB field */}
        <InputField
          id={dob}
          labelName={DOB}
          required={true}
          errorMessage={formError.dobError}
          type="date"
          onBlur={handleDobBlur}
          value={formData.dob}
          onChange={handleChange}
          min={minDate} // Set min date to 18 years ago
          max={maxDate} // Set max date to 10 years ago
        />

        {/* Gender Radio Button */}
        <GenderInput selectedGender={formData.gender} onchange={handleChange} />
        <br />

        {/* Class Dropdown */}
        <Dropdown
          labelName={CLASS}
          required={true}
          name="class"
          options={classes}
          selectedValue={formData.class}
          onBlur={handleClassBlur}
          onChange={handleChange}
          errorMessage={formError.classError}
        />

        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </form>
    </div>
  );
});

export default StudentForm;
