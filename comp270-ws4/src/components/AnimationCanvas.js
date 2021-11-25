import React, { useRef } from 'react';
// import "./App.css"
import whitedot from './images/whitedot.png'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, needsUpdate } from '@react-three/drei'
import SpinningSphere from './SpinningSphere';
import Points from './Points';

import Lines from './Lines';
import Ring from './Ring';
import RingPlanet from './RingPlanet';



const AnimationCanvas = (props) => {
    return(
        <Canvas colorManagement camera={{position: [150, 50, 0], fov:75}} angle={90}>
          <Stars />
          <OrbitControls />
          <PerspectiveCamera />
          <pointLight position={[0, 75, 0]} intensity={10} scale={10}/>
          <pointLight position={[150, 60, 12]} intensity={2.5} />
          <SpinningSphere position={[0, 75, 0]} scale={50} />
          <RingPlanet position={[145,50, 0]} />
        {/* <Lines width={props.width} height={props.height}/>
        <Ring/> */}


          <Points />
        </Canvas>
    )
  }

  export default AnimationCanvas;