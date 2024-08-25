import { useState, useRef, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
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



const Roads = ({RoadsUrl }) => {
    
    

   
    const RoadsScene  = useGLTF(RoadsUrl);
    console.log(RoadsScene)
   
 

  
  
   
    
   
  
   
  
   
  
    return (
      <>
      


      <primitive object={RoadsScene.scene}  position={[5, 0, 0]} scale={[1, 1, 1]} />
      <primitive object={RoadsScene.nodes.Road_1} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[0, -10, -2.5]} scale={[5, 4.2, .05]} />

      <primitive object={RoadsScene.nodes.Road_1.clone()} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[0, -10, -12.5]} scale={[5, 4.2, .05]} />
     
      <primitive object={RoadsScene.nodes.Road_1.clone()} rotation={[-Math.PI / 2, 0, 0]} position={[-9, -10, -21]} scale={[5, 3.5, .05]} />

      <primitive object={RoadsScene.nodes.Road_1.clone()} rotation={[-Math.PI / 2, 0, 0]} position={[9, -10, -21]} scale={[5, 3.5, .05]} />


      <primitive object={RoadsScene.nodes.Road_4.clone()} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, -21]} scale={[4.2, 3.5, .05]} />
      
      </>
    );
  };


  export default Roads 