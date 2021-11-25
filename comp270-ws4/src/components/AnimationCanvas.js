import React, { useRef } from 'react';
// import "./App.css"
import whitedot from './images/whitedot.png'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, needsUpdate } from '@react-three/drei'
import SpinningMesh from './SpinningMesh';
import Points from './Points';
import Heart from './Heart';
import Lines from './Lines';
import Ring from './Ring';



const AnimationCanvas = (props) => {
    return(
        <Canvas colorManagement camera={{position: [150, 50, 0], fov:75}} angle={90}>
          <pointLight position={[150, 50, -12]} intensity={2.5} />
          <pointLight position={[150, 60, 12]} intensity={2.5} />

        <Lines width={props.width} height={props.height}/>
        <Ring/>

          {/* <SpinningMesh position={[139, 50, 10]} color={'aqua'}/>
          <SpinningMesh position={[139, 50, 0]} color={'red'} />
          <SpinningMesh position={[139, 50, -10]} color={'red'} /> */}
          {/* <Lines position={[139,10,-5]} color={'blue'} /> */}
          <Points />
        </Canvas>
    )
  }

  export default AnimationCanvas;