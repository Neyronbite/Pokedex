import React, { useEffect, useState, useRef } from "react";

import Particle from "./Particle/Particle.jsx";
const MouseEffect = ({
  count = 10,
  delay = 1,
  interval = 15,
  opacity = 0.5,
  startX = 500,
  startY = 500,
  minSize = 5,
  maxSize = 25,
  hiding = true,
  revertSize = false,
  className = "",
}) => {
  const [particles, setParticles] = useState([]);
  const mouseMoveEvent = useRef({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseMoveEvent.current = e;
    };

    document.addEventListener("mousemove", handleMouseMove);
    // document.addEventListener("click", handleMouseMove);
  });

  useEffect(() => {
    const tempParticles = [];
    let nextTempParticleOptions = null;

    for (let i = 0; i < count; i++) {
      let currentTempParticleOptions = { left: startX + i, top: startY + i };
      const tempParticle = (
        <Particle
          key={i}
          size={
            revertSize
              ? minSize + (i * (maxSize - minSize)) / count
              : maxSize - (i * (maxSize - minSize)) / count
          }
          count={count}
          current={i}
          opacity={opacity}
          delay={delay}
          interval={interval}
          hiding={hiding}
          mouseMoveEvent={mouseMoveEvent}
          currentParticleOptions={currentTempParticleOptions}
          nextParticleOption={nextTempParticleOptions}
          className={className}
        />
      );
      nextTempParticleOptions = currentTempParticleOptions;
      tempParticles.push(tempParticle);
    }

    setParticles(tempParticles);
  }, [
    className,
    count,
    delay,
    hiding,
    interval,
    maxSize,
    minSize,
    opacity,
    revertSize,
    startX,
    startY,
  ]);

  return <>{particles}</>;
};

export default MouseEffect;
