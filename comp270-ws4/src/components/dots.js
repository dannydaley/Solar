import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import whitedot from './images/whitedot.png'





function Points(){
    const count = 100;
    const seperation = 3;
    const imageTexture = useLoader(THREE.TextureLoader, whitedot);
    let positions = useMemo(()=> {
        let positions = []
        for(let xi = 0; xi < count; xi++){
            for(let zi = 0; zi < count; zi++){
                let x = seperation * (xi - count / 2);
                let z = seperation * (zi = count / 2);
                let y = 0;
                positions.push(x, y, z);
            }
        }
        console.log("HELLO?")
        return new Float32Array(positions)
    }, [count, seperation])
    return(
        <points>
            console.log(positions)
            <bufferGeometry attach="geometry">
            <bufferAttribute attachObject={['attributes', 'position']}
            array={positions}
            count = {positions.length / 3}
            itemSize={3}
            />
            </bufferGeometry>

            <pointsMaterial attach="material"
            map={imageTexture}
            color={0x00AAFF}
            size={0.5}
            sizeAttenuation
            transparent={false}
            alphaTest={0.5}
            opacity={1.0} />
        </points>
    )
}

function AnimationCanvas(){
    return(
        <Canvas
        colorManagement={false}
        camera={{position: [100, 10, 0], fov:75}}
        >
            {/* <Suspense fallback={null}/> */}
            <Points />
        </Canvas>
    )
}
const Dots = () => {
    return (
        <div className="anim">
            {/* <Suspense fallback={<div>Loading...</div>} /> */}
            <AnimationCanvas />

        </div>
    )
}

export default Dots;