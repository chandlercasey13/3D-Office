import { useFrame } from "@react-three/fiber";
import { Html, Sphere } from "@react-three/drei";
import { useMemo } from "react";
import { Scale } from "lucide-react";
import { useState, useRef, Suspense, useEffect } from "react";
const VaporEffect = () => {
  const [vapor, setVapor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVapor(true);
    }, 1000); // Delay for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Html position={[1, 0, 0]} scale={[0.15, 0.25, 0.5]} transform sprite>
      {vapor && (
        <div className="vapour">
          <span style={{ "--v": 1 }} />
          <span style={{ "--v": 2 }} />
          <span style={{ "--v": 5 }} />
          <span style={{ "--v": 4 }} />
          <span style={{ "--v": 6 }} />
          <span style={{ "--v": 19 }} />
          <span style={{ "--v": 7 }} />
        </div>
      )}
    </Html>
  );
};

export default VaporEffect;
