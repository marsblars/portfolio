import React from 'react'
import { Html, useProgress } from '@react-three/drei'


const Loader = () => {
  const { progress, total  } = useProgress();
  return (
    <div className='flex justify-center items-center'>
      <div className=''>
        <Html center>{progress}% loaded / {total}</Html>

      </div>
    </div>
  )
}

export default Loader