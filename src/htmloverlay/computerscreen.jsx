
import { Html } from '@react-three/drei';
import { Canvas, useFrame,  useThree } from "@react-three/fiber";
import * as THREE from "three";

const ComputerScreenHTML=  ({HTMLRotation, HTMLPosition }) => {
    const { camera } = useThree();
 
return (
<Html 
  position={HTMLPosition}
  as='div'
  wrapperClass ='screen'
  transform
 
   //sprite
  occlude
rotation= {HTMLRotation}
>
  <div id="parent">
    <div id="wrap">
      <iframe
        src="http://localhost:5174//"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-forms"
      ></iframe>
    </div>
  </div>
</Html>
)
}


export default  ComputerScreenHTML