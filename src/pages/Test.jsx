import React, { createContext } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import Loader from '../components/Loader'
import Forest from '../models/forest'
import Sky from '../models/sky'
import Night from '../models/night'
import Turtle from '../models/turtle'
import { OrbitControls, Stars, Center, PresentationControls, MeshPortalMaterial, RoundedBox} from "@react-three/drei";
import Portal from '../models/portal'
import ReactSwitch from 'react-switch';
import '../dist/main.css';
import Shroom from '../models/shroom'



const Test = () => {

  return (
    

 

   <mesh>
<Shroom />

<Forest 

/>
   </mesh>
  
    
 
    

     









  )
}

export default Test;

