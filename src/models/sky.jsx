

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import skyScene from '../assets1/3d/sky.glb';


const Sky = () => {

  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  
 
  return (

        <mesh ref={skyRef} 
        position={[0,0,-300]}
          rotation={[-Math.PI / 2, 10, 9]}

        >
        <primitive object={sky.scene} scale={[1.5,1.5,1.5]} />
        
        </mesh>


  );
}

export default Sky;

