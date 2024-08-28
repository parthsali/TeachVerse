import { Html } from "@react-three/drei";
import React from "react";

const Button = (...props) => {
  return (
    <Html {...props}>
      <button>Click me</button>
    </Html>
  );
};

export default Button;
