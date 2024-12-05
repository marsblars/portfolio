import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import mapScene from '../assets1/3d/sand.glb';

export const Map = () => {
  const map = useGLTF(mapScene);
  useEffect(() => {
    map.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  });
  return (

      <RigidBody colliders="trimesh" type="fixed" position={[10,-100,10]}>
        <primitive object={map.scene}  />
      </RigidBody>

  );
};
useGLTF.preload(mapScene);
