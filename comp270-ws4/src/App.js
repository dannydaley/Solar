import React, { useRef } from 'react';
import "./App.css"
import whitedot from './components/images/whitedot.png'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, needsUpate } from '@react-three/drei'

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
          <sphereBufferGeometry attached="geometry" args={[2, 2, 2]} />
          <meshStandardMaterial attached="material" color={color} transparent={true} />
        </mesh>
    )
}


function Points(){

  let t = 0; //phase shift;
  let f = 0.002; //frequency
  let a = 3; //amplitude

  const graph = useCallback((x, z) => {
    return Math.sin(f * ( x**2 + z**2 + t)) * a;
  }, [t, f, a])
  let count = 200;
  let seperation = 3;
  const imageTexture = useLoader(THREE.TextureLoader, whitedot);
  const bufferRef = useRef();
  let positions = useMemo(()=> {
      let positions = []
      for(let xi = 0; xi < count; xi++){
          for(let zi = 0; zi < count; zi++){
              let x = seperation * (xi - count / 2);
              let z = seperation * (zi - count / 2);
              let y = graph(x, z);              
              positions.push(x, y, z);
              
          }
      }      
      return new Float32Array(positions);
  }, [count, seperation, graph])

  useFrame(()=> {
    t+=15;
    const positions = bufferRef.current.array;

    let i = 0
    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
          let x = seperation * (xi - count / 2);
          let z = seperation * (zi - count / 2);
            
          positions[i + 1] = graph(x, z);
          i += 3;
          
      }
    }  
    
    bufferRef.current.needsUpdate = true ;
  })
  return(
      <points>      
          <bufferGeometry attach="geometry">
          <bufferAttribute attachObject={['attributes', 'position']}
          ref={bufferRef}
          array={positions}
          count = {positions.length / 3}
          itemSize={3}
          />
          </bufferGeometry>

          <pointsMaterial attach="material"
          meshStandardMaterial={imageTexture}
          map={imageTexture}
          color={0x03A062}
          size={1}
          sizeAttenuation={false}
          transparent={false}
          alphaTest={1}
          opacity={1} />
      </points>
  )
}

function AnimationCanvas(){
  return(
      <Canvas colorManagement camera={{position: [150, 50, 0], fov:75}} angle={90}>
        <pointLight position={[500, 500, 500]} intensity={0.5} />
        <pointLight position={[0, -10, 10]} intensity={0.5} />
        <SpinningMesh position={[139, 50, 10]} color={'aqua'} castShadow="true" />
        <SpinningMesh position={[139, 50, 0]} color={'lightblue'} />
        <SpinningMesh position={[139, 50, -10]} color={'red'} />
        <Points />
      </Canvas>
  )
}


const App = () => {
    return(
    <div className="anim">
       {/* <Canvas colorManagement camera={{position: [-5,2, 20], fov: 20}}> */}
         <Suspense fallback={<div>Loading...</div>}>
           <AnimationCanvas> 
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} shadow-mapSize-width={1024}  shadow-mapSize-height={1024} castShadow={true} receiveShadow={true}/>
        <pointLight position={[-10, 100, -200]} intensity={0.5} />
        <pointLight position={[0, -10, 10]} intensity={0.5} />
        <SpinningMesh position={[-100, 1, 100]} color={'aqua'} castShadow="true" />
        <SpinningMesh position={[200, 100, -50]} color={'lightblue'} />
        <SpinningMesh position={[-500, -10, -2]} color={'red'} />
        </AnimationCanvas>
       </Suspense> 
      {/* </Canvas>  */}
       
      
      
      
      
      // {/* <Canvas>
      //   <Dots/>
      // </Canvas> */}
</div>
  )
}

export default App; 
