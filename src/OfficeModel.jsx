import { useState, useRef, useEffect } from "react";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import PCModel from "./PCScene";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

import ScrollTrigger from "gsap/ScrollTrigger";

import {  useThree } from "@react-three/fiber";

import { TextPlugin } from "gsap/TextPlugin";


const OfficeModel = ({ handleHTMLPresent, htmlPresent }) => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const [animationEnded, setAnimationEnded] = useState(true);
  const [deskchairtransparent, setdeskchairtransparent] = useState(false);
  const modelRef = useRef();


  const { camera } = useThree();

  const disableScroll = () => (document.body.style.overflow = "hidden");
  const enableScroll = () => (document.body.style.overflowY = "scroll");

  const [mousePos, setMousePos] = useState({ x: 0 });

  const handleMouseMove = (event) => {
    {
      htmlPresent &&
        setMousePos({
          x: event.clientX / window.innerWidth,
        });
    }
  };

  useEffect(() => {
    setTimeout(window.addEventListener("mousemove", handleMouseMove), 2000);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [htmlPresent]);

  useFrame(() => {
    if (modelRef.current && animationEnded) {
      const sensitivity = 0.1;
      const lerpFactor = 0.05;
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        (mousePos.x - 0.5) * Math.PI * sensitivity,
        lerpFactor
      );
    }
  });

  useGSAP(
    () => {
    
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

      gsap.fromTo(
        ".about-me-header",

        {
          scrollTrigger: {
            trigger: ".title-text",
            start: 0,
          },
          y: -5,
          ease: "back.inOut",

          duration: 1.5,

          opacity: 0,
          delay: 0.5,
        },
        {
          y: 0,
          ease: "back.inOut",

          duration: 2.0,

          opacity: 1,
          delay: 1,
        }
      );

      gsap.from(".about-me-section", {
        y: 10,
        scrollTrigger: {
          trigger: ".title-text",
        },

        duration: 2,

        opacity: 0,
        delay: 2,
      });
      gsap.from(".chandler-pic", {
        x: -10,
        scrollTrigger: {
          trigger: ".title-text",
        },

        duration: 2,

        opacity: 0,
        delay: 2,
      });
    },
    { dependencies: [deskchairtransparent], revertOnUpdate: true }
  );

  useGSAP(() => {
    const intro = gsap.timeline({ repeat: 0 });

    intro.from(modelRef.current.scale, {
      x: 0.01, 
      y: 0.01, 
      z: 0.01, 
      duration: 1.5,
      delay: 0.5,
      ease: "elastic.out",
    });

    intro.to(
      modelRef.current.rotation,
      {
        x: 0, 
        y: 0, 
        z: 0, 
        duration: 2,
        delay: 0.5,
        ease: "elastic.out",
      },
      0
    );

    const monitorCamera = gsap.timeline({ paused: true, repeat: 0 });

    monitorCamera.to(
      camera.rotation,
      {
        x: -0.055, 
        y: 0.795, 
        z: 0.0375, 
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
        x: 0.15, 
        y: 0.025, 
        z: 0.3, 
        duration: 1,
        delay: 0,
      },
      0
    );

    const projectsCamera = gsap.timeline({ paused: true, repeat: 0 });

    projectsCamera.to(
      camera.rotation,
      {
        x: 0, 
        y: -0.77, 
        z: 0, 
        duration: 1,
        delay: 0,
      },
      0
    );
    projectsCamera.to(
      camera.position,
      {
        x: -0.25, 
        y: 0.35, 
        z: 0.25, 
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
        x: -1.4, 
        y: 0,
        z: -0.55, 
        duration: 0.5,
        delay: 0,
      },
      0
    );
    contactCamera.to(
      camera.position,
      {
        x: 0.175, 
        y: 0.45, 
        z: 0.335, 
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
        start: 0, 
        onEnter: () => {
          setdeskchairtransparent(true);
          setAnimationEnded(false);
          modelRef.current.rotation.set(0, 0, 0);

          handleHTMLPresent();
          disableScroll(), monitorCamera.play();
        },

        onLeaveBack: () => {
          handleHTMLPresent();
          setdeskchairtransparent(false);
          setAnimationEnded(true);
          monitorCamera.reverse();
        },
      });

      ScrollTrigger.create({
        trigger: ".title-text",
        start: 200, 
        onEnter: () => {
          disableScroll(), projectsCamera.play();
        },
        onLeaveBack: () => {
          projectsCamera.reverse();
        },
      });

      ScrollTrigger.create({
        trigger: ".title-text",
        start: 300,
        onEnter: () => {
          disableScroll(), contactCamera.play();
        },
        onLeaveBack: () => {
          contactCamera.reverse();
        },
      });
    }, 100);
  }, []);


  return (
    <>
      <group ref={modelRef}>
        <PCModel deskchairtransparent={deskchairtransparent} />
      </group>
    </>
  );
};

export default OfficeModel;
