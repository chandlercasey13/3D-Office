import { useState, useRef, useEffect } from "react";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import Model from "../public/Rvised";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const OfficeModel = ({
  mousePosition,
  handleSetDeskChairTransparent,
  deskchairtransparent,
}) => {
  const modelRef = useRef();
  const [animationStarted, setAnimationStarted] = useState(false);

  useGSAP(() => {
    gsap.from(modelRef.current.rotation, { y: 0.2, duration: 1 });
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useFrame(() => {
    if (modelRef.current && animationStarted) {
      const sensitivity = 0.03;
      const lerpFactor = 0.02;
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        (mousePosition.x - 0.5) * Math.PI * sensitivity,
        lerpFactor
      );
    }
  });

  return (
    <>
      <group ref={modelRef}>
        <Model
          handleSetDeskChairTransparent={handleSetDeskChairTransparent}
          deskchairtransparent={deskchairtransparent}
        />
      </group>
    </>
  );
};

export default OfficeModel;
