import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { LoadingScreen } from "./components/LoadingScreen";
import { Suspense, useState } from "react";

const App = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        {/* <Scene /> */}
        <Suspense fallback={null}>{start && <Scene />}</Suspense>
      </Canvas>
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  );
};

export default App;
