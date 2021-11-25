import React, { useRef } from 'react';
// import "./App.css"

import { Canvas, useLoader, useFrame } from '@react-three/fiber';

import { Suspense, useMemo, useCallback } from 'react';

import * as THREE from 'three';

import { PerspectiveCamera, PositionalAudio, OrbitControls, Stars, needsUpdate } from '@react-three/drei'


const fragmentShader = `
  varying vec3 Normal;
  varying vec3 Position;

  uniform vec3 Ka;
  uniform vec3 Kd;
  uniform vec3 Ks;
  uniform vec4 LightPosition;
  uniform vec3 LightIntensity;
  uniform float Shininess;

  vec3 phong() {
    vec3 n = normalize(Normal);
    vec3 s = normalize(vec3(LightPosition) - Position);
    vec3 v = normalize(vec3(-Position));
    vec3 r = reflect(-s, n);

    vec3 ambient = Ka;
    vec3 diffuse = Kd * max(dot(s, n), 0.0);
    vec3 specular = Ks * pow(max(dot(r, v), 0.0), Shininess);

    return LightIntensity * (ambient + diffuse + specular);
  }

  void main() {
    vec3 black = vec3(0.0, 0.0, 1.0);
    gl_FragColor = vec4(black*phong(), 1.0);
}`

const vertexShader = `
  varying vec3 Normal;
  varying vec3 Position;

  void main() {
    Normal = normalize(normalMatrix * normal);
    Position = vec3(modelViewMatrix * vec4(position, 1.0));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const SpinningSphere = ({ width, height, position, color, scale }) => {
  const data = useMemo(
  () => ({
    uniforms: {
      Ka: { value: new THREE.Vector3(1, 1, 1) },
      Kd: { value: new THREE.Vector3(1, 1, 1) },
      Ks: { value: new THREE.Vector3(1, 1, 1) },
      LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
      LightPosition: { value: new THREE.Vector4(0.0, 2000.0, 0.0, 1.0) },
      Shininess: { value: 200 }
    }
    ,
    fragmentShader
    ,
    vertexShader
  }),
  []
)
    const mesh = useRef(null);
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.001));
    return (    
          <mesh position={position} ref={mesh}>
            <sphereBufferGeometry index={false} wireFrame={true} vertices={false} args={[scale, width,  height, 0, Math.PI *2, 0, Math.PI]}/>
            <meshStandardMaterial wireframe={true} color={"red"} /> 
            <shaderMaterial attach="material" {...data} color={"green"}/>
          </mesh>
      )
  }

  export default SpinningSphere;