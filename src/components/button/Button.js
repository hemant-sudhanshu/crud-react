import React from "react";
import "./Button.css";

const Button = ({
  type = "button",
  onClick = () => {},
  disabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
