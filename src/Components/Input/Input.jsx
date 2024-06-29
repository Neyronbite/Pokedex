import React from "react";

import styles from "./input.module.scss";

const Input = ({
  value,
  handleChange = (e) => null,
  type = "text",
  placeholder = "name",
  className = "",
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
        className={className + " " + styles["x-large-text"]}
      />
    </div>
  );
};

export default Input;
