import { useState, useRef, Suspense, useEffect } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  Environment,
  OrbitControls,
  FlyControls,
  Html,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";
import { SpotLightHelper } from "three";

import ComputerScreenHTML from "./htmloverlay/computerscreen";


import Roads from "./Roads";
import Othermodel from "../public/Othermodel";
import OfficeModel from "./OfficeModel";







const CameraShift = ({ targetPosition, targetRotation }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStartTime, setAnimationStartTime] = useState(0);

  useFrame(({ camera }) => {
    if (isAnimating && targetPosition && targetRotation) {
      const elapsedTime = Date.now() - animationStartTime;
      const duration = 2000; // Duration of the animation in milliseconds
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
      <meshBasicMaterial  color ={daynighttogglestate ? "#0f0f0f" : "#D9BB97"}  side={THREE.BackSide} />
    </mesh>
  );
};



function App() {
  const [targetPosition, setTargetPosition] = useState(null);
  const [targetRotation, setTargetRotation] = useState(null);
  const [HTMLRotation, setHTMLRotation] = useState([0, 0, 0]);
  const [HTMLPosition, setHTMLPosition] = useState([-0.008, -0.124, 0.025]);

  const [daynighttoggle, setDaynighttoggle] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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




  const handleButtonClick = () => {
    setTargetPosition(new THREE.Vector3(-7, 1.5, 7)); // Define the target position for the camera shift
    // setTargetRotation(new THREE.Euler(-0.4, 0.6, 0.225));
    //setHTMLRotation(new THREE.Euler(-0.30255377056249727,  0.48176162984942383,  0.14362979953155677))
    // setScreenPosition(new THREE.Vector3(0.2445, 0.8985, 4.25))
  };

  const handleBackClick = () => {
     setTargetRotation(new THREE.Euler(-0.16514867741462677, 0, 0));
    // setTargetRotation(new THREE.Euler(-0.56514867741462677, 0, 0));
     setTargetPosition(new THREE.Vector3(0, 1.5, 8));
    //setTargetPosition(new THREE.Vector3(0,4.5, 9));
    
    setHTMLPosition(new THREE.Vector3(-0.008, -0.124, 0.025));
  };

  const handleProjectClick = () => {
    setTargetPosition(new THREE.Vector3(-3.95, 1.5, 6.05));
    setTargetRotation(new THREE.Euler(0, 0, 0));
  };

  const handleContactClick = () => {
    setTargetPosition(new THREE.Vector3(3.95, 1.5, 6.05));
    setTargetRotation(new THREE.Euler(0, 0, 0));
    //  setHTMLPosition(new THREE.Vector3(0,0,0))
  };



  

  return (
    <>
      <div className="App">
      

      <div className="TextOverlay">
          
          <h1 className="Text" ></h1>
          <h1 className="Text" >Chandler's Office</h1>
          
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
        <Canvas shadows
          camera={{
            position: new THREE.Vector3(0, 3.5, 9), // default z 9
          }}
        >
          <Suspense fallback={null}>
          <ambientLight intensity={5.5} /> 
          <directionalLight castShadow position={[-2,10,3]} intensity={[2.5]}  />
            

           
            
            <OfficeModel mousePosition={mousePosition} />
            <mesh position={[0,-.95,0]} rotation-x={[-Math.PI/2]} scale={[1,1,1]} receiveShadow>
            <planeGeometry args={[1,1]}/>
            <meshStandardMaterial  color={"#D9BB97"}/>
            </mesh>
            <mesh position={[0,-.95,0]} rotation-x={[-Math.PI/2]} scale={[400,400,1]} receiveShadow>
            <planeGeometry args={[1,1]}/>
            <shadowMaterial  opacity={.2}/>
            </mesh>
            <Sky daynighttogglestate={daynighttoggle} />
            {/* <OrbitControls
              enableRotate={true}
              enablePan={true}
              enableZoom={true}
            /> */}
            <FlyControls movementSpeed={5} rollSpeed={0.5} dragToLook={true} />
            <Environment preset="city">
              <mesh>
                
                <boxGeometry args={[100, 32, 32]} />
                <meshStandardMaterial color ={daynighttoggle ? "#0f0f0f" : "#ffffff"} side={1} />
              </mesh>
            </Environment>
            <CameraShift
              targetPosition={targetPosition}
              targetRotation={targetRotation}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
