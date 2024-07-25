import React, { useState } from "react";

import styles from "./input.module.scss";

const Input = ({
  value,
  handleChange = (e) => null,
  handleClick = (e) => null,
  type = "text",
  placeholder = "name",
  className = "",
  datalistOptions = null,
}) => {
  // Id for inputs list attribute
  const [datalistId] = useState(Math.random().toString());

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        className={`${className} ${styles.x_large_text}`}
        list={datalistId}
      />
      {/* Datalist  */}
      {datalistOptions && (
        <datalist id={datalistId} className={styles.datalist}>
          {datalistOptions.map((item) => (
            <option value={item}></option>
          ))}
        </datalist>
      )}
    </>
  );
};

export default Input;
