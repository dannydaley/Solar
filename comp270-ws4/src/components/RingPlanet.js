import ReactDOM from 'react-dom'
import React, { useRef } from 'react';
import * as THREE from 'three/src/Three'
import { Suspense, useMemo, useCallback } from 'react';

import { useSpring, animated as a } from '@react-spring/three'

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Position } from '@react-three/drei/helpers/Position';

import SpinningSphere from './SpinningSphere';
import Ring from './Ring';
const RingPlanet = (props) => {

    return (
        <>
        <Ring position={props.position}/>
        <SpinningSphere position={props.position} color={"#73ff45"} wireFrame={false} width={props.width} height={props.height}/>
        </>

    )
}

export default RingPlanet