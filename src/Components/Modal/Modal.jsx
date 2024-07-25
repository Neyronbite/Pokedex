import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.scss";

// element where will mount modal window
const modalRootElement = document.getElementById("modal");

const Modal = ({ children, isOpen }) => {
  // wrapper element for children
  const element = useMemo(() => {
    const el = document.createElement("div");
    return el;
  }, []);

  // mounting and unmounting wrapper el.
  useEffect(() => {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }, [element]);

  // rendering if isOpen is true
  return createPortal(
    isOpen ? <div className={styles.container}>{children}</div> : null,
    element
  );
};

export default Modal;
