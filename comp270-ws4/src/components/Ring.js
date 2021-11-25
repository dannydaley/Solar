import ReactDOM from 'react-dom'
import React, { useRef } from 'react';
import * as THREE from 'three/src/Three'
import { Suspense, useMemo, useCallback } from 'react';

import { useSpring, animated as a } from '@react-spring/three'

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Position } from '@react-three/drei/helpers/Position';

//  const geometry = new THREE.BufferGeometry();
//  // create a simple square shape. We duplicate the top left and bottom right
//  // vertices because each vertex needs to appear once per triangle.

//  // itemSize = 3 because there are 3 values (components) per vertex

//  const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
//  const mesh = new THREE.Mesh( geometry, material );

const SpinningRing = ({ position, color, width, height }) => {

const mesh = useRef(null);
// mesh.current.rotation.z+=50;
useFrame(()=>(mesh.current.rotation.y = mesh.current.rotation.y += 0.05, mesh.current.rotation.x -= 0.009, mesh.current.rotation.z -= 0.002));
//  
return (    
  

              <mesh  position={position} ref={mesh} >
                <sphereBufferGeometry index={false} wireFrame={false} vertices={false} args={[1.4, 30,  5, 3, 7, 1.5, 0.2]} />
                <meshStandardMaterial wireframe={true} color={color} /> 
              </mesh>
              
  )
}

function Ring(props) {
    return (
      <SpinningRing 
      position={[145,49.94, 0]} color={"#73ff45"} wireFrame={false} width={props.width} height={props.height}/>
    )
  }
  export default Ring;