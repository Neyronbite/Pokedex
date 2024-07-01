import React from "react";

import Loading from "../Loading/Loading";
import styles from "./select.module.scss";

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  defaultText = "default",
  defaultValue = "",
  className = "",
}) => {
  const handleChange = (e) => {
    const val = e.target.selectedOptions[0].value.replace(
      defaultText,
      defaultValue
    );
    setSelectedOption(val);
  };

  if (!options) {
    return <Loading />;
  }
  return (
    <select
      className={`${styles.container} ${className}`}
      onChange={handleChange}
      value={selectedOption || defaultText}
    >
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default Select;
