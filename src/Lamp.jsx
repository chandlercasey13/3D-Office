/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 lamp.gltf 
Author: Zuo Modern (https://sketchfab.com/zuo)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/brixton-table-lamp-rust-56048-00e0b555aa8343459cd5144ca43c6a65
Title: Brixton Table Lamp Rust - 56048
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Lamp(props) {
  const { nodes, materials } = useGLTF('lamp.gltf')
  return (
    <group {...props} dispose={null} position={[-.8,-1.05,4.45]}rotation={[4.7,.0,0]} scale={[.002,.002,.0015]}>
      <group rotation={[0, 0,0 ]}  >
        <mesh geometry={nodes.Object_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.black} />

            

            <mesh geometry={nodes.Object_4.geometry}  >
          <pointLight color={'#f5d47f'} intensity={.5} decay={2}/>
            <meshStandardMaterial emissiveIntensity={1} emissive={'#f5d47f'} color={'#f5d47f'}/>
            </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('lamp.gltf')