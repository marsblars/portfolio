import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, PresentationControls } from "@react-three/drei";
import { a } from '@react-spring/three';
import portalScene from '../assets1/3d/portal.glb';

const Portal = (props) => {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(portalScene);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
   
   
  return (
    <group ref={group} {...props} >
      <group name="Scene">
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials["portal yellow"]}
          position={[0, 10, 0]}
          scale={[1, 1, 1]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["portal yellow"]}
          position={[0, 0.956, 0]}
          scale={[1, 1, 1.032]}
        />
      </group>
    </group>
  );
}

export default Portal;
