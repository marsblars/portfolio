import React, { createContext } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Night from '../models/night'
import { OrbitControls, Stars } from "@react-three/drei";
import Switch from '../components/Switch'
import ReactSwitch from 'react-switch';
import '../dist/main.css';

export const ThemeContext = createContext(null);

const Home = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));


  }

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-5,-30.845,-200.393];
    let rotation = [0.2, -4.65, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation ];
  }
  
  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();

  const islandLight = () => {
    return (
      <mesh>
    <Island 
    position = {islandPosition}
    scale = {islandScale}
    rotation = {rotation}
    />
    <Sky  />
      </mesh>
    );
  }

  const islandNight = () => {
    return (
      <mesh>
    <Night
    position = {islandPosition}
    scale = {islandScale}
    rotation = {rotation}
    />
    <Stars radius={110} depth={100} count={5000} factor={4} saturation={0} fade speed={1} />
    <Sky rotation={[-Math.PI / 1.5, 0, -10]} />
      </mesh>
    );
  }

   const SelectedCanvas = theme === 'light' ? islandLight : islandNight; 

  return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>   
<section className='w-full h-screen relative '>
       <div  className='absolute top-5 left-0 right-0 z-10 flex items-center justify-center'>
       <ReactSwitch 
          className='react-switch' 
          checked={theme === 'light'} 
          onChange={toggleTheme} 
          handleDiameter={28}
          height={40}
          width={70}
          offColor="#08f"
          offHandleColor="#0ff"

          />
      </div> 
<Canvas 
  className='w-full h-screen bg-black'
  camera={{ near: 0.1, far: 1000 }}
  alpha={'true'}
>
    <Suspense fallback={<loader />}>
    <directionalLight
    position={[1,1,10]} intensity={2}
    />

    <directionalLight
    position={[5,1,1]} intensity={2}
    />

    <ambientLight 
    intensity={0.5}
    /> 


    

    <OrbitControls enableZoom={true}
    maxDistance={200.0}
    zoomSpeed={8.0}
    panSpeed={10.0}
    />
 



    <SelectedCanvas />

  </Suspense>

</Canvas>



</section>
</ThemeContext.Provider> 
  )
}

export default Home

