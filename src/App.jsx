import { useState, useRef, Suspense, useEffect, useLayoutEffect, useMemo } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import * as Switch from "@radix-ui/react-switch";
import { useProgress } from "@react-three/drei";






import { Text3D } from "@react-three/drei";





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



function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white" }}>{progress.toFixed(0)}% loaded</div>
    </Html>
  );
}



const Sky = ({ daynighttogglestate }) => {
  const radius = 100; 
  
 



  return (
    <mesh position={[-0,-2,-4]} rotation={[Math.PI/1.25,0,0]}>
       <sphereGeometry args={[radius, 50, 50]} />
       {/* <boxGeometry args={[10,10,0]}/>   */}
       {/* <planeGeometry args={[200,200,1]}/> */}
      <meshStandardMaterial 
       
         color={daynighttogglestate ? "#000000" : "#b3997b"}
        side={THREE.BackSide}
      />
      
    </mesh>
  );
};


function Stars({ count = 2000 }) {
  const pointsRef = useRef();

  // Generate random star positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3); // 3 values per point (x, y, z)
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 1000; // Spread stars across -500 to 500 units
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count]);

  
  useFrame(({ clock }) => {
    pointsRef.current.rotation.z += 0.0002; 
  });

  return (
    <points ref={pointsRef} position={[0,-4,0]} rotation={[Math.PI/1.25,0,0]} scale={[.1,.06,.02]}>
      <bufferGeometry rotation={[0,0,0]}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={.01} // Size of each star
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}





function App() {
  
  
  
  const [htmlPresent, sethtmlPresent] = useState(false)
  const [arrowPresent, setarrowPresent] = useState(true)

  const [daynighttoggle, setDaynighttoggle] = useState(true);

 
  const [arrowText, setArrowText]= useState('')
  const [arrowTextShadow, setArrowTextShadow] = useState(false)

  const modelRef = useRef();


 
const handleHTMLPresent = () => {
  sethtmlPresent((prev) => !prev);
}
  const handleDayNightToggle = () => {
    setDaynighttoggle(!daynighttoggle);
  };




  const handleScroll1 = () => {
    setTargetRotation(new THREE.Euler(-0.0585, 0.78, 0.0375));
    // setTargetRotation(new THREE.Euler(-0.56514867741462677, 0, 0));
    setTargetPosition(new THREE.Vector3(0.1, 0.276, -0.1));
    sethtmlPresent(true)
   
   
    setArrowText('Projects') 
  };

  const handleBackScroll1 = () => {
    setTargetPosition(new THREE.Vector3(0, 1.5, 8));
    setTargetRotation(new THREE.Euler(-0.16514867741462677, 0, 0));
    
     sethtmlPresent(true)
    
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


  



  
  
    
  

  return (
    <>
    <div className="App">
      
          
          <HTMLOverlay  htmlPresent={htmlPresent} handleDayNightToggle={handleDayNightToggle} daynighttoggle={daynighttoggle} arrowText={arrowText} arrowPresent= {arrowPresent} arrowTextShadow = {arrowTextShadow}/>
          
          <div className="canvas-container">
            <Canvas
              shadows
              antialias="true"
              camera={{
                fov: 120,
                position: new THREE.Vector3(0, 2.25, 5.55),
                 rotation: new THREE.Euler(-.4, 0, 0), 
                
              }}
            >
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={daynighttoggle ? 4.5 : 5.5} />
                <directionalLight
                  castShadow
                  position={[-2, 10, 3]}
                  intensity={[2.5]}
                />
              
                <Stars/>
                 <group ref = {modelRef}>
                 
                <OfficeModel
                handleHTMLPresent = {handleHTMLPresent}
                htmlPresent = {htmlPresent}
                 
                  
                />
                </group>
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
