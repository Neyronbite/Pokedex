import React, { useEffect } from "react";
import ReactDropdown from "react-dropdown";

import styles from "./select.module.scss";

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  defaultText = "default",
  defaultValue = "",
  placeholder = "Select an option",
}) => {
  const handleChange = (e) => {
    const val = e.target.selectedOptions[0].value.replace(
      defaultText,
      defaultValue
    );
    setSelectedOption(val);
  };

  if (!options) {
    return "Loading...";
  }
  return (
    <select
      className={styles.container}
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
