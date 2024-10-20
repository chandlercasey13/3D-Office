import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspect = size.width / size.height;
console.log(size.width)
// console.log(camera)
    if (size.width >= 1920) {

        camera.fov = 14;
        camera.position.y = 2.4
        
    }

    if (size.width > 1400 && size.width < 1920 ) {
      camera.fov = 15;
      camera.position.y = 2.4
    }

    if (size.width > 480 && size.width < 1400) {
      camera.fov = 20;
    }

    
    if (size.width < 480) {
      camera.fov = 22;
      
    }
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}