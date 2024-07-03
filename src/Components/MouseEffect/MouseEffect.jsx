import React, { useEffect, useState, useRef } from "react";

import Particle from "./Particle/Particle.jsx";

import styles from "./mouse-effects.module.scss";

const MouseEffect = ({
  minSize = 5,
  maxSize = 25,
  count = 40,
  delay = 4,
  interval = 4,
  startX = 500,
  startY = 500,
  opacity = 0.1,
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
      let currentTempParticleOptions = { x: startX + i, y: startY + i };
      const tempParticle = (
        <Particle
          key={i}
          size={maxSize - (i * (maxSize - minSize)) / count}
          x={startX + i}
          y={startY + i}
          count={count}
          current={i}
          opacity={opacity}
          delay={delay}
          interval={interval}
          mouseMoveEvent={mouseMoveEvent}
          currentParticleOptions={currentTempParticleOptions}
          nextParticleOption={nextTempParticleOptions}
        />
      );
      nextTempParticleOptions = currentTempParticleOptions;
      tempParticles.push(tempParticle);
    }

    setParticles(tempParticles);
  }, []);

  return <>{particles}</>;
};

export default MouseEffect;
