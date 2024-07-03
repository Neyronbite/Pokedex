import React, { useEffect, useState, useRef } from "react";
import styles from "./particle.module.scss";

const Particle = ({
  size,
  x,
  y,
  count,
  current,
  mouseMoveEvent,
  interval,
  delay,
  currentParticleOptions,
  nextParticleOption,
  opacity,
  //TODO useRef
  b = 20,
  minScaleing = 0.2,
  maxScaling = 1.5,
  maxScalingCoefficient = 1.5,
}) => {
  const counter = useRef(current * delay);
  const positionRef = useRef({ left: x, top: y });
  const skewCoefficient = useRef(60);
  const currentParticleOptionsRef = useRef(currentParticleOptions);
  const nextParticleOptionRef = useRef(nextParticleOption);

  const [left, setLeft] = useState(x);
  const [top, setTop] = useState(y);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [xScaleing, setXScaleing] = useState(1);
  const [yScaleing, setYScaleing] = useState(1);
  const [opacityStyle, setOpacityStyle] = useState(opacity);

  useEffect(() => {
    setInterval(() => {
      const nextX = nextParticleOptionRef.current
        ? nextParticleOptionRef.current.x
        : mouseMoveEvent.current.pageX;
      const nextY = nextParticleOptionRef.current
        ? nextParticleOptionRef.current.y
        : mouseMoveEvent.current.pageY;

      if (nextX == positionRef.current.left) {
        setOpacityStyle(0);
      } else {
        setOpacityStyle(opacity);
      }

      //  calculating distance between cursor and component
      const distance = Math.sqrt(
        Math.pow(nextX - positionRef.current.left, 2) +
          Math.pow(nextY - positionRef.current.top, 2)
      );
      //  calculating cursor/component and horizontal lines angle's cosinus, for rotation
      const cosinusTemp = (positionRef.current.left - nextX) / distance;
      const sinusTemp = (positionRef.current.top - nextY) / distance;

      // counter is number, that shows how long will component stay in his position after changing that
      if (counter.current <= 0) {
        // setting particle position to mouse center
        positionRef.current.left = nextX; // - size / 2;
        positionRef.current.top = nextY; // - size / 2;

        currentParticleOptionsRef.current.x = nextX;
        currentParticleOptionsRef.current.y = nextY;

        setLeft(positionRef.current.left - size / 2);
        setTop(positionRef.current.top - size / 2);

        // setting iterations count, that needs before change position
        // counter.current = (count - current) * delay;
        counter.current = delay;
      } else {
        counter.current--;
      }
      // setSkewX(cosinusTemp * gorcakic);
      const cosinusOrentation = cosinusTemp < 0 ? -1 : 1;
      setSkewY(sinusTemp * skewCoefficient.current * cosinusOrentation);

      const xScalingTemp =
        (distance / b) *
        (Math.abs(cosinusTemp) > minScaleing ? cosinusTemp : minScaleing);

      const yScalingTemp =
        (distance / b) *
        (Math.abs(sinusTemp) > minScaleing ? sinusTemp : minScaleing);

      setXScaleing(
        Math.abs(xScalingTemp) > maxScaling
          ? Math.abs(sinusTemp) > Math.abs(cosinusTemp)
            ? 1 / maxScaling
            : maxScaling * maxScalingCoefficient
          : xScaleing
      );
      setYScaleing(
        Math.abs(yScalingTemp) > maxScaling
          ? Math.abs(sinusTemp) > Math.abs(cosinusTemp)
            ? maxScaling * maxScalingCoefficient
            : 1 / maxScaling
          : yScaleing
      );
    }, interval);
  }, []);

  return (
    <div
      className={styles.item}
      key={size}
      style={{
        width: size + "px",
        height: size + "px",
        left: left + "px",
        top: top + "px",
        opacity: opacityStyle,
        transform: `skew(${skewX}deg, ${skewY}deg) scale(${xScaleing}, ${yScaleing})`, //, ${1 / scaleing})`,
        // transform: `scale(${scaleing}, ${1 / scaleing}) rotate(${rotation}deg)`,
      }}
    ></div>
  );
};

export default Particle;
