import React, { useRef } from 'react';
// import "./App.css"

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, needsUpdate } from '@react-three/drei'

const SpinningSphere = ({ width, height, position, color, scale }) => {
    const mesh = useRef(null);
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
    return (    
          <mesh position={position} ref={mesh}>
            <sphereBufferGeometry index={false} wireFrame={false} vertices={false} args={[scale, width,  height, 0, Math.PI *2, 0, Math.PI]}/>
            <meshStandardMaterial wireframe={true} color={color} /> 
          </mesh>
      )
  }

  export default SpinningSphere;