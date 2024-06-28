import React from "react";

const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  defaultText = "All Types",
}) => {
  const handleChange = (e) => {
    setSelectedOption(
      e.target.selectedOptions[0].value === defaultText
        ? ""
        : e.target.selectedOptions[0].value
    );
    //TODO fix grdon
  };

  return options ? (
    <select onChange={handleChange} value={selectedOption || defaultText}>
      {options.map((item) => (
        <option key={item}>{item || defaultText}</option>
      ))}
    </select>
  ) : (
    "Loading..."
  );
};

export default Select;
