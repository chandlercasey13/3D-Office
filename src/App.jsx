import { useState, useRef, Suspense, useEffect } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import * as Switch from "@radix-ui/react-switch";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import {
  Environment,
  OrbitControls,
  FlyControls,
  Html,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";

import OfficeModel from "./OfficeModel";
import DarkModeSwitch from "./Switch";

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
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial
        color={daynighttogglestate ? "#0f383b" : "#D9BB97"}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

function App() {
  const [targetPosition, setTargetPosition] = useState(null);
  const [targetRotation, setTargetRotation] = useState(null);
  const [deskchairtransparent, setdeskchairtransparent] = useState(false);

  const [daynighttoggle, setDaynighttoggle] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollTriggerRef = useRef(null);




  const handlePointerMove = (event) => {
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlePointerMove);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "ArrowUp") {
  //       handleButtonClick();
  //     } else if (event.key === "ArrowDown") {
  //       handleBackClick();
  //     } else if (event.key === "ArrowLeft") {
  //       handleProjectClick();
  //     } else if (event.key === "ArrowRight") {
  //       handleContactClick();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  const handleDayNightToggle = () => {
    setDaynighttoggle(!daynighttoggle);
  };

  const handleSetDeskChairTransparent = () => {
    setdeskchairtransparent(!deskchairtransparent);
  };

  const handleScroll = () => {
    setTargetRotation(new THREE.Euler(-0.05, 0.8, 0.0375));
    // setTargetRotation(new THREE.Euler(-0.56514867741462677, 0, 0));
    setTargetPosition(new THREE.Vector3(0.2, 0.18, 0.0));
    handleSetDeskChairTransparent();
    
  };

  const handleBackScroll = () => {
    setTargetPosition(new THREE.Vector3(0, 1.5, 8));
    setTargetRotation(new THREE.Euler(-0.16514867741462677, 0, 0));
    handleSetDeskChairTransparent();
  };

  // const handleContactClick = () => {
  //   setTargetPosition(new THREE.Vector3(3.95, 1.5, 6.05));
  //   setTargetRotation(new THREE.Euler(0, 0, 0));
  //   //  setHTMLPosition(new THREE.Vector3(0,0,0))
  // };

  useGSAP(() => {
    // gsap code here...
    gsap.to(".title-text", {
      y: 10,

      duration: 1,
      ease: "power1.in",
      opacity: 2,
      delay: 1,
    }); 
    gsap.to(".subtitle-text", {
      x: 0,

      duration: 1.5,
      ease: "power1.in",
      opacity: 2,
    });
    gsap.from(".arrow-down", {
      y: -10,
      repeat: -1,
      duration: 0.75,
      ease: "power1.in",
      yoyo: true,
      delay: 2,
      opacity: 1,
    });

    ScrollTrigger.create({
      trigger: ".title-text",
      start: 200,
      end: "bottom top", 
      scrub: 1, 
      
      onEnter: () => handleScroll(),
      onLeaveBack: () => handleBackScroll(),
    });
  });

  return (
    <>
    <div className="App">
      
          <div className="html-overlay">
          <div className="html-overlay-organization-container">
          <div ref={scrollTriggerRef} className="overlay-text-container">
            <h1
              className={`subtitle-text ${
                daynighttoggle ? "text-white" : "text-white"
              }`}
            >
              Welcome to
            </h1>

            <h1
              className={`title-text ${
                daynighttoggle ? "text-white" : "text-white"
              }`}
            >
              Chandler's Office
            </h1>
          </div>

          <div className="arrow-down">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWZJREFUaEPtltFtwzAMRI+bJJs0mzSTNJ2k3aTtJt2EtYAYUA1Z4pkUggD0ryX63h0pS/Dkjzy5fiTAoxPMBDIBpwPZQk4D3dszAbeFzgKZwJ6Bqqr1OxGZYtaUokV4AhhnIxPIGTC2yt6ybKFsoWyhAw6o6ouIfPe2sj8yVT2JyC8rhx5iVf0A8ArgKiKfETNQDAHwtdS6LVeOdwaCAqjEr9/YhbAmUIlfa1IQZgBVLa6/AThtHGpCWAAa4tfSZ2s7mQHuF7QCUECGECOAjvjLaL7+3XKZfmMgegBR4oseKoEVdhE3TGIPIFL8YQBLEi2AaPEugBEEgHLc1s/lflRuu5bq+e3mQy1UF+m0k2W8XOLdCRhmogfhFh8GMGinFkSI+FAAAiJMfDiAASJU/BSADkS4+GkADYgp4qcCVBA/zN3GcvbWa9z/AfaD0esTINpRtl4mwDoWvT4TiHaUrZcJsI5Fr/8DSu3FMVjd7H8AAAAASUVORK5CYII=" />
          </div>
          <div className="dark-mode-switch">
            <DarkModeSwitch handleDayNightToggle={handleDayNightToggle} daynighttoggle={daynighttoggle} />
          </div>
          </div>
          </div>
          
        
          <div className="canvas-container">
            <Canvas
              shadows
              antialias="false"
              camera={{
                fov: 30,
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
                  deskchairtransparent={deskchairtransparent}
                  handleSetDeskChairTransparent={handleSetDeskChairTransparent}
                  mousePosition={mousePosition}
                />
                <mesh
                  position={[0, -0.95, 0]}
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
