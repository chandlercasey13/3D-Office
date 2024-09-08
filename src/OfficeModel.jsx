import { useState, useRef, useEffect } from "react";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import Model from "./Rvised";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { Html } from "@react-three/drei";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGLTF } from "@react-three/drei";
import { Canvas, useThree } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

import { TextPlugin } from "gsap/TextPlugin";



gsap.registerPlugin(TextPlugin);

const OfficeModel = ({
  handleHTMLPresent,
  htmlPresent,

  mousePosition,
  handleSetDeskChairTransparent,
  deskchairtransparent,
}) => {
  const modelRef = useRef();
  const textRef = useRef();
  const [animationStarted, setAnimationStarted] = useState(false);


  function CameraAnimation() {
    const { camera } = useThree(); // Get the camera object
  
    
    
  useGSAP(() => {
    const tl1 = gsap.timeline({paused: false,})
    tl1.fromTo(modelRef.current.scale, {
      x: 0,   // Double the size along the x-axis
      y: 0,   // Double the size along the y-axis
      z: 0,   // Double the size along the z-axis
      
    },
    {
      x: 1,   // Double the size along the x-axis
      y: 1,   // Double the size along the y-axis
      z: 1,   // Double the size along the z-axis
      duration:1.25,  // Animation duration
      ease: 'elastic.out',  // Easing function
    })

    tl1.to(modelRef.current.position, {
      x: -5,   // Double the size along the x-axis
      y: 0,   // Double the size along the y-axis
      z: 0,   // Double the size along the z-axis
      duration: 1,
    })

    const timeout = setTimeout(() => {
    tl1.to('.intro-text', {
      text:"Chandler's Office",
       
      duration:2,
      opacity:1,
      
      onComplete: () => {
        
      }
    
      })
    },100)


    // gsap.from(modelRef.current.rotation, { y: 0.2, duration: 1 })

const tl2 = gsap.timeline({paused: true,})
    tl2.to(modelRef.current.scale, {
     
      x: 1,   // Double the size along the x-axis
      y: 1,   // Double the size along the y-axis
      z: 1,   // Double the size along the z-axis
      duration: 1.4,  // Animation duration
      ease: 'power1.inOut',  // Easing function
      
      
    });

    tl2.to(modelRef.current.rotation, {

      x: 0,   // Double the size along the x-axis
      y: -Math.PI*2,   // Double the size along the y-axis
      z: 0,   // Double the size along the z-axis
      duration: 1.25,  // Animation duration
      ease: 'power1.inOut',  // Easing function


    }, 0)

    tl2.to(camera, {
      fov: 30, // Target FOV value
      duration:1, // Duration of the animation
      ease: 'power1.inOut', // Easing function
      onUpdate: () => camera.updateProjectionMatrix(), // Update the camera's projection matrix
    
  
  }, 0)

  tl2.to(modelRef.current.position, {
    x: 0,   // Double the size along the x-axis
    y: 0,   // Double the size along the y-axis
    z: 0,   // Double the size along the z-axis
    duration: 1,
    delay:.25,
   
    
  },0)







    ScrollTrigger.create({
      trigger: ".title-text",
      start: 50, // When the top of the trigger element hits the center of the viewport
      onEnter: () =>{ 
      tl2.play(),
      setTimeout(() => {
      
      },2000)// Play the timeline when the trigger enters the viewport
      }
    });


  });

}




  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAnimationStarted(true);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // useFrame(() => {
  //   if (modelRef.current && animationStarted) {
  //     const sensitivity = 0.05;
  //     const lerpFactor = 0.02;
  //     modelRef.current.rotation.y = THREE.MathUtils.lerp(
  //       modelRef.current.rotation.y,
  //       (mousePosition.x - 0.5) * Math.PI * sensitivity,
  //       lerpFactor
  //     );
  //   }
  // });

  function TextMesh({ text }) {
   
  
    return (
      <mesh position={[5.5,.5,0]} rotation={[Math.PI/2,0,Math.PI/2]}>
       <boxGeometry args={[0,2]}/>
        <meshStandardMaterial
          color="black"
          transparent
          opacity={0} // Adjust opacity if needed
          side={2} // Double side
        />
        <Html   transform  sprite>
          <div className="intro-text"></div>

        </Html>
      </mesh>
    );
  }

  return (
    <>
    
      <group ref={modelRef}>
        <Model
          handleSetDeskChairTransparent={handleSetDeskChairTransparent}
          deskchairtransparent={deskchairtransparent}
        />
        
        <group ref={textRef}>
        <TextMesh/>
        </group>
        
      </group>
      <CameraAnimation/>
    </>
  );
};

export default OfficeModel;
