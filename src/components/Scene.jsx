import {
  CameraControls,
  Environment,
  Gltf,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Loader from "./Loader";

const CameraManager = () => {
  return (
    <CameraControls
      maxAzimuthAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 2}
      maxPolarAngle={(2 * Math.PI) / 3}
      minPolarAngle={Math.PI / 3}
    />
  );
};

const Scene = () => {
  return (
    <Canvas
      fallback={<Loader />}
      camera={{
        position: [0, 0, 1],
      }}
    >
      <group>
        <CameraManager />
        <Environment preset="sunset" />
        <ambientLight intensity={0.6} />
        <Gltf
          src="/models/classroom.glb"
          position={[110, -140, 40]}
          rotation={[0, Math.PI, 0]}
        />
      </group>
    </Canvas>
  );
};

export default Scene;
