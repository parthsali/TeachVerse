import React from "react";
import { Billboard, Html, Text } from "@react-three/drei";
import useStore from "../store";

const Button = () => {
  const handleClick = () => {
    useStore.setState({ animation: "Greetings" });

    setTimeout(() => {
      useStore.setState({ animation: "Idle" });
    }, 4500);
  };
  return (
    <Billboard position={[-5, -19, -50]}>
      <Html>
        <div>
          <button className="button" onClick={handleClick}>
            Say hello!
          </button>
        </div>
      </Html>
    </Billboard>
  );
};

export default Button;
