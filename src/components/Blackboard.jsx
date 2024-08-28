import { Html } from "@react-three/drei";

const Blackboard = (...props) => {
  return (
    <group position={[-120, 0, -350]}>
      <Html>
        <div
          style={{
            background: "black",
            color: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h1>Blackboard</h1>
          <p>Some text</p>
        </div>
      </Html>
    </group>
  );
};

export default Blackboard;
