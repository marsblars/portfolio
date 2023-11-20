import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from '@react-spring/three';
import turtleScene from '../assets1/3d/turtle.glb';

const Turtle = (props) => {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(turtleScene);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    Object.keys(actions).forEach((key) => {
   actions[key].play();
   });
   }, []);
   



  return (
    <group ref={group} {...props} >
      <group name="Scene">
        <group name="loggerheadarmature" scale={12.171}>
          <group name="loggerheadbody">
            <skinnedMesh
              name="Plane000"
              geometry={nodes.Plane000.geometry}
              material={materials["body.001"]}
              skeleton={nodes.Plane000.skeleton}
            />
            <skinnedMesh
              name="Plane000_1"
              geometry={nodes.Plane000_1.geometry}
              material={nodes.Plane000_1.material}
              skeleton={nodes.Plane000_1.skeleton}
            />
            <skinnedMesh
              name="Plane000_2"
              geometry={nodes.Plane000_2.geometry}
              material={materials["eyes.outer"]}
              skeleton={nodes.Plane000_2.skeleton}
            />
          </group>
          <primitive object={nodes.Main} />
        </group>
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.552, -1.696]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["mushroms.001"]}
          position={[0.29, 0.679, -1.696]}
          rotation={[Math.PI / 2, 0.128, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.412, -0.828]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Circle006"
          geometry={nodes.Circle006.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.642, -1.696]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Circle005"
          geometry={nodes.Circle005.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.642, -1.696]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Circle004"
          geometry={nodes.Circle004.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.642, -1.696]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Circle002"
          geometry={nodes.Circle002.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.642, -1.696]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Circle001"
          geometry={nodes.Circle001.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.502, -1.696]}
          rotation={[Math.PI / 2, 0, -0.749]}
          scale={0.01}
        />
        <mesh
          name="Circle"
          geometry={nodes.Circle.geometry}
          material={materials["mushroms.001"]}
          position={[0, 0.582, -1.696]}
          rotation={[1.636, 0, -0.749]}
          scale={0.01}
        />
      </group>
    </group>
  );
}

export default Turtle;
