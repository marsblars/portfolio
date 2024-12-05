import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import forestScene from '../assets1/3d/forest.glb';


const Forest = () => {

  const forest = useGLTF(forestScene);
  const forestRef = useRef();

  
 
  return (

        <mesh ref={forestRef} 
        position={[50,0,-200]}
        
        
        

        >
        <primitive object={forest.scene}  />
        
        </mesh>


  );
}

export default Forest;
