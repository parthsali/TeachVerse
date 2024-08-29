import React from "react";
import { Text } from "@react-three/drei";

const TableText = () => {
  return (
    <>
      <Text
        fontSize={10}
        fontWeight={"bold"}
        position={[5, -60, -50]}
        rotation={[-Math.PI / 2, 0, 0]}
        textAlign="center"
      >
        Welcome to
        <meshStandardMaterial color={"black"} />
      </Text>

      <Text
        fontSize={10}
        fontWeight={"bold"}
        position={[5, -60, -38]}
        rotation={[-Math.PI / 2, 0, 0]}
        textAlign="center"
      >
        VR Classroom
        <meshStandardMaterial color={"black"} />
      </Text>
    </>
  );
};

export default TableText;
