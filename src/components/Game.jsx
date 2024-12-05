import { Loader, PerformanceMonitor, SoftShadows, FirstPersonControls, OrbitControls, PointerLockControls, KeyboardControls, } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useMemo } from "react";
import { Experience } from "./Experience";
import * as THREE from 'three';
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Soldier from '../models/Soldier'





/* function FirstPerson() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, pointer, controls } = useThree();
  
}

const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
}; */

function Game() {

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "w", "W"] },
    { name: "backward", keys: ["ArrowDown", "s", "S"] },
    { name: "left", keys: ["ArrowLeft", "a", "A"] },
    { name: "right", keys: ["ArrowRight", "d", "D"] },
    { name: "jump", keys: ["Space"] },
    { name: 'run', keys: ['Shift'] },
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];


  const animationSet = {
    idle: "CharacterArmature|Idle",
    walk: "CharacterArmature|Walk",
    run: "CharacterArmature|Run",
    jump: "CharacterArmature|Jump",
    jumpIdle: "CharacterArmature|Jump_Idle",
    jumpLand: "CharacterArmature|Jump_Land",
    fall: "CharacterArmature|Duck", // This is for falling from high sky
    action1: "CharacterArmature|Wave",
    action2: "CharacterArmature|Death",
    action3: "CharacterArmature|HitReact",
    action4: "CharacterArmature|Punch",
  };
    return (
    
<section className='w-full h-screen relative '>

    <Canvas
    shadows
    camera={{  fov: 60, near: 0.1, far: 10000, rotation: [0, 0, 0] }}
    dpr={[1, 1.5]} // optimization to increase performance on retina/4k devices
/*     onPointerDown={(e) => {
      if (e.pointerType === 'mouse') {
        (e.target).requestPointerLock()
      }
    }} */
    >
      


    
    
        <Suspense fallback={null}>
        <SoftShadows size={42} />
          <Physics timeStep="vary">
<PointerLockControls />
          <KeyboardControls map={keyboardMap}>
              <Ecctrl animated>
              <EcctrlAnimation
                  characterURL={'./soldier.glb'}
                  animationSet={animationSet}
                >                     
                  <Soldier />
              </EcctrlAnimation>           
              </Ecctrl>
            </KeyboardControls>
   <Experience />
          </Physics >
        </Suspense>
    </Canvas>

</section>

  );
}

export default Game; 