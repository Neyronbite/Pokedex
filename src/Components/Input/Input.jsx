import React from "react";

// import styles from "./input.module.css";

const Input = ({
  value,
  handleChange = null,
  type = "text",
  placeholder = "name",
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
