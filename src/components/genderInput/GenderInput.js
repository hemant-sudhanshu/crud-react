import React from "react";
import { FEMALE, MALE, gender } from "../../constants/Constants";

const GenderInput = ({ selectedGender, onchange }) => {
  return (
    <div className="inputFieldContainer">
      <label className="inputFieldLabel">Gender</label>
      <br />
      <div>
        <input
          type="radio"
          value={MALE}
          name={gender}
          checked={selectedGender === MALE}
          onChange={onchange}
        />
        <label htmlFor={MALE} className="margin">
          {MALE}
        </label>
        <input
          type="radio"
          value={FEMALE}
          name={gender}
          checked={selectedGender === FEMALE}
          onChange={onchange}
        />
        <label htmlFor={FEMALE} className="margin">
          {FEMALE}
        </label>
      </div>
    </div>
  );
};

export default GenderInput;
