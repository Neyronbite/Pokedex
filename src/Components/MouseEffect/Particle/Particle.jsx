import React, { useEffect, useState, useRef } from "react";
import styles from "./particle.module.scss";

const Particle = ({
  size,
  current,
  mouseMoveEvent,
  interval,
  delay,
  currentParticleOptions,
  nextParticleOption,
  opacity,
  hiding,
  className,
}) => {
  const counter = useRef(current * delay);
  const currentParticleOptionsRef = useRef(currentParticleOptions);
  const nextParticleOptionRef = useRef(nextParticleOption);

  const [left, setLeft] = useState(currentParticleOptionsRef.current.left);
  const [top, setTop] = useState(currentParticleOptionsRef.current.top);
  const [opacityStyle, setOpacityStyle] = useState(opacity);

  useEffect(() => {
    setInterval(() => {
      const nextX =
        nextParticleOptionRef.current?.left || mouseMoveEvent.current.pageX;
      const nextY =
        nextParticleOptionRef.current?.top || mouseMoveEvent.current.pageY;

      // if destination object and current object has same position, hiding them
      // of course if hiding property is true
      if (
        hiding &&
        nextX == currentParticleOptionsRef.current.left &&
        nextY == currentParticleOptionsRef.current.top
      ) {
        setOpacityStyle(0);
      } else {
        setOpacityStyle(opacity);
      }
      // counter is number, that shows how many iterations will component stay in his position after changing that
      if (counter.current <= 0) {
        currentParticleOptionsRef.current.left = nextX;
        currentParticleOptionsRef.current.top = nextY;

        // setting particle position to mouse center
        setLeft(nextX - size / 2);
        setTop(nextY - size / 2);

        // setting iterations count, that needs before change position
        counter.current = delay;
      } else {
        counter.current--;
      }
    }, interval);
  }, []);

  return (
    <div
      className={`${styles.main} ${className || styles.default_style}`}
      key={size}
      style={{
        width: size + "px",
        height: size + "px",
        left: left + "px",
        top: top + "px",
        opacity: opacityStyle,
      }}
    ></div>
  );
};

export default Particle;
