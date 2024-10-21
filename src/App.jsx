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

import { Loader, useGLTF,PivotControls } from '@react-three/drei';
import { FlyControls } from '@react-three/drei';
import { useErrorBoundary } from 'use-error-boundary'



gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

import {
  Environment,
  
 
  
} from "@react-three/drei";
import * as THREE from "three";


import PCModel from "./OfficeScene";





const Sky = ({ daynighttogglestate }) => {
  const radius = 100;

  return (
    <mesh position={[-0, -2, -4]} rotation={[Math.PI / 1.25, 0, 0]}>
      <sphereGeometry args={[radius, 50, 50]} />
      
      <meshStandardMaterial
        color={daynighttogglestate ? "#061713" : "#b3997b"}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

function App() {


  const canvasRef = useRef(null);







  const [htmlPresent, sethtmlPresent] = useState(true);
  const [arrowPresent, setarrowPresent] = useState(false);

  const [daynighttoggle, setDaynighttoggle] = useState(true);

  const [arrowText, setArrowText] = useState();
  const [arrowTextShadow, setArrowTextShadow] = useState(false);
 
  const [animationLocation,setAnimationLocation] = useState("")


const handleArrowPresent = () => 
{
  setarrowPresent((prev) => !prev)
}

  const handleHTMLPresent = () => {
    sethtmlPresent((prev) => !prev);
  };
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  const { ErrorBoundary, didCatch, error } = useErrorBoundary()
  return didCatch ? (
    <div className="fallback-div">{error.message}</div>) : (
    <>
    
      <div className="App">
      <div className="html-overlay">
      <div className="html-overlay-organization-container">
        {htmlPresent && (
<>
<div className='navbar'>
<button onClick={() => setAnimationLocation('About')} className='navbar-button  '>About Me</button> <button className='navbar-button'onClick={() => setAnimationLocation('Projects')}> Projects</button> <button className='navbar-button  ' onClick={() => setAnimationLocation('Contact')}> Contact</button>
</div>




          <div className="overlay-text-container">
            <>
              <h1 className={`subtitle-text text-white `}> </h1>
              {/* <div className='overlay-h1-wrapper'> */}
              <p className={`title-text text-white`}>Chandler's Portfolio</p>
              {/* </div> */}
            </>
          </div>

          </>
        )}
        <div className="trigger-div-cam-perspective"></div>





        <div
          className={`arrow-div`}
        >
          {/* <div className="arrow-down"> */}
           {arrowPresent && ( <button className='home-button' onClick={() => setAnimationLocation('Home')}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMRJREFUSEvtkkEOgyAQRf/oio3GG9ib2KP0JO1N2p7Eq3AD48odNkxCYqk4qCHpApcI7/H/QEj8UWI+skBsOFf05xVN43iHMW/VNHrtqtMwtCjLTlXVKxQlOGSGAw8AGsZcfQnDiZ4g6kB0C0nCAgsoih5A60u+4IBWdX3ZncAeYJAnYZC7uQDnrdIz+JHMs+ZaIuBRgpUkdmmzluWlxQRu8yIJtjr3G4kWuCShJ3toyNJ8Yv7vShADPFVRFhxpQDyTfMgfWFFEGd8C++sAAAAASUVORK5CYII="></img></button>)}
           


        
          {/* </div> */}
        </div>

        
      </div>
      
    </div>
   
        <CanvasWrapper >
        <ErrorBoundary>
        
          <Canvas
          
        ref={canvasRef}
      
           gl={{alpha:true, preserveDrawingBuffer:true}}
          
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
                //position={[-2, 10, 3]}
                 position={[-3, 7, 3]}
                intensity={[2]}
              />
              
            
<ResponsiveCamera/>


{/* <FlyControls
                
            /> */}



              
               <PCModel  
                  handleHTMLPresent={handleHTMLPresent}
                  htmlPresent={htmlPresent}
                  handleArrowPresent = {handleArrowPresent}
                  arrowPresent = {arrowPresent}
                  animationLocation = {animationLocation}/>
             
            
              
              
      
              <Environment preset="warehouse">
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

          
          </ErrorBoundary>
        </CanvasWrapper>
       
      </div>
      <Loader containerStyles={{ background: "#061713", display:'flex', justifyContent:'center', alignItems:'center' }} 
      innerStyles={{background: "#061713", height: '40px', textAlign:'center', width:'100%' }}     
  barStyles={{  height: '30px',
    borderRadius: '5px'
  }}
  dataStyles={{ color: 'white',fontSize: '18px',  }}           
  dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
    </>)

}

export default App;
