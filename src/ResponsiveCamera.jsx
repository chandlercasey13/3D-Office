import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspect = size.width / size.height;

    if (size.width < 1920) {

        camera.fov = 30;
    }

    if (size.width < 1400) {
      camera.fov = 40;
    }

    if (size.width < 600) {
      camera.fov = 50;
    }

    if (size.width < 400) {
      camera.fov = 60;
    }
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}
