import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import PhongShader from './PhongShader';


let phiStart = 0;
let phiLength = Math.PI *2
let thetaStart = 0;
let thetaLength = Math.PI;
let rotationIncrement = 0.001;
const SpinningSphere = (props) => {

    const mesh = useRef(null);
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += rotationIncrement));
    return (    
          <mesh position={props.position} ref={mesh}>
            <sphereBufferGeometry index={false} args={[props.scale, props.width, props.height, phiStart, phiLength, thetaStart, thetaLength]}/>
            <meshStandardMaterial wireframe={props.wireframe} color={"red"} /> 
            <PhongShader attach="material" wireframe={props.wireframe} color={props.color} shininess={props.shininess}/>
          </mesh>
      )
  }

  export default SpinningSphere;