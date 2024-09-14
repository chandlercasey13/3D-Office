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
import { Canvas, useThree } from "@react-three/fiber";

import { TextPlugin } from "gsap/TextPlugin";



const OfficeModel = ({
  handleHTMLPresent,
  htmlPresent,
  
}) => {

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


const [animationEnded, setAnimationEnded] =useState( false)
const [deskchairtransparent, setdeskchairtransparent] = useState(false);
  const modelRef = useRef();
  const textRef = useRef();



 
  const { camera } = useThree(); 

  const disableScroll = () => (document.body.style.overflow = "hidden");
  const enableScroll = () => (document.body.style.overflowY = "scroll");

  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".title-text", {
        y: 0,

        duration: 1,
        ease: "power1.in",
        opacity: 0,
        delay: 1,
      });
      gsap.from(".subtitle-text", {
        x: 0,

        duration: 1.5,
        ease: "power1.in",
        opacity: 0,
      });
      gsap.from(".arrow-down", {
        y: -10,
        repeat: -1,
        duration: 0.85,
        ease: "power1.in",
        yoyo: true,
        delay: 2,
        opacity: 0,
      });

      gsap.to(".about-me-header", {
        y: 10,
        scrollTrigger: {
          trigger: ".title-text",
          start: 100,
        },
        text: "Hi, I'm Chandler ",

        duration: 1.5,

        opacity: 1,
        delay: 1,
      });

      gsap.from(".about-me-section", {
        y: 10,
        scrollTrigger: {
          trigger: ".title-text",
          start: 100,
        },

        duration: 2,

        opacity: 0,
        delay: 1,
      });
      gsap.from(".chandler-pic", {
        y: 10,
        scrollTrigger: {
          trigger: ".title-text",
          start: 100,
        },

        duration: 2,

        opacity: 0,
        delay: 1,
      });
    },
    { dependencies: [deskchairtransparent], revertOnUpdate: true }
  );

  

  useGSAP(() => {




    
    const tl1 = gsap.timeline({ paused: false });
    tl1.fromTo(
      modelRef.current.scale,
      {
        x: 0, // Double the size along the x-axis
        y: 0, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
      },
      {
        x: 1, // Double the size along the x-axis
        y: 1, // Double the size along the y-axis
        z: 1, // Double the size along the z-axis
        duration: 1.5, // Animation duration
        ease: "elastic.out", // Easing function
      }
    );

    tl1.from(modelRef.current.position,
      {
        x: 0, // Double the size along the x-axis
        y: 0, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
        
      },
    0);
    tl1.to(modelRef.current.position,
      {
        x: -4.5, // Double the size along the x-axis
        y: 0, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
        
      },
    1);

    const timeout = setTimeout(() => {
      tl1.to(
        ".intro-text",
        {
          text: "Chandler's Office (in space)",
          ease: "power1.in",

          duration: .5,
          opacity: 1,
        },
        
      );
    }, 100);

    // gsap.from(modelRef.current.rotation, { y: 0.2, duration: 1 })

    const tl2 = gsap.timeline({ paused: true, repeat: 0 });
    tl2.fromTo(
      modelRef.current.scale,
      {
        x: 1, // Double the size along the x-axis
        y: 1, // Double the size along the y-axis
        z: 1, // Double the size along the z-axis
        duration: 1.4, // Animation duration
        ease: "power1.inOut", // Easing function
      },
      {
        x: 1.01, // Double the size along the x-axis
        y: 1.01, // Double the size along the y-axis
        z: 1.01, // Double the size along the z-axis
        duration: 1.4, // Animation duration
        ease: "power1.inOut", // Easing function
        onComplete: () => {
          
            setAnimationEnded(true)
            
          
          tl2.kill();
        },
      }
    );

    tl2.to(
      modelRef.current.rotation,
      {
        x: 0, // Double the size along the x-axis
        y: -Math.PI * 6, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
        duration: 1, // Animation duration
        ease: "power1", // Easing function
        onEnter: () => {
          tl1.kill(), setchandlersOfficeTextVisible(false);
          disableScroll(); 
          
        },
      },
      0
    );

    tl2.to(
      camera,
      {
        fov: 30, // Target FOV value
        duration: 1, // Duration of the animation
        ease: "power1.inOut", // Easing function
        onUpdate: () => camera.updateProjectionMatrix(), // Update the camera's projection matrix
      },
      0
    );

    tl2.fromTo(
      modelRef.current.position,
      {
        x: -5, // Double the size along the x-axis
        y: 0, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
        duration: 1,
        delay: 0,

        onComplete: () => {
          enableScroll();

          // Play the timeline when the trigger enters the viewport
        },
      },
      {
        x: 0, // Double the size along the x-axis
        y: -.4, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
        duration: 1,
        delay: 0,

        
      },0
      
      
    );

    tl2.to(
      modelRef.current.position,
      {
        
        y: -10,
        repeat: -1,
        duration: 0.85,
        ease: "power1.in",
        yoyo: true,
        delay: 2,
        opacity: 0,
      },1
     
      
      
    );

    const monitorCamera = gsap.timeline({ paused: true, repeat: 0 });

    monitorCamera.to(
      camera.rotation,
      {
        x: -0.0585, // Double the size along the x-axis
        y: 0.78, // Double the size along the y-axis
        z: 0.0375, // Double the size along the z-axis
        duration: 1,
        delay: 0,
        onEnter: () => {},
        onComplete: () => {
          enableScroll();
        },
      },
      0
    );
    monitorCamera.to(
      camera.position,
      {
        x: 0.15, // Double the size along the x-axis
        y: 0.0, // Double the size along the y-axis
        z: 0.3, // Double the size along the z-axis
        duration: 1,
        delay: 0,
      },
      0
    );

    const projectsCamera = gsap.timeline({ paused: true, repeat: 0 });

    projectsCamera.to(
      camera.rotation,
      {
        x: 0, // Double the size along the x-axis
        y: -0.8, // Double the size along the y-axis
        z: 0, // Double the size along the z-axis
        duration: 1,
        delay: 0,
      },
      0
    );
    projectsCamera.to(
      camera.position,
      {
        x: -0.5, // Double the size along the x-axis
        y: 0.3, // Double the size along the y-axis
        z: 0.4, // Double the size along the z-axis
        duration: 1,
        delay: 0,
        onComplete: () => {
          enableScroll();
        },
      },
      0
    );

    const contactCamera = gsap.timeline({ paused: true, repeat: 0 });

    contactCamera.to(
      camera.rotation,
      {
        x: -1.4, // Double the size along the x-axis
        y: 0, // Double the size along the y-axis
        z: -0.55, // Double the size along the z-axis
        duration: 0.5,
        delay: 0,
      },
      0
    );
    contactCamera.to(
      camera.position,
      {
        x: 0.1, // Double the size along the x-axis
        y: 0.6, // Double the size along the y-axis
        z: 0.03, // Double the size along the z-axis
        duration: 0.5,
        delay: 0,
        onComplete: () => {
          enableScroll();
        },
      },
      0
    );
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: ".title-text",
        start: 0, // When the top of the trigger element hits the center of the viewport
        onEnter: () => {
          tl2.play();
          // Play the timeline when the trigger enters the viewport
        },
       
        once: true, // Play animation once
      });

      ScrollTrigger.create({
        trigger: ".title-text",
        start: 100, // When the top of the trigger element hits the center of the viewport
        onEnter: () => {
          setdeskchairtransparent(true)

         
          disableScroll(), monitorCamera.play();
        },
        
        onLeaveBack: () => {
          setdeskchairtransparent(false)
          monitorCamera.reverse();
          
        },
      });

      ScrollTrigger.create({
        trigger: ".title-text",
        start: 200, // When the top of the trigger element hits the center of the viewport
        onEnter: () => {
          disableScroll(), projectsCamera.play();
        },
        onLeaveBack: () => {
          projectsCamera.reverse();
        },
      });

      ScrollTrigger.create({
        trigger: ".title-text",
        start: 300, // When the top of the trigger element hits the center of the viewport
        onEnter: () => {
          disableScroll(), contactCamera.play();
        },
        onLeaveBack: () => {
          contactCamera.reverse();
        },
      });
    }, 100);
  }, []);



  function TextMesh({ text }) {
    return (
      <mesh position={[6, 0.5, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <boxGeometry args={[0, 2]} />
        <meshStandardMaterial
          color="black"
          transparent
          opacity={0} // Adjust opacity if needed
          side={2} // Double side
        />
        <Html transform sprite>
          <div
            className={`intro-text ${
              chandlersOfficeTextVisible ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </Html>
      </mesh>
    );
  }

  const [chandlersOfficeTextVisible, setchandlersOfficeTextVisible] =
    useState(true);
    

  return (
    <>
      <group ref={modelRef}>
        <Model
        
         deskchairtransparent={deskchairtransparent}
        />
        {chandlersOfficeTextVisible && (
          <group ref={textRef}>
            <TextMesh />
          </group>
        )}
      </group>
    </>
  );
};

export default OfficeModel;
