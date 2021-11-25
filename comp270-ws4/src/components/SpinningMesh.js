import React, { useRef } from 'react';
// import "./App.css"

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, needsUpdate } from '@react-three/drei'

const SpinningMesh = ({ position, color }) => {
    const mesh = useRef(null);
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (    
          <mesh position={position} ref={mesh}>
            <sphereBufferGeometry attached="geometry" args={[2, 5,  2]} />
            <meshStandardMaterial attached="material" color={color} transparent={false} />
          </mesh>
      )
  }

  export default SpinningMesh;