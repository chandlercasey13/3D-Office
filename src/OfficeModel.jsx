import { useState, useRef, Suspense, useEffect } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls, FlyControls,
  Html,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";
import Model from "../public/Rvised";



const OfficeModel = ({mousePosition}) => {
    const modelRef = useRef();
    
  
    // Update rotation based on mouse position
    useFrame(() => {
      if (modelRef.current) {
        // console.log(modelRef.current.rotation.y)
        const sensitivity = 0.05;
        const lerpFactor = 0.02; // Adjust sensitivity as needed
        modelRef.current.rotation.y = THREE.MathUtils.lerp(
          modelRef.current.rotation.y,
          (mousePosition.x - .5) * Math.PI * sensitivity,
          lerpFactor
        );
        // modelRef.current.rotation.x = THREE.MathUtils.lerp(
        //   modelRef.current.rotation.x,
        //   (mousePosition.y - 0.5) * Math.PI * sensitivity,
        //   0.1
        // );
      }
    });
  
    // Update mouse position
    
  
    return (
      <>
        {/* Model with mouse-based rotation effect */}
        <group ref={modelRef} >
          <Model />
        </group>
      </>
    );
  };

  export default OfficeModel 