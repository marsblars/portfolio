import React, { createContext } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Night from '../models/night'
import Turtle from '../models/turtle'
import { OrbitControls, Stars, Center, PresentationControls, MeshPortalMaterial, RoundedBox, Float} from "@react-three/drei";
import Portal from '../models/portal'
import ReactSwitch from 'react-switch';
import '../dist/main.css';
import Test from './Test';

export const ThemeContext = createContext(null);


const Home = () => {
  const [theme, setTheme] = useState('light');
  const [isRotating, setIsRotating] = useState(false);
  const [active, setActive] = useState(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));


  }

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-5,-45.845,-500];
    let rotation = [-0.05, -4.65, 0];

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
    isRotating = {isRotating}
    setIsRotating = {setIsRotating}
    />

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
    isRotating = {isRotating}
    setIsRotating = {setIsRotating}
    />
    <Stars radius={110} depth={300} count={5000} factor={4} saturation={0} fade speed={1} />
  
      </mesh>
    );
  }

   const SelectedCanvas = theme === 'light' ? islandLight : islandNight; 

  return (
<ThemeContext.Provider value={{ theme, toggleTheme }} active={active}
  setActive={setActive}>   
<section className='w-full h-screen relative'>
       <div  className='absolute  left-10 right-10 z-10 flex items-center justify-center'>
       <ReactSwitch 
          className='' 
          checked={theme === 'light'} 
          onChange={toggleTheme} 
          onColor="#86d3ff"
          onHandleColor="#ffffff"
          offHandleColor='#2693e6'
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={5}
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
 

    <Center>

    <Float rotationIntensity={0} floatIntensity={1} speed={3} floatingRange={[-2, 2]}>
    <SelectedCanvas />

    <RoundedBox args={[65,75,0.1]} position={[2,-20.845,-540]}  radius={2} onDoubleClick={() => setActive(active)}>
    
    <MeshPortalMaterial>
    <ambientLight 
    intensity={1.5}
    /> 

    <Test 

    />
    </MeshPortalMaterial>
    </RoundedBox>

    </Float>

      



    <Sky /> 



    </Center>      



  </Suspense>

</Canvas>



</section>
</ThemeContext.Provider> 
  )
}

export default Home

