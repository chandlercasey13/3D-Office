/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 OfficeProps.glb 
Author: SeanNicolas (https://sketchfab.com/SeanNicolas)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/60s-office-props-dc00ea320cfa4aad90811080270672db
Title: 60's Office Props
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Props(props) {
  const { nodes, materials } = useGLTF('/OfficeProps.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
      //board
        <group position={[-2.354, -0.123, 1.865]} scale={0.376}>
          <mesh geometry={nodes.Cube11647_0.geometry} material={materials['Material.035']} />
          <mesh geometry={nodes.Cube11647_1.geometry} material={materials['Material.023']} />
          <mesh geometry={nodes.Cube11647_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube11647_3.geometry} material={materials['Material.001']} />
        </group>
        
      
        
       //clock
        <group position={[2.308, -0.054, 2.389]} rotation={[Math.PI / 2, 0, 0]} scale={0.66}>
          <mesh geometry={nodes.Cylinder_0.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.037']} />
        </group>
        //cup
        <group position={[0.046, -2.638, 1.154]} rotation={[-0.054, 0, -1.024]} scale={0.08}>
          <mesh geometry={nodes.Cylinder007_0.geometry} material={materials['Material.027']} />
          <mesh geometry={nodes.Cylinder007_1.geometry} material={materials['Material.026']} />
        </group>
       
       //exit
        <group   position={[3.452, -3.853, 1.647]}
          rotation={[0, 0, -1.551]}
          scale={0.805}>
          <mesh geometry={nodes.Cube006_0.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Cube006_1.geometry} material={materials['Material.030']} />
          <mesh geometry={nodes.Cube006_2.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cube006_3.geometry} material={materials['Material.002']} />
        </group>
       //binder
        <group position={[-1.789, -4.665, 0.259]} rotation={[0, 0, -2.045]} scale={0.055}>
          <mesh geometry={nodes.Cube017_0.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Cube017_1.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.Cube017_2.geometry} material={materials['Material.014']} />
          <mesh geometry={nodes.Cube017_3.geometry} material={materials['Material.018']} />
        </group>
        
       
       
        
       
       
       
        
        
       
       
      </group>
    </group>
  )
}

useGLTF.preload('/OfficeProps.glb')
