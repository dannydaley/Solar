import React, { useRef } from 'react';
import PhongShader from './PhongShader';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'

let radius = 1.4;
let widthSegments = 30;
let heightSegments = 5;
let phiStart = 3;
let phiLength = 7;
let thetaStart = 1.5;
let thetaLength = 0.2;
let roatationXincrement = 0.0051;
let roatationYincrement = 0.0;
let rotationZincrement = 0.0001;

function Ring(props) {
  const mesh = useRef(null);
  useFrame(()=>(mesh.current.rotation.y = mesh.current.rotation.y += roatationXincrement, mesh.current.rotation.x += roatationYincrement, mesh.current.rotation.z -= rotationZincrement))
    return ( 
      <mesh  position={props.position} ref={mesh} >
    <sphereBufferGeometry args={[radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]} />
    <meshStandardMaterial color={"red"} doubleSided={true} /> 
      <PhongShader color={props.ringColor} shininess={props.shininess} wireframe={props.wireframe}/>
  </mesh>     
    )
  }
  export default Ring;