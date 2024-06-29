import React, { useEffect, useState } from "react";
import {
  CircleMenu,
  CircleMenuItem,
  // TooltipPlacement,
} from "react-circular-menu";

import styles from "./styles.module.scss";

const CircleSelect = ({
  options,
  selectedOption,
  setSelectedOption,
  defaultText = "default",
  defaultValue = "",
  placeholder = "Select an option",
}) => {
  const handleChange = (e) => {
    const val = e.target.textContent.replace(defaultText, defaultValue);
    setSelectedOption(val);
  };

  if (!options) {
    return "Loading...";
  }

  return (
    <CircleMenu
      startAngle={-90}
      rotationAngle={360}
      itemSize={3}
      radius={8}
      rotationAngleInclusive={false}
      // className={styles.container}
    >
      {options.map((item) => (
        <CircleMenuItem
          key={item}
          onClick={handleChange}
          tooltip={item}
          // className={styles.container}
          // tooltipPlacement={TooltipPlacement.Right}
        >
          <span>{item}</span>
        </CircleMenuItem>
      ))}
    </CircleMenu>
  );
};

export default CircleSelect;
