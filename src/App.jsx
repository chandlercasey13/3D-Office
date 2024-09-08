import { useState, useRef, Suspense, useEffect, useLayoutEffect } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import * as Switch from "@radix-ui/react-switch";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


import {
  Environment,
  OrbitControls,
  FlyControls,
  Html,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";

import { useLoader } from '@react-three/fiber';

import OfficeModel from "./OfficeModel";

import DarkModeSwitch from "./Switch";
import HTMLOverlay from "./HTMLOverlay";
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';


const CameraShift = ({ targetPosition, targetRotation }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStartTime, setAnimationStartTime] = useState(0);

  useFrame(({ camera }) => {
    if (isAnimating && targetPosition && targetRotation) {
      const elapsedTime = Date.now() - animationStartTime;
      const duration = 10000; 
      const t = Math.min(elapsedTime / duration, 0.1);

      camera.position.lerpVectors(camera.position.clone(), targetPosition, t);
      camera.rotation.x = THREE.MathUtils.lerp(
        camera.rotation.x,
        targetRotation.x,
        t
      );
      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        targetRotation.y,
        t
      );
      camera.rotation.z = THREE.MathUtils.lerp(
        camera.rotation.z,
        targetRotation.z,
        t
      );

      if (t === 1) {
        setIsAnimating(false);
        camera.position.copy(targetPosition);
        camera.rotation.copy(targetRotation);
      }
    }
  });

  const { camera } = useThree();

  useEffect(() => {
    if (targetPosition && targetRotation) {
      setAnimationStartTime(Date.now());
      setIsAnimating(true);
    }
  }, [targetPosition, targetRotation]);

  return null;
};

const Sky = ({ daynighttogglestate }) => {
  const radius = 100; 
  
 



  return (
    <mesh position={[0,0,0]} rotation={[0,0,0]}>
      <sphereGeometry args={[radius, 32, 32]} />
       {/* <boxGeometry args={[10,10,0]}/>  */}
      <meshStandardMaterial 
       
         color={daynighttogglestate ? "#0f383b" : "#b3997b"}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

function App() {
  
  const [targetPosition, setTargetPosition] = useState(null);
  const [targetRotation, setTargetRotation] = useState(null);
  const [deskchairtransparent, setdeskchairtransparent] = useState(false);
  const [htmlPresent, sethtmlPresent] = useState(false)
  const [arrowPresent, setarrowPresent] = useState(true)

  const [daynighttoggle, setDaynighttoggle] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [arrowText, setArrowText]= useState('')
  const [arrowTextShadow, setArrowTextShadow] = useState(false)





  // const handlePointerMove = (event) => {
  //   {htmlPresent && (
  //   setMousePosition({
  //     x: event.clientX / window.innerWidth,
  //     y: event.clientY / window.innerHeight,
  //   }))}
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handlePointerMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handlePointerMove);
  //   };
  // }, [htmlPresent]);

const handleHTMLPresent = () => {
  sethtmlPresent((prev) => !prev);
}
  const handleDayNightToggle = () => {
    setDaynighttoggle(!daynighttoggle);
  };

  const handleSetDeskChairTransparent = () => {
    setdeskchairtransparent((prev) => !prev);
  };


  const handleScroll1 = () => {
    setTargetRotation(new THREE.Euler(-0.0585, 0.78, 0.0375));
    // setTargetRotation(new THREE.Euler(-0.56514867741462677, 0, 0));
    setTargetPosition(new THREE.Vector3(0.1, 0.276, -0.1));
    sethtmlPresent(false)
    handleSetDeskChairTransparent();
   
    setArrowText('Projects') 
  };

  const handleBackScroll1 = () => {
    setTargetPosition(new THREE.Vector3(0, 1.5, 8));
    setTargetRotation(new THREE.Euler(-0.16514867741462677, 0, 0));
    
     sethtmlPresent(true)
    handleSetDeskChairTransparent();
    setArrowText('About Me')
   
  };

  const handleScroll2 = () => {
    setTargetPosition(new THREE.Vector3(-.6, .7, .15));
    setTargetRotation(new THREE.Euler(0, -.8, 0));
    setArrowText('Contact Me')
    
  };

  const handleBackScroll2 = () => {
    setTargetRotation(new THREE.Euler(-0.0585, 0.78, 0.0375));
    
    setTargetPosition(new THREE.Vector3(0.1, 0.276, -0.1));
    setArrowText('Projects')
  };

  const handleScroll3 = () => {
    setTargetPosition(new THREE.Vector3(.3, .6, .03));
    setTargetRotation(new THREE.Euler(-1.4, 0, -.55));
    setarrowPresent(false)
    
  };

  const handleBackScroll3 = () => {
    setTargetPosition(new THREE.Vector3(-.6, .7, .15));
    setTargetRotation(new THREE.Euler(0, -.8, 0));
    setarrowPresent(true)
  };



  useGSAP(() => {

  // ScrollTrigger.create({
  //   trigger: ".title-text",
  //   start: 50,
  //   end: "bottom top", 
  //   scrub: 1,
     
    
  //   onEnter: () => handleScroll1(),
  //   onLeaveBack: () => handleBackScroll1(),
  // });
  ScrollTrigger.create({
    trigger: ".trigger-div-cam-perspective",
    start: 400,
    
    scrub: 1,
    
     
    
    onEnter: () => handleScroll2(),
    onLeaveBack: () => handleBackScroll2(),
  });
  ScrollTrigger.create({
    trigger: ".trigger-div-cam-perspective",
    start: 600,
    
    scrub: 1,
    
     
    
    onEnter: () => handleScroll3(),
    onLeaveBack: () => handleBackScroll3(),
  });


  })



  useGSAP(() => {

    
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

 

  
      // gsap.to(".about-me-header", {
      //   y: 10,
      //   scrollTrigger : {
      //     trigger: ".title-text",
      //     start: 50,
          
          
      //   },
      //   text: "Hi, I'm Chandler ",
        
        
      //   duration: 1.5,
        
        
      //   opacity: 1,
      //   delay: 1,
      // });

      // gsap.from(".about-me-section", {
      //   y: 10,
      //   scrollTrigger : {
      //     trigger: ".title-text",
      //     start: 50,
          
          
      //   },
        
        
      //   duration: 2,
        
        
      //   opacity: 0,
      //   delay: 1,
      // });
      // gsap.from(".chandler-pic", {
      //   y: 10,
      //   scrollTrigger : {
      //     trigger: ".title-text",
      //     start: 50,
          
          
      //   },
       
        
        
      //   duration: 2,
        
        
      //   opacity: 0,
      //   delay: 1,
      // });
    
   






  }, { dependencies: [deskchairtransparent], revertOnUpdate: true });
  


 



  
  
    
  

  return (
    <>
    <div className="App">
      
          
          <HTMLOverlay  htmlPresent={htmlPresent} handleDayNightToggle={handleDayNightToggle} daynighttoggle={daynighttoggle} arrowText={arrowText} arrowPresent= {arrowPresent} arrowTextShadow = {arrowTextShadow}/>
          
          <div className="canvas-container">
            <Canvas
              shadows
              antialias="true"
              camera={{
                fov: 110,
                position: new THREE.Vector3(0, 1.5, 8),
                 rotation: new THREE.Euler(-0.16514867741462677, 0, 0), 
                
              }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={daynighttoggle ? 4.5 : 5.5} />
                <directionalLight
                  castShadow
                  position={[-2, 10, 3]}
                  intensity={[2.5]}
                />
                <CameraShift
                  targetPosition={targetPosition}
                  targetRotation={targetRotation}
                />
                 
                <OfficeModel
                handleHTMLPresent = {handleHTMLPresent}
                htmlPresent = {htmlPresent}
                  deskchairtransparent={deskchairtransparent}
                  handleSetDeskChairTransparent={handleSetDeskChairTransparent}
                  mousePosition={mousePosition}
                />
                <mesh
                  position={[0, -0.75, 0]}
                  rotation-x={[-Math.PI / 2]}
                  scale={[400, 400, 1]}
                  receiveShadow
                >
                  <planeGeometry args={[1, 1]} />
                  <shadowMaterial opacity={0.2} />
                </mesh>
                <Sky daynighttogglestate={daynighttoggle} />
                <FlyControls
                  movementSpeed={5}
                  rollSpeed={0.5}
                  dragToLook={true}
                />
                <Environment preset="city">
                  <mesh>
                    <boxGeometry args={[100, 32, 32]} />
                    <meshStandardMaterial
                      color={daynighttoggle ? "#0f0f0f" : "#c4c4c4"}
                      side={1}
                    />
                  </mesh>
                </Environment>
              </Suspense>
            </Canvas>
          </div>
          </div>
        
       
        
      
    </>
  );
}

export default App;
