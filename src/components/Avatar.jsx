import React, { useEffect, useState, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { button, useControls } from "leva";

export function Avatar(props) {
  const { nodes, materials } = useGLTF(
    "https://models.readyplayer.me/64722c41c977ad9f22319186.glb?morphTargets=Oculus%20Visemes"
  );

  const { animations: idelAnimation } = useFBX("animations/Idle.fbx");
  const { animations: greetingAnimation } = useFBX("animations/Greeting.fbx");

  idelAnimation[0].name = "Idle";
  greetingAnimation[0].name = "Greetings";

  const [animation, setAnimation] = useState("Idle");
  const groupRef = useRef();
  const { actions } = useAnimations(
    [idelAnimation[0], greetingAnimation[0]],
    groupRef
  );

  useEffect(() => {
    actions[animation].reset().fadeIn(0.3).play();

    return () => actions[animation].fadeOut(0.3);
  }, [animation]);

  useControls("Animations", {
    animation: button(() => {
      setAnimation((prev) => (prev === "Idle" ? "Greetings" : "Idle"));
    }),
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
}

useGLTF.preload(
  "https://models.readyplayer.me/64722c41c977ad9f22319186.glb?morphTargets=Oculus%20Visemes"
);
