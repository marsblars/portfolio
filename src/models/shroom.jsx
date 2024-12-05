import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from '@react-spring/three';
import shroomScene from '../assets1/3d/shroom.glb';

const Shroom = (props) => {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(shroomScene);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
   



  return (
    <group ref={group} {...props}  scale={[25,25,30]} position={[0,-13,100]}  >
      <group name="Scene">
        <group name="Armature001">
          <skinnedMesh
            name="BezierCurve002"
            geometry={nodes.BezierCurve002.geometry}
            material={materials.MatMushroom}
            skeleton={nodes.BezierCurve002.skeleton}
          />
          <skinnedMesh
            name="BezierCurve003"
            geometry={nodes.BezierCurve003.geometry}
            material={materials.MatMushroom}
            skeleton={nodes.BezierCurve003.skeleton}
          />
          <skinnedMesh
            name="BezierCurve004"
            geometry={nodes.BezierCurve004.geometry}
            material={materials.MatMushroom}
            skeleton={nodes.BezierCurve004.skeleton}
          />
          <skinnedMesh
            name="BezierCurve005"
            geometry={nodes.BezierCurve005.geometry}
            material={materials.MatMushroom}
            skeleton={nodes.BezierCurve005.skeleton}
          />
          <skinnedMesh
            name="BezierCurve032"
            geometry={nodes.BezierCurve032.geometry}
            material={materials.MatMushroom}
            skeleton={nodes.BezierCurve032.skeleton}
          />
          <skinnedMesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials.MatMushroomBody}
            skeleton={nodes.Cube002.skeleton}
          />
          <skinnedMesh
            name="Cylinder082"
            geometry={nodes.Cylinder082.geometry}
            material={materials.MatMushroomBody}
            skeleton={nodes.Cylinder082.skeleton}
          />
          <skinnedMesh
            name="Cylinder219"
            geometry={nodes.Cylinder219.geometry}
            material={materials.MatMushroomBody}
            skeleton={nodes.Cylinder219.skeleton}
          />
          <skinnedMesh
            name="Cylinder220"
            geometry={nodes.Cylinder220.geometry}
            material={materials.MatMushroomBody}
            skeleton={nodes.Cylinder220.skeleton}
          />
          <primitive object={nodes.Bone005} />
        </group>
      </group>
    </group>
  );
}

export default Shroom;

