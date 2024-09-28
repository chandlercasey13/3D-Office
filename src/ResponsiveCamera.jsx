import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspect = size.width / size.height;

    if (aspect < 1.8) {
      camera.fov = 35;
    }

    if (aspect < 1) {
      camera.fov = 40;
    }

    if (aspect < 0.5) {
      camera.fov = 60;
    }
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}
