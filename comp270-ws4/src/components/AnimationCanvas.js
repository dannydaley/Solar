import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei'
import SpinningSphere from './SpinningSphere';
import Points from './Points';
import RingPlanet from './RingPlanet';


let cameraStartPosition = [150, 50, 0];
let cameraFieldOfView = 75;
let cameraStartAngle = 90;
let sunLightPosition = [0.0, 0.0, 0.0, 1.0]
let sunScale = 50;
let sunPosition = [0, 75, 0]
let ringPlanetPosition = [145,50, 0]
let ringPlanetLightPosition = [0.0, 2000.0, 0.0, 1.0]
let sunShininess = 5;
let planetShininess = 5;
let ringShininess = 5;
let sunColor = [5.0, 1.0, 0.0]
let ringColor = [1.5, 1.5, 7.0]
let planetColor = [1.0, 1.0, 5.0]
let lightIntensity = 10;
let lightScale = 10;

const AnimationCanvas = (props) => {
    return(
      //set up the canvas
        <Canvas colorManagement camera={{position: cameraStartPosition, fov:cameraFieldOfView}} angle={cameraStartAngle}>        
          <Stars />
          <OrbitControls />
          <PerspectiveCamera />
          <pointLight position={sunPosition} intensity={lightIntensity} scale={lightScale}/>
          <SpinningSphere position={sunPosition} scale={sunScale} color={sunColor} shininess={sunShininess}
             wireframe={props.wireframes} lightposition={sunLightPosition}/>
          <RingPlanet position={ringPlanetPosition} wireframe={props.wireframes} lightposition={ringPlanetLightPosition}
           ringColor={ringColor} planetColor={planetColor} planetShininess={planetShininess} ringShininess={ringShininess}/>
          <Points />
        </Canvas>
    )
  }

  export default AnimationCanvas;