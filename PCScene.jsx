/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 rvised.glb --shadows --exportdefault 
*/

import React from "react";
import { Html } from "@react-three/drei";

import { useGLTF } from "@react-three/drei";
import Corkboard from "../src/Corkboard";
import { useState, useRef, useEffect } from "react";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Text3D } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Component from "../src/ContactForm";

export default function PCModel({ deskchairtransparent, scale }) {
  const { nodes: nodes, materials: materials } = useGLTF("rvised.glb");
  const { nodes: nodes2, materials: materials2 } = useGLTF("/OfficeProps.glb");
  const { viewport } = useThree();
  const modelRef = useRef();

  function GlowingText() {
    const glowingTextRef = useRef();

    return (
      <>
        <Text3D
          ref={glowingTextRef}
          font={"/fonts/3dfont3.json"}
          size={0.05}
          scale={[0.35, 0.3, 0.2]}
          rotation={[Math.PI / 2, 0, 0]}
          height={0.011}
          width={0.01}
          curveSegments={10}
          position={[-0.095, 0.05, 0.14]}
        >
          {`Chandler Casey\nFull-Stack Developer`}

          <meshStandardMaterial
            attach="material"
            color="#9af4fc"
            emissive="#9af4fc"
            emissiveIntensity={0.75}
          />
        </Text3D>
      </>
    );
  }

  return (
    <>
      <group
        ref={modelRef}
        dispose={null}
        position={[-0.045, -0.35, -1]}
        rotation-y={[0.79]}
        // rotation-x={[.1]}
        rotation-x={[0]}
        scale={[0.35, 0.4, 0.35]}
      >
        <group
          position={[-2.237, 0.576, 0.969]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={12.089}
        >
          <GlowingText />

          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[0, 0.171, 0]}>
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.pCube94_corpo_do_teclado_0.geometry}
                material={materials["Material.035"]}
              />
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.pCube94_teclado_0.geometry}
                material={materials["Material.003"]}
              />
            </group>
            <group
              position={[11.764, 0.189, -0.483]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.pCylinder2_mouse_0.geometry}
                material={materials["Material.035"]}
                position={[0.767, 0, 0]}
              />
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.pCylinder2_scroll_0001.geometry}
                material={materials["scroll.001"]}
                position={[0.8, 0, 0]}
              />
            </group>
            <group
              position={[-0.023, 3.798, -3.962]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[9.223, 4.632, 0.268]}
            >
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.tvpCube1_tvcorpo2_tv_0.geometry}
                material={materials["Material.035"]}
              />
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.tvpCube1_tvcorpo_da_tv_0.geometry}
                material={materials["Material.035"]}
              />
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.tvpCube1_tvpes_da_tv1_0.geometry}
                material={materials["Material.035"]}
              />
              <mesh
                emissive="black"
                castShadow
                receiveShadow
                geometry={nodes.tvpCube1_tvtela_da_tv_0.geometry}
                material={materials["tvtela_da_tv.002"]}
              >
                {!deskchairtransparent && (
                  <Html
                    className="computer-monitor"
                    position={[0.364, -0.32, -0.7]}
                    scale={[0.08, 0.1425, 0.01]}
                    rotation={[Math.PI, 0, 0]}
                    transform
                  >
                    <div
                      className="monitor-screen"
                      style={{
                        width: "100%",
                        height: 0,
                        paddingBottom: "178%",
                        position: "relative",
                        zIndex: 1,
                        transform: "rotate(90deg)",
                      }}
                    >
                      <iframe
                        src="https://giphy.com/embed/39lWTXEdmp4qnZtHIK"
                        width="400%"
                        height="400%"
                        style={{ position: "absolute" }}
                        frameBorder="0"
                        className="giphy-embed"
                      ></iframe>
                    </div>
                    <p>
                      <a
                        style={{ color: "rgba(0,0,0,0)" }}
                        href="https://giphy.com/gifs/Trakto--background-trakto-bg-HCJJlbF8097pdYRNWW"
                      >
                        via GIPHY
                      </a>
                    </p>
                  </Html>
                )}
                <Html
                  position={
                    deskchairtransparent ? [0, 0, -0.6] : [0.478, 0.428, -0.5]
                  }
                  rotation-y={[Math.PI]}
                  scale={0.065}
                  transform
                  occlude
                >
                  <div
                    style={{
                      width: "120px",
                      height: "120px",

                      zIndex: 1,
                    }}
                  >
                    <div className="computer-html">
                      <div className="html-container">
                        <div className="html-container-wrapper">
                          <div className="chandler-pic-column">
                            <img
                              className="chandler-pic"
                              src="/images/chandler-pic.jpg"
                            />
                          </div>
                          <div className="about-me-column">
                            <h1 className="about-me-header">
                              Hey! I'm Chandler, a Full-Stack Developer, working
                              remotely from College Station, Texas.{" "}
                            </h1>
                            <div className="about-me-section">
                              {" "}
                              <p className="pb-0.5">
                                I've spent the past 12+ years working across
                                different areas of digital design; front-end
                                development, email design, marketing site pages,
                                app UI/UX, to my current role designing products
                                for mobile platforms.
                              </p>
                              <p className="pb-0.5">
                                These days my time is spent researching,
                                designing, prototyping and coding, I also help
                                designers get started with their career.{" "}
                              </p>
                              Out of the office you'll find me dreaming of
                              soccer, playing the guitar, and petting all the
                              good dogs.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>
            </group>
          </group>
        </group>
        <group
          position={[-3.053, 0.522, 3.848]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.009}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-93.113, -7.437, 83.598]}
              rotation={[-Math.PI / 2, 0, 1.543]}
              scale={125.659}
            >
              <group
                position={[-0.138, -0.611, -0.031]}
                rotation={[0, 1.294, 0]}
                scale={[0.701, 0.695, 0.836]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_fabric_0.geometry}
                  material={materials["Material.017"]}
                  position={[0.94, -3.326, 2.611]}
                  rotation={[-1.475, -0.286, 0.335]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_fabric_0.geometry}
                    material={materials["Material.017"]}
                    position={[0.611, 0, 0.183]}
                    rotation={[0, -1.289, 0]}
                    scale={[0.845, 1, 0.982]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005_fabric_0.geometry}
                    material={materials["Material.017"]}
                    position={[0.517, -0.002, 0.286]}
                    rotation={[0, -1.289, 0]}
                    scale={[0.845, 1, 0.982]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_fabric_0.geometry}
                    material={materials["Material.004"]}
                    position={[0.732, 0.09, 0.152]}
                    rotation={[0, -1.289, 0]}
                    scale={[0.845, 1, 0.982]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Wood_0.geometry}
                    material={materials["Material.023"]}
                    position={[0.733, 0, 0.154]}
                    rotation={[0, -1.289, 0]}
                    scale={[0.845, 1, 0.982]}
                  />
                </mesh>
              </group>
            </group>
          </group>
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group
            position={[-3.697, -0.515, 1.32]}
            rotation={[0, 0, -1.423]}
            scale={0.055}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_3.geometry}
              material={materials["Material.018"]}
              position={[1.933, 13.001, -10.747]}
              scale={0.636}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_1.geometry}
                material={materials["Material.029"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_2.geometry}
                material={materials["Material.014"]}
              />
            </mesh>
          </group>

          <group
            position={[-4.355, -3.5, 0.738]}
            rotation={[0, 0, 1.751]}
            scale={[0.131, 0.183, 0.067]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_0.geometry}
              material={materials["Material.035"]}
              position={[-0.0, -13.5, -8.932]}
              scale={[2.2, 1.9, 1]}
            >
              <Html
                position={[0.0, 0.0, 0.01]}
                rotation={[0, 0, Math.PI / 1]}
                scale={0.24}
                transform
                occlude
              >
                <div
                  className="contact"
                  style={{
                    width: "80px",
                    height: "80px",

                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  >
                    <div className="contact-html">
                      <Component />
                    </div>
                  </div>
                </div>
              </Html>
            </mesh>
          </group>

          <group
            position={[-1.313, -0.417, 0.12]}
            rotation={[0, 0, -0.018]}
            scale={0.342}
          >
            <mesh
              castShadow
              geometry={nodes.Cube003_2.geometry}
              material={materials["Material.039"]}
              position={[1.91, -0.597, -0.137]}
            >
              <mesh
                castShadow
                geometry={nodes.Cube003_0.geometry}
                material={materials["Material.031"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_1.geometry}
                material={materials["Material.030"]}
              />
            </mesh>
          </group>
          <group
            position={[-4.135, -0.484, 1.088]}
            rotation={[0, 0, 0.059]}
            scale={0.163}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_0.geometry}
              material={materials["Material.025"]}
              position={[5.907, -0.587, -3.149]}
              scale={0.725}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010_0.geometry}
                material={materials["Material.025"]}
                position={[-0.09, 0.005, 0.695]}
              />
            </mesh>
          </group>

          <group
            position={[3.452, -3.853, 1.647]}
            rotation={[0, 0, -1.551]}
            scale={0.805}
          >
            <group
              position={[-0.5, -4.4, 0.5]}
              rotation={[0, 0, 0]}
              scale={0.805}
            >
              <mesh
                geometry={nodes2.Cube006_0.geometry}
                material={materials2["Material.031"]}
              />
              <mesh
                geometry={nodes2.Cube006_1.geometry}
                material={materials2["Material.030"]}
              />
              <mesh
                geometry={nodes2.Cube006_2.geometry}
                material={materials2["Material.001"]}
              />
              <mesh
                geometry={nodes2.Cube006_3.geometry}
                material={materials2["Material.002"]}
              />
            </group>
          </group>
          <group
            position={[-3.853, -0.896, 1.087]}
            rotation={[0, 0, 2.166]}
            scale={[0.131, 0.183, 0.067]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_0.geometry}
              material={materials["Material.035"]}
              position={[-3.248, -3.276, -7.607]}
              scale={0.725}
            />
          </group>
          <group
            position={[-4.138, -0.481, 1.287]}
            rotation={[0, 0, -3]}
            scale={[0.131, 0.183, 0.067]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_0.geometry}
              material={materials["Material.035"]}
              position={[-7.22, 0.923, -8.415]}
              scale={-0.637}
            />
          </group>
          <group
            position={[-1.443, -0.487, 1.57]}
            rotation={[0, 0, -0.826]}
            scale={0.765}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_0.geometry}
              material={materials["Material.034"]}
              position={[0.774, 0.649, -0.184]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube015_1.geometry}
                material={materials["Material.032"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube015_3.geometry}
                material={materials["Material.021"]}
                position={[0, -0.032, 0]}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_2.geometry}
              material={materials["Material.031"]}
              position={[0.774, 0.617, -0.184]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_4.geometry}
              material={materials["Material.022"]}
              position={[0.774, 0.649, -0.184]}
            />
          </group>

          <group position={[-2.88, -0.702, 0.565]} scale={0.306}>
            <mesh
              castShadow
              geometry={nodes.Cube016_0.geometry}
              material={materials["Material.023"]}
              position={[1.561, -0.384, -0.468]}
            >
              <mesh
                castShadow
                geometry={nodes.Cube016_1.geometry}
                material={materials["Material.034"]}
              />
              <mesh
                castShadow
                geometry={nodes.Cube016_2.geometry}
                material={materials["Material.039"]}
              />
              <mesh
                castShadow
                geometry={nodes.Cube016_3.geometry}
                material={materials["Material.030"]}
              />
            </mesh>
          </group>
          <group
            position={[-3.835, -0.532, 1.32]}
            rotation={[0, 0, -1.604]}
            scale={0.055}
          >
            <mesh></mesh>
          </group>
          <group position={[-7.169, -0.043, -0.621]} scale={0.422}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020_1.geometry}
              material={materials["Material.024"]}
              position={[12.239, -6.918, 1.63]}
              scale={[0.249, 0.666, 0.322]}
            />
          </group>
          {!deskchairtransparent && (
            <group
              position={[-2.139, -1.498, 0.048]}
              rotation={[0, 0, -1.175]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021_0.geometry}
                material={materials["Material.034"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021_1.geometry}
                material={materials["Material.032"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021_2.geometry}
                material={materials["Material.031"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021_3.geometry}
                material={materials["Material.030"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021_4.geometry}
                material={materials["Material.017"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021_5.geometry}
                material={materials["Material.018"]}
              />
            </group>
          )}
          <group
            position={[-0.346, -3.7, 0.1]}
            rotation={[0, 0, -1.559]}
            scale={0.232}
          >
            <mesh
              geometry={nodes.Cube023_3.geometry}
              material={materials["Material.030"]}
              position={[-0.01, -0.826, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube023_6.geometry}
                material={materials["Material.016"]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube023_0.geometry}
                  material={materials["Material.034"]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023_1.geometry}
                    material={materials["Material.032"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023_2.geometry}
                    material={materials["Material.031"]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023_4.geometry}
                    material={materials["Material.014"]}
                  />
                  <mesh
                    geometry={nodes.Cube023_5.geometry}
                    material={materials["Material.015"]}
                    position={[0, 0, 0.012]}
                  />
                </mesh>
              </mesh>
            </mesh>
          </group>
          <group
            position={[-3.7, -0.762, 0.068]}
            rotation={[0, 0, -1.4]}
            scale={0.225}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_0.geometry}
              material={materials["Material.019"]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003_1.geometry}
                material={materials["Material.020"]}
                scale={[1, 1, 1.228]}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003_2.geometry}
              material={materials["Material.004"]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials["Material.040"]}
          position={[-2.149, -0.188, 2.947]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-1, -0.006, -1]}
        />
        <mesh
          castShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials["Material.023"]}
          position={[-1.976, 0.117, 2.956]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.574, -0.019, -0.574]}
        />
        <group
          position={[-1.9, 0.2, 2.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.08}
        >
          <mesh
            geometry={nodes2.Cylinder007_0.geometry}
            material={materials2["Material.027"]}
          />
          <mesh
            geometry={nodes2.Cylinder007_1.geometry}
            material={materials2["Material.026"]}
          />
        </group>
        <group position={[0.049, 1.433, 2.116]} scale={[0.144, 1.676, 1.873]}>
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials["Material.007"]}
            material-roughness={1}
            material-metalness={0.9}
          />

          <group
            position={[-2.354, 0.3, -0.1]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.32}
          >
            <Corkboard />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          position={[-1.825, -0.303, 3.992]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.02, 0.094, 0.101]}
          material-roughness={0}
          material-metalness={0.97}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
          position={[-3.844, -0.303, 1.972]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[2.02, 0.094, 0.101]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
          position={[0.038, 1.453, 3.99]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.66, 0.094, 0.16]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[-1.83, 3.112, 0.097]}
          rotation={[0, -1.571, 0]}
          scale={[0.143, 1, 2.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={nodes.Plane006.material}
          position={[0.05, 3.11, 2.11]}
          scale={[0.143, 1, 1.87]}
        />
        <group
          position={[-1.835, 1.435, 0.115]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[0.124, 1.676, 2.003]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials["Material.005"]}
            material-roughness={1}
            material-metalness={1}
          >
            <meshStandardMaterial color={"#0f383b"} />
          </mesh>
        </group>
        <group
          position={[0.049, 1.433, 2.116]}
          scale={[0.144, 1.676, 1.873]}
        ></group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={nodes.Plane007.material}
          position={[-3.842, 1.453, 0.095]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[1.653, 0.094, 0.141]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.004"]}
          position={[-1.854, -0.297, 1.994]}
          scale={[1.969, 0.095, 1.997]}
        >
          <meshStandardMaterial
            color={"#ffffff"}
            roughness={0.3}
            metalness={1}
          />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("rvised.glb");
