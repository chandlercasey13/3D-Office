import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function ResponsiveCamera() {
  const { camera, size } = useThree(); // Access camera and size
  useEffect(() => {
    const aspect = size.width / size.height;

    
    if (aspect < 1.8) {
      camera.fov = 35; // Zoom in for taller screens
    } 

    if ( aspect<1 ) {

      camera.fov = 40; // Zoom out for wider screens
    }

    if ( aspect< .5 ) {

        camera.fov = 60; // Zoom out for wider screens
      }
    camera.updateProjectionMatrix(); // Ensure the changes take effect
  }, [camera, size]);

  return null; // No need to render anything, we're just updating the camera
};