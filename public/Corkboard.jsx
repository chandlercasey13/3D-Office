/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 corkboard.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/corkboard.glb')
  return (
    <group {...props} dispose={null}>
      <group >
        <group scale={1}>
          <mesh geometry={nodes.Cube11647_1.geometry} material={materials['Material.023']} />
          <mesh geometry={nodes.Cube11647_2.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
      <mesh geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} position={[-2.575, 1.93, 0.1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.154, 0.095, 0.139]} />
      <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[-2.247, 1.93, 0.1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.154, 0.095, 0.141]} />
      <mesh geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} position={[-1.913, 1.93, 0.1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.154, 0.095, 0.139]} />
      <mesh geometry={nodes.Plane004.geometry} material={nodes.Plane004.material} position={[-2.575, 1.562, 0.1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.154, 0.095, 0.141]} />
      <mesh geometry={nodes.Plane005.geometry} material={nodes.Plane005.material} position={[-2.247, 1.563, 0.1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.154, 0.095, 0.142]} />
      <mesh geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} position={[-1.913, 1.562, 0.1]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.154, 0.095, 0.141]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} position={[-2.681, 2.062, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.001']} position={[-2.144, 2.062, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.017']} position={[-2.476, 2.062, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.018']} position={[-2.354, 2.062, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials['Material.022']} position={[-2.015, 2.062, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere005.geometry} material={materials['Material.024']} position={[-1.814, 2.062, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere006.geometry} material={materials['Material.028']} position={[-2.681, 1.692, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere007.geometry} material={materials['Material.036']} position={[-2.477, 1.692, 0.1]} scale={-0.013} />
      <mesh geometry={nodes.Sphere008.geometry} material={materials['Material.040']}  scale={-0.013} />
      <mesh geometry={nodes.Sphere009.geometry} material={materials['Material.041']}  scale={-0.013} />
      <mesh geometry={nodes.Sphere010.geometry} material={materials['Material.042']} scale={-0.013} />
      <mesh geometry={nodes.Sphere011.geometry} material={materials['Material.043']}  scale={-0.013} />
        </group>
      </group>
      
     
    </group>
  )
}

useGLTF.preload('/corkboard.glb')
