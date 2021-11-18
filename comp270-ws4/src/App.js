import React, { useRef } from 'react';
import "./App.css"
import { Canvas, useFrame, Camera } from '@react-three/fiber';

import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars } from '@react-three/drei'

function Box() {
  return (
    <>
      <mesh>
        <bufferGeometry attach="geometry" color="green" />
        <meshStandardMaterial attach="material" />
      </mesh>
    </>
  );
}


const SpinningMesh = ({ position, color }) => {
  const mesh = useRef(null);
  useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (    
        <mesh position={position} ref={mesh}>
          <boxBufferGeometry attached="geometry" args={[2, 2, 2]} />
          <meshStandardMaterial attached="material" color={color} />
        </mesh>
    )
}




const App = () => {
    return(
    <>
      <Canvas colorManagement camera={{position: [-5,2, 20], fov: 20}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} shadow-mapSize-width={1024}  shadow-mapSize-height={1024} castShadow={true} receiveShadow={true}/>
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={0.5} />

        <SpinningMesh position={[0, 1, 0]} color={'aqua'} castShadow="true" />
        <SpinningMesh position={[-2, 1, -5]} color={'lightblue'} />
        <SpinningMesh position={[5, 1, -2]} color={'red'} />
      </Canvas>
</>
  )
}

export default App; 
