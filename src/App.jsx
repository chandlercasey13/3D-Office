import {
  useState,
  useRef,
  Suspense,
  useEffect,
 
} from "react";

import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import ResponsiveCamera from "./ResponsiveCamera";
import { CanvasWrapper } from "./CanvasWrapper"

import { Loader, useGLTF,PivotControls,Preload } from '@react-three/drei';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

import {
  Environment,
  
 
  
} from "@react-three/drei";
import * as THREE from "three";



import OfficeModel from "./OfficeModel";


import HTMLOverlay from "./HTMLOverlay";




const Sky = ({ daynighttogglestate }) => {
  const radius = 100;

  return (
    <mesh position={[-0, -2, -4]} rotation={[Math.PI / 1.25, 0, 0]}>
      <sphereGeometry args={[radius, 50, 50]} />
      
      <meshStandardMaterial
        color={daynighttogglestate ? "#0f383b" : "#b3997b"}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

function App() {
  const [htmlPresent, sethtmlPresent] = useState(true);
  const [arrowPresent, setarrowPresent] = useState(true);

  const [daynighttoggle, setDaynighttoggle] = useState(true);

  const [arrowText, setArrowText] = useState();
  const [arrowTextShadow, setArrowTextShadow] = useState(false);

  const modelRef = useRef();

const handleArrowPresent = () => 
{
  setarrowPresent(!arrowPresent)
}

  const handleHTMLPresent = () => {
    sethtmlPresent((prev) => !prev);
  };
 
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the very top
  }, []);

 



  return (
    <>
    
      <div className="App">
        <HTMLOverlay
      
          htmlPresent={htmlPresent}
          
          daynighttoggle={daynighttoggle}
          arrowText={arrowText}
          arrowPresent={arrowPresent}
          arrowTextShadow={arrowTextShadow}
        />
        <CanvasWrapper >
        
        
          <Canvas
          
        
          
           
          
            shadows
            antialias="true"
           
            camera={{
            
              
              position: new THREE.Vector3(0, 2.25, 5.55),
              rotation: new THREE.Euler(-0.4, 0.003, 0),
            }}
          >
            
            <Suspense fallback={null}>
              <ambientLight intensity={daynighttoggle ? 5.5 : 5.5} />
              <directionalLight
                castShadow
                position={[-2, 10, 3]}
                intensity={[2.5]}
              />
<ResponsiveCamera/>




<Preload all />
              <group ref={modelRef}>
                <OfficeModel
                  handleHTMLPresent={handleHTMLPresent}
                  htmlPresent={htmlPresent}
                  handleArrowPresent = {handleArrowPresent}
                  
                 
                />
              </group>
            
              
              <Sky daynighttogglestate={daynighttoggle} />
      
              <Environment preset="city">
                <mesh>
                  <boxGeometry args={[100, 32, 32]} />
                  <meshStandardMaterial
                    color={daynighttoggle ? "#0f0f0f" : "#c4c4c4"}
                    side={1}
                  />
                </mesh>
              </Environment>
              <EffectComposer>
                <Bloom
                  opacity={0.95}
                  luminanceThreshold={2}
                  luminanceSmoothing={1}
                />
              </EffectComposer>
            </Suspense>
          </Canvas>

          
        
        </CanvasWrapper>
      </div>
      <Loader containerStyles={{ background: "#0f383b", display:'flex', justifyContent:'center', alignItems:'center' }} 
      innerStyles={{background: "#0f383b", height: '40px', textAlign:'center', width:'100%' }}     
  barStyles={{  height: '30px',
    borderRadius: '5px'
  }}
  dataStyles={{ color: 'white',fontSize: '18px',  }}           
  dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
    </>
  );
}

export default App;
