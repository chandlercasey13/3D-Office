/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 corkboard.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

import { Html } from "@react-three/drei";

import { useRef } from "react";
import { Text3D, ScreenSpace } from "@react-three/drei";

import { gsap } from "gsap";
export default function Model(props) {
  const { nodes, materials } = useGLTF("corkboard.glb");

  const project1 = useRef();
  const project2 = useRef();
  const project3 = useRef();
  const project4 = useRef();
  const project5 = useRef();
  const project6 = useRef();

  return (
   

    <group {...props} dispose={null}>
      <group>


        <group scale={1}>
          <mesh
            geometry={nodes.Cube11647_1.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            geometry={nodes.Cube11647_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
          />
          <group
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2.5, 2.5, 1]}
            position={[5.9, 0, -4.65]}
          >
            <group ref={project1}>
              <mesh
                geometry={nodes.Plane001.geometry}
                position={[-2.575, 1.915, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.172, 0.095, 0.139]}
                onPointerOver={(e) => {
                  gsap.to(project1.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project1.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://buttmagazine.com/", "_blank")
                }
              >
                <meshStandardMaterial color={"white"} />
                <Html
                  position={[-0.0, 0.05, 0.0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                   pointerEvents="none"
                >
                  <div
                    className="projects"
                    style={{
                      width: "74px",
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
                      <div className="project-html">
                        <div className="project-html-container">
                          <div className="project-header">SureLock</div>
                          <div className="project-picture">
                            <img src="images/surelock.png" />
                          </div>
                          <div className="project-description">
                            Surelock is a secure, user-friendly password manager
                            that safely stores and auto-fills passwords,
                            ensuring strong encryption and privacy.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>
              <mesh
                geometry={nodes.Sphere.geometry}
                material={materials["Material.001"]}
                position={[-2.681, 2.062, 0.1]}
                scale={-0.013}
              />
              <mesh
                geometry={nodes.Sphere002.geometry}
                material={materials["Material.017"]}
                position={[-2.476, 2.062, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project2}>
              <mesh
                geometry={nodes.Plane002.geometry}
                position={[-2.247, 1.915, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.172, 0.095, 0.141]}
                onPointerOver={(e) => {
                  gsap.to(project2.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project2.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://buttmagazine.com/", "_blank")
                }
              >
                <meshStandardMaterial color={"white"} />
                <Html
                  position={[0.0, 0.05, 0.0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects"
                    style={{
                      width: "74px",
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
                      <div className="project-html">
                        <div className="project-html-container">
                          <div className="project-header">GPT-Clone</div>
                          <div className="project-picture">
                            <img src="images/AIPIC.png" />
                          </div>
                          <div className="project-description">
                            A ChatGPT clone is an AI-powered chatbot that
                            generates human-like responses, enabling natural
                            conversations and efficient information retrieval.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>
              <mesh
                geometry={nodes.Sphere001.geometry}
                material={materials["Material.001"]}
                position={[-2.144, 2.062, 0.1]}
                scale={-0.013}
              />

              <mesh
                geometry={nodes.Sphere003.geometry}
                material={materials["Material.018"]}
                position={[-2.354, 2.062, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project3}>
              <mesh
                geometry={nodes.Plane003.geometry}
                position={[-1.913, 1.915, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.172, 0.095, 0.139]}
                onPointerOver={(e) => {
                  gsap.to(project3.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project3.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://buttmagazine.com/", "_blank")
                }
              >
                <Html
                  position={[0.0, 0.05, 0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects"
                    style={{
                      width: "74px",
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
                      <div className="project-html">
                        <div className="project-html-container">
                          <div className="project-header">JavaScript Game</div>
                          <div className="project-picture">
                            <img src="images/wormgame.png" />
                          </div>
                          <div className="project-description">
                            A Google Keep clone is a note-taking app that lets
                            users create, organize, and sync notes, lists, and
                            reminders across devices.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>
              <mesh
                geometry={nodes.Sphere004.geometry}
                material={materials["Material.022"]}
                position={[-2.015, 2.062, 0.1]}
                scale={-0.013}
              />
              <mesh
                geometry={nodes.Sphere005.geometry}
                material={materials["Material.024"]}
                position={[-1.814, 2.062, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project4}>
              <mesh
                geometry={nodes.Plane004.geometry}
                position={[-2.575, 1.547, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.176, 0.095, 0.141]}
                onPointerOver={(e) => {
                  gsap.to(project4.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project4.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://buttmagazine.com/", "_blank")
                }
              >
                <Html
                  position={[0, 0.05, 0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects"
                    style={{
                      width: "74px",
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
                      <div className="project-html">
                        <div className="project-html-container">
                          <div className="project-header">JavaScript Game</div>
                          <div className="project-picture"></div>
                          <div className="project-description">
                            Surelock is a secure, user-friendly password manager
                            that safely stores and auto-fills passwords,
                            ensuring strong encryption and privacy.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>

              <mesh
                geometry={nodes.Sphere006.geometry}
                material={materials["Material.028"]}
                position={[-2.681, 1.692, 0.1]}
                scale={-0.013}
              />
              <mesh
                geometry={nodes.Sphere007.geometry}
                material={materials["Material.036"]}
                position={[-2.477, 1.692, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project5}>
              <mesh
                geometry={nodes.Plane005.geometry}
                position={[-2.247, 1.547, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.176, 0.095, 0.142]}
                onPointerOver={(e) => {
                  gsap.to(project5.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project5.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://buttmagazine.com/", "_blank")
                }
              >
                <Html
                  position={[0, 0.05, 0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects"
                    style={{
                      width: "74px",
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
                      <div className="project-html">
                        <div className="project-html-container">
                          <div className="project-header">JavaScript Game</div>
                          <div className="project-picture"></div>
                          <div className="project-description">
                            Surelock is a secure, user-friendly password manager
                            that safely stores and auto-fills passwords,
                            ensuring strong encryption and privacy.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>
              <mesh
                geometry={nodes.Sphere010.geometry}
                material={materials["Material.042"]}
                position={[-2.35, 1.692, 0.1]}
                scale={-0.013}
              />
              <mesh
                geometry={nodes.Sphere011.geometry}
                material={materials["Material.043"]}
                position={[-2.15, 1.692, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project6}>
              <mesh
                geometry={nodes.Plane006.geometry}
                position={[-1.913, 1.547, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.176, 0.095, 0.141]}
                onPointerOver={(e) => {
                  gsap.to(project6.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project6.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://buttmagazine.com/", "_blank")
                }
              >
                <Html
                  position={[0, 0.05, 0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects"
                    style={{
                      width: "75px",
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
                      <div className="project-html">
                        <div className="project-html-container">
                          <div className="project-header">JavaScript Game</div>
                          <div className="project-picture"></div>
                          <div className="project-description">
                            Surelock is a secure, user-friendly password manager
                            that safely stores and auto-fills passwords,
                            ensuring strong encryption and privacy.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
              </mesh>

              <mesh
                geometry={nodes.Sphere008.geometry}
                material={materials["Material.040"]}
                position={[-2, 1.692, 0.1]}
                scale={-0.013}
              />
              <mesh
                geometry={nodes.Sphere009.geometry}
                material={materials["Material.041"]}
                position={[-1.82, 1.692, 0.1]}
                scale={-0.013}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
    
  );
}

useGLTF.preload("corkboard.glb");
