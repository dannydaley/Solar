import React, { useRef } from 'react';
import whitedot from './images/whitedot.png'
import { useLoader, useFrame } from '@react-three/fiber';
import { useMemo, useCallback } from 'react';
import * as THREE from 'three';

const Points = () => {
    let count = 250;
    let seperation = 2;
    let t = 0; //phase shift;
    let f = 0.0005; //frequency
    let a = 10; //amplitude
    let timeSpeed = 40;
  
    //graph for sin wave animation on points
    const graph = useCallback((x, z) => {
      return Math.sin(f * ( x**2 + z**2 + t)) * a;
    }, [t, f, a])
  
    //set up texture (dot image)
    const imageTexture = useLoader(THREE.TextureLoader, whitedot);

    // set up reference
    const bufferRef = useRef();

    //nested loop for dot positions
    let positions = useMemo(()=> {

        //initialize empty dot array
        let positions = []

        //outer loop x axis increment
        for(let xi = 0; xi < count; xi++){
            //inner loop z axis increment
            for(let zi = 0; zi < count; zi++){
                // set x , z
                let x = seperation * (xi - count / 2);
                let z = seperation * (zi - count / 2);
                // x , z ranges = (-count min, +count max)  
                // set y to memo graph for sin animation
                let y = graph(x, z);                    
                // apply positions to axes
                positions.push(x, y, z);                
            }
        }      
        return new Float32Array(positions);
    }, [count, seperation, graph])
  
    //animation
    useFrame(()=> {  
      t-=timeSpeed;
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
            size={2}
            sizeAttenuation={false}
            transparent={false}
            alphaTest={1}
            opacity={1} />
        </points>
    )
  }

 export default Points;