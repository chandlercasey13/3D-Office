/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 glasses.glb 
Author: rojencha (https://sketchfab.com/rojencha)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/eyewear-specs-bb1a41bb9d4d412c985ba1492985e90f
Title: Eyewear (Specs)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Glasses(props) {
  const { nodes, materials } = useGLTF('glasses.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-.5, -.5, -.44]} rotation={[-Math.PI / 2, Math.PI/1, Math.PI / 2.1]} scale={[.2,.2,5]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.058, 0.874, -0.024]} rotation={[Math.PI / 2, 0, 0]} scale={0.073}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.glass} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.glass} />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} position={[-0.071, 0.866, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.071} >
          <meshStandardMaterial color={"#4f2801"} metalness={.85} roughness={1}/>
          </mesh>
         
          <mesh geometry={nodes.Object_9.geometry} material={materials['glass.001']} position={[1.42, 0.902, -0.003]} rotation={[0, 0, -Math.PI / 2]} scale={0.043} >
          <meshStandardMaterial color={"#4f2801"} metalness={.85}/>
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glasses.glb')
