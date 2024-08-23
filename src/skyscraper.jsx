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



const Skyscrapers = ({secondaryModelUrl, ...props }) => {
    
    const secondaryScene  = useGLTF(secondaryModelUrl);
   
    
    const buildingRef = useRef(null);
  
  
  
  
   
    
    const [screenPosition, setScreenPosition] = useState(new THREE.Vector3(-0.09495129436254501,0.930014729499817,4.181510925292969
    ));
  
   
  
   
  
    return (
      <>


      <primitive object= {secondaryScene.scene} position= {[10,-8,-3]} scale={[.4, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} rotation = {[0,Math.PI,0]}position= {[-10,-8,-10]} scale={[.4, .5, .5]}  />
      <primitive object= {secondaryScene.scene.clone()} rotation = {[0,Math.PI,0]}position= {[-23,-10,-10]} scale={[.4, .5, .5]}  />
      {/* <primitive  object={secondaryScene.nodes.Building_0} {...props} ref={buildingRef}   ></primitive> */}
      </>
    );
  };


  export default Skyscrapers 