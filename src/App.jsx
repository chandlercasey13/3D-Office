import { useState, useRef, Suspense, useEffect } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';


import * as Switch from '@radix-ui/react-switch';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

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
      const duration = 10000; //was at 2000 Duration of the animation in milliseconds
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




const Sky = ({daynighttogglestate}) => {
  const radius = 100; // Size of the sky sphere

  return (
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial  color ={daynighttogglestate ? "#0f383b" : "#D9BB97"}  side={THREE.BackSide} />
    </mesh>
  );
};







function App() {
  const [targetPosition, setTargetPosition] = useState(null);
  const [targetRotation, setTargetRotation] = useState(null);
 const [deskchairtransparent, setdeskchairtransparent] =useState(false)

  const [daynighttoggle, setDaynighttoggle] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const chandlersoffice = useRef()

  // Update mouse position
  const handlePointerMove = (event) => {
    setMousePosition({
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handlePointerMove);
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);




  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        handleButtonClick();
      } else if (event.key === "ArrowDown") {
        handleBackClick();
      } else if (event.key === "ArrowLeft") {
        handleProjectClick();
      } else if (event.key === "ArrowRight") {
        handleContactClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  const handleDayNightToggle = () => {
    setDaynighttoggle(!daynighttoggle);
    console.log(daynighttoggle);
  };


const handleSetDeskChairTransparent = () => {
  setdeskchairtransparent(!deskchairtransparent)
}


 

  const handleBackClick = () => {
    setTargetRotation(new THREE.Euler(-0.05, .8, 0.0375));
    // setTargetRotation(new THREE.Euler(-0.56514867741462677, 0, 0));
     setTargetPosition(new THREE.Vector3(0.2, 0.18, 0.0));
     handleSetDeskChairTransparent()
    //setTargetPosition(new THREE.Vector3(0,4.5, 9));
    
    
  };

  // const handleProjectClick = () => {
  //   setTargetPosition(new THREE.Vector3(-3.95, 1.5, 6.05));
  //   setTargetRotation(new THREE.Euler(0, 0, 0));
  // };

  // const handleContactClick = () => {
  //   setTargetPosition(new THREE.Vector3(3.95, 1.5, 6.05));
  //   setTargetRotation(new THREE.Euler(0, 0, 0));
  //   //  setHTMLPosition(new THREE.Vector3(0,0,0))
  // };

  


  useGSAP(
    () => {
        // gsap code here...
        gsap.to('.title-text', { y:10,
          
          
          duration:1,
          ease: 'power1.in',
          opacity: 2,
          delay:1,
         }); // <-- automatically reverted
         gsap.to('.subtitle-text', { x:10,
          
          
          duration:1.5,
          ease: 'power1.in',
          opacity: 2,
          
         });
        gsap.from('.arrow-down', {
          y:-10,
          repeat:-1,
          duration:.75,
          ease: 'power1.in',
          yoyo:true,
          delay:2,
          opacity:1,
          
        }) 
    },
   
); // <-- scope is for selector text 
const scrollTriggerRef = useRef(null);
const CameraControl = () => {  const { camera } = useThree(); // Access the Three.js camera
 

  useEffect(() => {
      if (camera) {
          // Create ScrollTrigger to control camera position
          ScrollTrigger.create({
              trigger: scrollTriggerRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true, // Smooth scrolling effect
              markers: true, // Optional: Add markers for debugging
              onUpdate: (self) => {
                  // Calculate camera position based on scroll
                  const progress = self.progress;
                  camera.position.z = 5 - progress * 10; // Adjust camera position
                  camera.lookAt(0, 0, 0); // Keep the camera looking at the origin
              }
          });
      }

     
  }, [camera]);

 
};
  return (
    <>
      <div className="App">
      

      <div className="html-overlay">
          
          <div ref={scrollTriggerRef} className="overlay-text-container">
          <h1  className={`subtitle-text ${daynighttoggle ? 'text-white' : 'text-black'}`}  >Welcome to</h1>
          <h1  className={`title-text ${daynighttoggle ? 'text-white' : 'text-black'}`} >Chandler's Office</h1>
          </div>

          <div className="arrow-down">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWZJREFUaEPtltFtwzAMRI+bJJs0mzSTNJ2k3aTtJt2EtYAYUA1Z4pkUggD0ryX63h0pS/Dkjzy5fiTAoxPMBDIBpwPZQk4D3dszAbeFzgKZwJ6Bqqr1OxGZYtaUokV4AhhnIxPIGTC2yt6ybKFsoWyhAw6o6ouIfPe2sj8yVT2JyC8rhx5iVf0A8ArgKiKfETNQDAHwtdS6LVeOdwaCAqjEr9/YhbAmUIlfa1IQZgBVLa6/AThtHGpCWAAa4tfSZ2s7mQHuF7QCUECGECOAjvjLaL7+3XKZfmMgegBR4oseKoEVdhE3TGIPIFL8YQBLEi2AaPEugBEEgHLc1s/lflRuu5bq+e3mQy1UF+m0k2W8XOLdCRhmogfhFh8GMGinFkSI+FAAAiJMfDiAASJU/BSADkS4+GkADYgp4qcCVBA/zN3GcvbWa9z/AfaD0esTINpRtl4mwDoWvT4TiHaUrZcJsI5Fr/8DSu3FMVjd7H8AAAAASUVORK5CYII="/>
          </div>
          <div className="dark-mode-switch">
          <DarkModeSwitch handleDayNightToggle = {handleDayNightToggle}/>
          </div>



        </div>
        <div className="flex justify-around w-1/3 absolute bottom-2">
       
          
           <button
            className="bg-black/60 rounded-lg p-4 text-white   "
            onClick={handleBackClick}
            style={{ zIndex: 1 }}
          >
            Back
          </button> 
          
        </div>
       
        <div className="canvas-container">
        <Canvas  shadows antialias
          camera={{
            position: new THREE.Vector3(0, 1.5, 8), rotation: new THREE.Euler(-0.16514867741462677, 0, 0)  // default z 9
          }}
        >
          <Suspense fallback={null}>
          <ambientLight intensity={daynighttoggle? 4.5 : 5.5} /> 
          <directionalLight castShadow position={[-2,10,3]} intensity={[2.5]}  />
            

           
           {/* <CameraControl />  */}
            <OfficeModel deskchairtransparent= {deskchairtransparent} handleSetDeskChairTransparent={handleSetDeskChairTransparent} mousePosition={mousePosition} />
           
            <mesh position={[0,-.95,0]} rotation-x={[-Math.PI/2]} scale={[400,400,1]} receiveShadow>
            <planeGeometry args={[1,1]}/>
            <shadowMaterial  opacity={.2}/>
            </mesh>
            <Sky daynighttogglestate={daynighttoggle} />
            
            <FlyControls movementSpeed={5} rollSpeed={0.5} dragToLook={true} />
            <Environment preset="city">
              <mesh>
                
                <boxGeometry args={[100, 32, 32]} />
                <meshStandardMaterial color ={daynighttoggle ? "#0f0f0f" : "#c4c4c4"} side={1} />
              </mesh>
            </Environment>
            <CameraShift
              targetPosition={targetPosition}
              targetRotation={targetRotation}
            />
          </Suspense>
        </Canvas>
        </div>
        </div>
      
    </>
  );
}

export default App;
