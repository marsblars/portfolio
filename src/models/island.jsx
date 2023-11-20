import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from '@react-spring/three';
import Scene from '../assets1/3d/islandd.glb';

const Island = (props) => {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Scene);
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
          name="coladezorro051"
          geometry={nodes.coladezorro051.geometry}
          material={materials["Material #6"]}
          position={[-51.958, -8.735, -40.939]}
          rotation={[0, 0, 0.002]}
          scale={2.075}
        />
        <mesh
          name="coladezorro110"
          geometry={nodes.coladezorro110.geometry}
          material={materials["Material #6"]}
          position={[-52.696, -7.016, -4.516]}
          rotation={[0.013, -0.005, -0.197]}
          scale={2.075}
        />
        <mesh
          name="coladezorro120"
          geometry={nodes.coladezorro120.geometry}
          material={materials["Material #6"]}
          position={[-38.542, -4.948, 50.598]}
          rotation={[0.014, -0.001, -0.032]}
          scale={2.075}
        />
        <mesh
          name="coladezorro131"
          geometry={nodes.coladezorro131.geometry}
          material={materials["Material #6"]}
          position={[-54.466, -6.594, 49.581]}
          rotation={[-0.053, 0.011, 0.18]}
          scale={2.075}
        />
        <mesh
          name="coladezorro137"
          geometry={nodes.coladezorro137.geometry}
          material={materials["Material #6"]}
          position={[-10.912, -8.275, -6.675]}
          rotation={[-0.018, -0.002, 0.078]}
          scale={2.075}
        />
        <mesh
          name="coladezorro143"
          geometry={nodes.coladezorro143.geometry}
          material={materials["Material #6"]}
          position={[6.774, -7.821, -64.86]}
          rotation={[0.015, 0, -0.036]}
          scale={2.075}
        />
        <mesh
          name="coladezorro165"
          geometry={nodes.coladezorro165.geometry}
          material={materials["Material #6"]}
          position={[-19.691, -7.919, -23.447]}
          rotation={[-0.029, -0.01, 0.091]}
          scale={2.075}
        />
        <mesh
          name="coladezorro172"
          geometry={nodes.coladezorro172.geometry}
          material={materials["Material #6"]}
          position={[67.549, -6.916, -56.471]}
          rotation={[0.098, -0.092, -0.257]}
          scale={2.075}
        />
        <mesh
          name="coladezorro176"
          geometry={nodes.coladezorro176.geometry}
          material={materials["Material #6"]}
          position={[74.868, -8.073, -26.967]}
          rotation={[-0.035, 0.035, 0.036]}
          scale={2.075}
        />
        <mesh
          name="coladezorro184"
          geometry={nodes.coladezorro184.geometry}
          material={materials["Material #6"]}
          position={[-4.689, -7.372, 93.295]}
          rotation={[-0.008, 0, 0.12]}
          scale={2.075}
        />
        <mesh
          name="coladezorro187"
          geometry={nodes.coladezorro187.geometry}
          material={materials["Material #6"]}
          position={[-28.657, -7.753, 90.129]}
          rotation={[0.098, -0.092, -0.257]}
          scale={2.075}
        />
        <mesh
          name="coladezorro191"
          geometry={nodes.coladezorro191.geometry}
          material={materials["Material #6"]}
          position={[-0.25, -8.275, 75.2]}
          rotation={[0.03, -0.006, -0.128]}
          scale={2.075}
        />
        <mesh
          name="coladezorro201"
          geometry={nodes.coladezorro201.geometry}
          material={materials["Material #6"]}
          position={[-12.145, -9.204, -54.664]}
          rotation={[0.03, -0.006, -0.128]}
          scale={2.075}
        />
        <mesh
          name="coladezorro208"
          geometry={nodes.coladezorro208.geometry}
          material={materials["Material #6"]}
          position={[72.563, -7.925, 36.283]}
          rotation={[-0.018, 0.005, 0.06]}
          scale={2.075}
        />
        <mesh
          name="coladezorro215"
          geometry={nodes.coladezorro215.geometry}
          material={materials["Material #6"]}
          position={[82.809, -9.455, 51.583]}
          rotation={[0.013, -0.005, -0.197]}
          scale={2.075}
        />
        <mesh
          name="coladezorro231"
          geometry={nodes.coladezorro231.geometry}
          material={materials["Material #6"]}
          position={[-10.017, -7.611, 42.994]}
          rotation={[-0.018, 0.005, 0.06]}
          scale={2.075}
        />
        <mesh
          name="coladezorro232"
          geometry={nodes.coladezorro232.geometry}
          material={materials["Material #6"]}
          position={[106.111, -8.275, -9.733]}
          rotation={[0.031, -0.007, -0.133]}
          scale={2.075}
        />
        <mesh
          name="coladezorro028"
          geometry={nodes.coladezorro028.geometry}
          material={materials["Material #6"]}
          position={[-67.453, -7.919, -31.312]}
          rotation={[-0.029, -0.01, 0.091]}
          scale={2.075}
        />
        <mesh
          name="coladezorro156"
          geometry={nodes.coladezorro156.geometry}
          material={materials["Material #6"]}
          position={[-30.989, -7.919, -66.325]}
          rotation={[-0.029, -0.01, 0.091]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano082"
          geometry={nodes.sakuraplano082.geometry}
          material={materials["18 - Default.003"]}
          position={[21.982, 71.51, -82.35]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano081"
          geometry={nodes.sakuraplano081.geometry}
          material={materials["12 - Default.003"]}
          position={[22.063, 74.344, -66.53]}
          rotation={[0.002, -0.001, -0.016]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano080"
          geometry={nodes.sakuraplano080.geometry}
          material={materials["18 - Default.003"]}
          position={[11.833, 64.32, -64.764]}
          rotation={[-0.008, 0.004, 0.023]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano079"
          geometry={nodes.sakuraplano079.geometry}
          material={materials["18 - Default.003"]}
          position={[4.265, 66.679, -78.349]}
          rotation={[-0.002, 0, -0.027]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano078"
          geometry={nodes.sakuraplano078.geometry}
          material={materials["18 - Default.003"]}
          position={[4.181, 71.557, -89.27]}
          rotation={[-0.008, -0.004, 0.007]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano077"
          geometry={nodes.sakuraplano077.geometry}
          material={materials["18 - Default.003"]}
          position={[5.539, 67.794, -82.925]}
          rotation={[0.054, 0.002, -0.049]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano076"
          geometry={nodes.sakuraplano076.geometry}
          material={materials["12 - Default.003"]}
          position={[16.281, 72.107, -66.376]}
          rotation={[0.036, -0.014, 0.093]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano075"
          geometry={nodes.sakuraplano075.geometry}
          material={materials["17 - Default.003"]}
          position={[19.106, 63.032, -62.642]}
          rotation={[-0.016, -0.004, 0.013]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano074"
          geometry={nodes.sakuraplano074.geometry}
          material={materials["12 - Default.003"]}
          position={[14.475, 64.063, -68.259]}
          rotation={[-0.008, 0.001, 0.036]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano073"
          geometry={nodes.sakuraplano073.geometry}
          material={materials["18 - Default.003"]}
          position={[34.262, 67.287, -88.181]}
          rotation={[-0.289, 0.202, -0.024]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano072"
          geometry={nodes.sakuraplano072.geometry}
          material={materials["12 - Default.003"]}
          position={[32.453, 66.74, -86.426]}
          rotation={[0.003, 0, 0.097]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano071"
          geometry={nodes.sakuraplano071.geometry}
          material={materials["18 - Default.003"]}
          position={[20.83, 69.601, -92.147]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano070"
          geometry={nodes.sakuraplano070.geometry}
          material={materials["18 - Default.003"]}
          position={[13.612, 63.561, -99.429]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano069"
          geometry={nodes.sakuraplano069.geometry}
          material={materials["12 - Default.003"]}
          position={[26.272, 64.565, -85.499]}
          rotation={[0.104, -0.023, 0.096]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano068"
          geometry={nodes.sakuraplano068.geometry}
          material={materials["12 - Default.003"]}
          position={[26.311, 63.978, -85.498]}
          rotation={[-0.07, 0.017, 0.076]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano067"
          geometry={nodes.sakuraplano067.geometry}
          material={materials["12 - Default.003"]}
          position={[29.479, 66.755, -97.34]}
          rotation={[-0.004, 0, -0.006]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano066"
          geometry={nodes.sakuraplano066.geometry}
          material={materials["12 - Default.003"]}
          position={[29.481, 71.05, -74.425]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano065"
          geometry={nodes.sakuraplano065.geometry}
          material={materials["12 - Default.003"]}
          position={[29.48, 71.047, -74.422]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano064"
          geometry={nodes.sakuraplano064.geometry}
          material={materials["12 - Default.003"]}
          position={[29.481, 71.05, -74.425]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano063"
          geometry={nodes.sakuraplano063.geometry}
          material={materials["12 - Default.003"]}
          position={[15.336, 66.686, -92.402]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano062"
          geometry={nodes.sakuraplano062.geometry}
          material={materials["12 - Default.003"]}
          position={[14.315, 68.329, -92.68]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano061"
          geometry={nodes.sakuraplano061.geometry}
          material={materials["18 - Default.003"]}
          position={[6.403, 67.181, -76.802]}
          rotation={[-0.015, 0.005, -0.034]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano060"
          geometry={nodes.sakuraplano060.geometry}
          material={materials["12 - Default.003"]}
          position={[12.879, 69.989, -93.219]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano059"
          geometry={nodes.sakuraplano059.geometry}
          material={materials["18 - Default.003"]}
          position={[20.194, 64.655, -58.473]}
          rotation={[-0.001, 0.001, -0.005]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano058"
          geometry={nodes.sakuraplano058.geometry}
          material={materials["12 - Default.003"]}
          position={[16.281, 73.838, -66.957]}
          rotation={[0.009, -0.005, 0.023]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano057"
          geometry={nodes.sakuraplano057.geometry}
          material={materials["18 - Default.003"]}
          position={[28.32, 68.862, -86.266]}
          rotation={[0.005, -0.001, -0.011]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano056"
          geometry={nodes.sakuraplano056.geometry}
          material={materials["18 - Default.003"]}
          position={[33.451, 69.62, -72.419]}
          rotation={[0.001, 0, 0.001]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano055"
          geometry={nodes.sakuraplano055.geometry}
          material={materials["12 - Default.003"]}
          position={[31.451, 66.381, -90.879]}
          rotation={[-0.053, 0.002, 0.081]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano054"
          geometry={nodes.sakuraplano054.geometry}
          material={materials["12 - Default.003"]}
          position={[35.604, 67.325, -78.859]}
          rotation={[0.015, -0.001, 0.018]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano053"
          geometry={nodes.sakuraplano053.geometry}
          material={materials["18 - Default.003"]}
          position={[9.231, 71.842, -89.988]}
          rotation={[0.007, 0, -0.013]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano052"
          geometry={nodes.sakuraplano052.geometry}
          material={materials["12 - Default.003"]}
          position={[5.913, 64.063, -74.482]}
          rotation={[0.004, -0.001, -0.049]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano051"
          geometry={nodes.sakuraplano051.geometry}
          material={materials["18 - Default.003"]}
          position={[21.982, 68.789, -90.377]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano050"
          geometry={nodes.sakuraplano050.geometry}
          material={materials["18 - Default.003"]}
          position={[24.605, 68.953, -64.309]}
          rotation={[0.007, -0.001, -0.03]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano049"
          geometry={nodes.sakuraplano049.geometry}
          material={materials["12 - Default.003"]}
          position={[35.835, 66.959, -64.034]}
          rotation={[-0.041, 0.018, -0.077]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano048"
          geometry={nodes.sakuraplano048.geometry}
          material={materials["18 - Default.003"]}
          position={[18.647, 55.603, -75.782]}
          rotation={[-0.34, -0.011, 0.005]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano047"
          geometry={nodes.sakuraplano047.geometry}
          material={materials["12 - Default.003"]}
          position={[17.285, 56.631, -100.05]}
          rotation={[0.005, -0.003, -0.027]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano046"
          geometry={nodes.sakuraplano046.geometry}
          material={materials["18 - Default.003"]}
          position={[32.224, 43.463, -102.867]}
          rotation={[-0.02, 0.01, 0.047]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano045"
          geometry={nodes.sakuraplano045.geometry}
          material={materials["18 - Default.003"]}
          position={[45.187, 46.161, -82.777]}
          rotation={[0, 0, 0.022]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano044"
          geometry={nodes.sakuraplano044.geometry}
          material={materials["18 - Default.003"]}
          position={[46.07, 54.646, -66.664]}
          rotation={[-0.056, -0.026, 0.029]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano043"
          geometry={nodes.sakuraplano043.geometry}
          material={materials["18 - Default.003"]}
          position={[43.601, 50.562, -75.943]}
          rotation={[0.017, -0.002, 0.037]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano042"
          geometry={nodes.sakuraplano042.geometry}
          material={materials["18 - Default.003"]}
          position={[-7.495, 40.776, -93.383]}
          rotation={[0.018, -0.003, 0.02]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano041"
          geometry={nodes.sakuraplano041.geometry}
          material={materials["12 - Default.003"]}
          position={[26.143, 56.674, -99.478]}
          rotation={[0.015, -0.007, 0.043]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano040"
          geometry={nodes.sakuraplano040.geometry}
          material={materials["17 - Default.003"]}
          position={[21.516, 39.358, -105.605]}
          rotation={[-0.03, -0.006, -0.039]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano039"
          geometry={nodes.sakuraplano039.geometry}
          material={materials["18 - Default.003"]}
          position={[35.9, 31.338, -95.873]}
          rotation={[-0.02, 0.004, 0.042]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano038"
          geometry={nodes.sakuraplano038.geometry}
          material={materials["12 - Default.003"]}
          position={[28.965, 42.407, -97.393]}
          rotation={[0.018, 0.116, 0.093]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano037"
          geometry={nodes.sakuraplano037.geometry}
          material={materials["18 - Default.003"]}
          position={[2.739, 45.316, -65.49]}
          rotation={[-0.001, 0, 0.012]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano036"
          geometry={nodes.sakuraplano036.geometry}
          material={materials["12 - Default.003"]}
          position={[2.898, 46.443, -67.975]}
          rotation={[0, 0, 0.056]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano035"
          geometry={nodes.sakuraplano035.geometry}
          material={materials["18 - Default.003"]}
          position={[21.01, 50.375, -60.537]}
          rotation={[-0.004, 0.001, 0.022]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano034"
          geometry={nodes.sakuraplano034.geometry}
          material={materials["18 - Default.003"]}
          position={[32.51, 41.383, -49.801]}
          rotation={[0.003, 0.002, -0.007]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano033"
          geometry={nodes.sakuraplano033.geometry}
          material={materials["18 - Default.003"]}
          position={[49.108, 31.334, -86.168]}
          rotation={[-0.017, 0.003, 0.051]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano032"
          geometry={nodes.sakuraplano032.geometry}
          material={materials["12 - Default.003"]}
          position={[45.03, 32.134, -87.836]}
          rotation={[0.027, 0.006, 0.183]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano031"
          geometry={nodes.sakuraplano031.geometry}
          material={materials["18 - Default.003"]}
          position={[34.011, 30.698, -61.711]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano030"
          geometry={nodes.sakuraplano030.geometry}
          material={materials["18 - Default.003"]}
          position={[36.005, 33.842, -59.785]}
          rotation={[-0.026, 0.008, -0.03]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano029"
          geometry={nodes.sakuraplano029.geometry}
          material={materials["18 - Default.003"]}
          position={[29.487, 35.394, -54.848]}
          rotation={[0, 0, -0.068]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano028"
          geometry={nodes.sakuraplano028.geometry}
          material={materials["18 - Default.003"]}
          position={[28.163, 37.589, -50.22]}
          rotation={[0.007, -0.002, 0.058]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano027"
          geometry={nodes.sakuraplano027.geometry}
          material={materials["12 - Default.003"]}
          position={[12.258, 43.17, -70.332]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano026"
          geometry={nodes.sakuraplano026.geometry}
          material={materials["12 - Default.003"]}
          position={[12.254, 43.167, -70.334]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano025"
          geometry={nodes.sakuraplano025.geometry}
          material={materials["12 - Default.003"]}
          position={[8.225, 45.005, -52.199]}
          rotation={[-0.002, 0, -0.003]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano024"
          geometry={nodes.sakuraplano024.geometry}
          material={materials["12 - Default.003"]}
          position={[6.586, 53.043, -86.942]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano023"
          geometry={nodes.sakuraplano023.geometry}
          material={materials["12 - Default.003"]}
          position={[4.344, 43.976, -107.031]}
          rotation={[0.025, -0.001, -0.038]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano022"
          geometry={nodes.sakuraplano022.geometry}
          material={materials["12 - Default.003"]}
          position={[4.34, 43.171, -106.739]}
          rotation={[0.11, 0.014, 0.05]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano021"
          geometry={nodes.sakuraplano021.geometry}
          material={materials["12 - Default.003"]}
          position={[6.813, 52.394, -86.614]}
          rotation={[-0.071, 0, -0.006]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano020"
          geometry={nodes.sakuraplano020.geometry}
          material={materials["12 - Default.003"]}
          position={[6.586, 53.043, -86.942]}
          rotation={[0.008, 0.05, 0.085]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano019"
          geometry={nodes.sakuraplano019.geometry}
          material={materials["12 - Default.003"]}
          position={[29.383, 47.077, -60.613]}
          rotation={[0.003, 0, 0.012]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano018"
          geometry={nodes.sakuraplano018.geometry}
          material={materials["12 - Default.003"]}
          position={[30.955, 47.407, -60.175]}
          rotation={[0.011, -0.001, 0.065]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano017"
          geometry={nodes.sakuraplano017.geometry}
          material={materials["18 - Default.003"]}
          position={[42.336, 45.546, -84.696]}
          rotation={[-0.07, 0.018, 0.026]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano016"
          geometry={nodes.sakuraplano016.geometry}
          material={materials["12 - Default.003"]}
          position={[33.18, 51.14, -59.568]}
          rotation={[-0.003, 0, 0.004]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano015"
          geometry={nodes.sakuraplano015.geometry}
          material={materials["18 - Default.003"]}
          position={[19.543, 41.893, -112.82]}
          rotation={[0.004, -0.002, 0.032]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano014"
          geometry={nodes.sakuraplano014.geometry}
          material={materials["12 - Default.003"]}
          position={[26.143, 58.34, -98.77]}
          rotation={[-0.013, 0.008, -0.037]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano013"
          geometry={nodes.sakuraplano013.geometry}
          material={materials["18 - Default.003"]}
          position={[14.382, 54.747, -63.711]}
          rotation={[-0.007, 0, 0.015]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano012"
          geometry={nodes.sakuraplano012.geometry}
          material={materials["12 - Default.003"]}
          position={[18.192, 45.7, -50.783]}
          rotation={[0.001, 0, -0.072]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano011"
          geometry={nodes.sakuraplano011.geometry}
          material={materials["18 - Default.003"]}
          position={[0.659, 52.593, -89.683]}
          rotation={[-0.052, 0.019, -0.079]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano010"
          geometry={nodes.sakuraplano010.geometry}
          material={materials["12 - Default.003"]}
          position={[4.087, 46.789, -62.079]}
          rotation={[-0.004, 0.045, -0.008]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano009"
          geometry={nodes.sakuraplano009.geometry}
          material={materials["12 - Default.003"]}
          position={[-2.427, 46.755, -79.742]}
          rotation={[0.017, -0.002, 0.023]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano008"
          geometry={nodes.sakuraplano008.geometry}
          material={materials["18 - Default.003"]}
          position={[38.485, 53.274, -64.716]}
          rotation={[-0.017, 0, -0.01]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano007"
          geometry={nodes.sakuraplano007.geometry}
          material={materials["12 - Default.003"]}
          position={[42.508, 42.891, -88.768]}
          rotation={[-0.046, 0.008, -0.079]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano006"
          geometry={nodes.sakuraplano006.geometry}
          material={materials["18 - Default.003"]}
          position={[13.279, 48.637, -102.657]}
          rotation={[-0.002, 0, 0.005]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano005"
          geometry={nodes.sakuraplano005.geometry}
          material={materials["12 - Default.003"]}
          position={[-3.821, 46.815, -102.29]}
          rotation={[0.077, -0.009, 0.066]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano004"
          geometry={nodes.sakuraplano004.geometry}
          material={materials["17 - Default.003"]}
          position={[17.492, 38.812, -106.523]}
          rotation={[0.011, 0.001, -0.026]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano003"
          geometry={nodes.sakuraplano003.geometry}
          material={materials["17 - Default.003"]}
          position={[29.876, 41.803, -102.261]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano002"
          geometry={nodes.sakuraplano002.geometry}
          material={materials["18 - Default.003"]}
          position={[19.131, 49.583, -63.219]}
          rotation={[0.02, 0.001, 0.035]}
          scale={2.075}
        />
        <mesh
          name="sakuraplano001"
          geometry={nodes.sakuraplano001.geometry}
          material={materials["12 - Default.003"]}
          position={[42.432, 42.407, -88.542]}
          rotation={[0.033, -0.008, -0.009]}
          scale={2.075}
        />
        <mesh
          name="coladezorro137001"
          geometry={nodes.coladezorro137001.geometry}
          material={materials["Material #6"]}
          position={[-10.912, -8.275, -6.675]}
          rotation={[-0.018, -0.002, 0.078]}
          scale={2.075}
        />
        <mesh
          name="coladezorro137002"
          geometry={nodes.coladezorro137002.geometry}
          material={materials["Material #6"]}
          position={[-10.912, -8.275, -6.675]}
          rotation={[-0.018, -0.002, 0.078]}
          scale={2.075}
        />
        <mesh
          name="coladezorro137003"
          geometry={nodes.coladezorro137003.geometry}
          material={materials["Material #6"]}
          position={[-10.912, -8.275, -6.675]}
          rotation={[-0.018, -0.002, 0.078]}
          scale={2.075}
        />
        <mesh
          name="coladezorro156001"
          geometry={nodes.coladezorro156001.geometry}
          material={materials["Material #6"]}
          position={[-30.989, -7.919, -66.325]}
          rotation={[-0.029, -0.01, 0.091]}
          scale={2.075}
        />
        <mesh
          name="coladezorro172001"
          geometry={nodes.coladezorro172001.geometry}
          material={materials["Material #6"]}
          position={[67.549, -6.916, -56.471]}
          rotation={[0.098, -0.092, -0.257]}
          scale={2.075}
        />
        <mesh
          name="coladezorro208001"
          geometry={nodes.coladezorro208001.geometry}
          material={materials["Material #6"]}
          position={[72.563, -7.925, 36.283]}
          rotation={[-0.018, 0.005, 0.06]}
          scale={2.075}
        />
        <mesh
          name="coladezorro208002"
          geometry={nodes.coladezorro208002.geometry}
          material={materials["Material #6"]}
          position={[72.563, -7.925, 36.283]}
          rotation={[-0.018, 0.005, 0.06]}
          scale={2.075}
        />
        <mesh
          name="coladezorro232001"
          geometry={nodes.coladezorro232001.geometry}
          material={materials["Material #6"]}
          position={[106.111, -8.275, -9.733]}
          rotation={[0.031, -0.007, -0.133]}
          scale={2.075}
        />
        <mesh
          name="colgante"
          geometry={nodes.colgante.geometry}
          material={materials["04 - Default.002"]}
          position={[-86.892, -10.878, -9.3]}
          scale={2.075}
        />
        <mesh
          name="lajas001"
          geometry={nodes.lajas001.geometry}
          material={materials["01 - Default.007"]}
          position={[8.535, -6.871, -42.496]}
          scale={2.075}
        />
        <mesh
          name="lampara002"
          geometry={nodes.lampara002.geometry}
          material={materials["Material #5.005"]}
          position={[32.474, 63.524, -6.789]}
          scale={[0.563, 0.382, 0.563]}
        />
        <mesh
          name="lampara003"
          geometry={nodes.lampara003.geometry}
          material={materials["Material #5.005"]}
          position={[32.474, 63.044, 2.702]}
          scale={[0.563, 0.382, 0.563]}
        />
        <mesh
          name="lampara004"
          geometry={nodes.lampara004.geometry}
          material={materials["Material #5.005"]}
          position={[32.474, 63.541, 26.216]}
          rotation={[-0.088, 0, 0]}
          scale={[0.563, 0.382, 0.563]}
        />
        <mesh
          name="lampara005"
          geometry={nodes.lampara005.geometry}
          material={materials["Material #5.005"]}
          position={[32.292, 63.528, 16.035]}
          rotation={[-0.01, -0.001, -0.036]}
          scale={[0.563, 0.382, 0.563]}
        />
        <mesh
          name="nube001"
          geometry={nodes.nube001.geometry}
          material={materials["24 - Default.003"]}
          position={[-39.873, -40.469, 77.872]}
          rotation={[Math.PI, -0.982, Math.PI / 2]}
          scale={[1.258, 3.3, 3.3]}
        />
        <mesh
          name="petalo"
          geometry={nodes.petalo.geometry}
          material={materials["16 - Default.003"]}
          position={[3.638, -11.121, -97.642]}
          rotation={[0, 1.003, 1.34]}
          scale={[0.923, 0.923, 0.408]}
        />
        <mesh
          name="petalo001"
          geometry={nodes.petalo001.geometry}
          material={materials["16 - Default.003"]}
          position={[5.901, 2.114, -70.33]}
          rotation={[0, 1.003, 1.34]}
          scale={[0.923, 0.923, 0.408]}
        />
        <mesh
          name="petalo002"
          geometry={nodes.petalo002.geometry}
          material={materials["16 - Default.003"]}
          position={[-24.987, -1.49, -70.141]}
          rotation={[0, 1.003, 1.34]}
          scale={[0.923, 0.923, 0.408]}
        />
        <mesh
          name="Plane809"
          geometry={nodes.Plane809.geometry}
          material={materials["08 - Default.003"]}
          position={[-42.239, -8.419, 25.655]}
          scale={2.075}
        />
        <mesh
          name="portal001"
          geometry={nodes.portal001.geometry}
          material={materials["Material #1.004"]}
          position={[36.248, 1.127, -27.078]}
          rotation={[0, -0.026, 0]}
          scale={2.075}
        />
        <mesh
          name="RetopoGroup003001"
          geometry={nodes.RetopoGroup003001.geometry}
          material={materials["Default.004"]}
          position={[-62.511, -8.272, 41.833]}
          scale={2.075}
        />
        <mesh
          name="sakura001"
          geometry={nodes.sakura001.geometry}
          material={materials["arbol.005"]}
          position={[19.474, 5.934, -82.373]}
          rotation={[0, 0.222, 0]}
          scale={1.892}
        />
        <mesh
          name="techoaljibe"
          geometry={nodes.techoaljibe.geometry}
          material={materials["06 - Default.003"]}
          position={[-0.403, 21.139, -31.216]}
          scale={2.075}
        />
        <mesh
          name="tierra001"
          geometry={nodes.tierra001.geometry}
          material={materials["02 - Default.004"]}
          position={[18.272, -7.001, 7.041]}
          scale={2.075}
        />
      </group>
    </group>
  );
}












export default Island;