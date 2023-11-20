

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import skyScene from '../assets1/3d/sky.glb';


const Sky = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(skyScene);

  return (
    <group ref={group} {...props} >
      <group scale={0.01}>
        <mesh
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root.003"]}
          rotation={[-Math.PI / 2, 10, 10]}
          scale={[50000, 49999.992, 49999.992]}
        />
      </group>
    </group>

  );
}

export default Sky;

