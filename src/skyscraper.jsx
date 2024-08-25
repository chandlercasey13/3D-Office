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

import { MeshStandardMaterial, Color } from 'three';



const Skyscrapers = ({secondaryModelUrl, ...props }) => {
    
    const secondaryScene  = useGLTF(secondaryModelUrl);

    console.log(secondaryScene)
   
    
    const buildingRef = useRef(null);
  
  
  
  
   
    
    
    
  
   
  
   
  
    return (
      <>


      <primitive object= {secondaryScene.scene} position= {[17,-10,-3]} scale={[.6, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} position= {[17,-10,-11]} scale={[.6, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} rotation = {[0,Math.PI,0]}position= {[-17,-10,-10]} scale={[.6, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} rotation = {[0,Math.PI,0]}position= {[-17,-10,-18]} scale={[.6, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} rotation = {[0,Math.PI,0]}position= {[-13,-10,-31]} scale={[.6, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} position= {[12.5,-10,-24]} scale={[.6, .5, .5]}  />
      
      
      {/* <primitive object= {secondaryScene.scene.clone()} rotation = {[0,Math.PI,0]}position= {[-23,-10,-10]} scale={[.4, .5, .5]}  /> */}
      {/* <primitive  object={secondaryScene.nodes.Building_0} {...props} ref={buildingRef}   ></primitive> */}
      {/* <mesh
        position={[0, -10, -3.65]} rotation = {[Math.PI/2,0,0]}
        
      >
        <boxGeometry args={[6.5, 100, 0.004]}  />
        <meshStandardMaterial  color={new Color('#6b6b6b')} transparent
          opacity={0.9}/>
          
      </mesh> */}
      
      
      </>
    );
  };


  export default Skyscrapers 