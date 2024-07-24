import { useEffect } from "react";

const useOutsideClick = (func, objectRef) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (objectRef.current && !objectRef.current.contains(e.target)) {
        func();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [func, objectRef]);
};

export default useOutsideClick;
