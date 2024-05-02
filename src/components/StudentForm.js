import React, { useState } from "react";
import "./StudentForm.css";
import {
  FIRST_NAME_REQUIRED,
  INVALID_DATE,
  INVALID_EMAIL,
  LAST_NAME_REQUIRED,
  dateRegex,
  emailRegex,
  FILL_REQUIRED_INPUTS,
  SELECT_CLASS,
} from "../constants/Constants";

const StudentForm = React.forwardRef((props, ref) => {
  const { addData } = props;
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
    let errorMessage =
      formData.firstName.trim().length >= 3 ? "" : FIRST_NAME_REQUIRED;
    setFormError({ ...formError, firstNameError: errorMessage });
  };

  // Handle First Name Validation
  const handleLastNameBlur = () => {
    let errorMessage =
      formData.lastName.trim().length >= 3 ? "" : LAST_NAME_REQUIRED;
    setFormError({ ...formError, lastNameError: errorMessage });
  };

  const handleEmailBlur = () => {
    let errorMessage = emailRegex.test(formData.email.trim())
      ? ""
      : INVALID_EMAIL;
    setFormError({ ...formError, emailError: errorMessage });
  };

  const handleDobBlur = () => {
    let errorMessage = dateRegex.test(formData.dob.trim()) ? "" : INVALID_DATE;

    setFormError({ ...formError, dobError: errorMessage });
  };
  // Handle First Name Validation
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
      formData.firstName.trim().length >= 3 &&
      formData.lastName.trim().length >= 3 &&
      emailRegex.test(formData.email.trim()) &&
      dateRegex.test(formData.dob.trim()) &&
      formData.class.trim().length > 0
    );
  };

  return (
    <div className="user-form">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3 className="centered-heading">Student's Form</h3>
        <input type="hidden" id="id" />

        <label htmlFor="firstName">
          First Name<sup className="required">*</sup>
        </label>
        <br />
        <input
          className="inputField"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleFirstNameBlur}
          errorMessage={formError.firstNameError}
        />
        <br />
        <p className="fname-error error-msg">{formError.firstNameError}</p>
        <br />

        <label htmlFor="lastName">
          Last Name<sup className="required">*</sup>
        </label>
        <br />
        <input
          className="inputField"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleLastNameBlur}
          errorMessage={formError.lastNameError}
        />
        <p className="lname-error error-msg">{formError.lastNameError}</p>
        <br />

        <label htmlFor="email">
          Email<sup className="required">*</sup>
        </label>
        <br />
        <input
          className="inputField"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleEmailBlur}
          errorMessage={formError.emailError}
        />
        <p className="email-error error-msg">{formError.emailError}</p>
        <br />

        <label className="inputFieldLabel" htmlFor="dob">
          D.O.B.<sup className="required">*</sup>
        </label>
        <br />
        <input
          className="inputField"
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          onBlur={handleDobBlur}
          errorMessage={formError.dobError}
        />
        <p className="dob-error error-msg">{formError.dobError}</p>
        <br />

        <label className="inputFieldLabel">Gender</label>
        <br />

        <div>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          <label htmlFor="Male" className="margin">
            Male
          </label>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          <label htmlFor="Female" className="margin">
            Female
          </label>
        </div>
        <br />

        <label className="inputFieldLabel" htmlFor="class">
          Class<sup className="required">*</sup>
        </label>
        <br />
        <select
          className="inputField"
          name="class"
          value={formData.class}
          onBlur={handleClassBlur}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
        <p className="class-error error-msg">{formError.classError}</p>
        <br />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
});

export default StudentForm;
