import React, { useEffect, useState } from 'react';
import { Environment, OrbitControls } from "@react-three/drei";
import { Map } from "./Map";

export const Experience = () => {
  return (
    <>

    <Map  />
    
    <Environment preset="sunset" />
    </>
  );
};

