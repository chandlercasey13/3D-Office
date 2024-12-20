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
      <group
     >


        <group scale={1.05} position={[-0.05,0,0]} >
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
            <group ref={project1} pointerEvents="auto">
              <mesh
                geometry={nodes.Plane001.geometry}
                position={[-2.575, 1.925, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.185, 0.095, 0.155]}

              
                onPointerOver={(e) => {
                  gsap.to(project1.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project1.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
               
                onPointerDown={(e) =>

                  window.open("https://chandlercasey13.github.io/hamiter-construction-site/")
                  
                 
                }

                

               

              >
                <meshStandardMaterial color={"#ebebeb"} emissive={0.1} />
               
                <Html
                  position={[0, 0.05, 0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects "
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
                          <div className="project-header"> Construction Site </div>
                          <div className="project-picture"><img src="images/constructionsite.png" /></div>
                          <div className="project-description">

                          A sleek construction site built for Hamiter Construction using Next.js, TypeScript, and Tailwind CSS featuring dynamic project showcases and  email contact service.                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>


              </mesh>
              <mesh
                geometry={nodes.Sphere.geometry}
                material={materials["Material.001"]}
                position={[-2.681, 2.08, 0.1]}
                scale={-0.013}
                
              />
              <mesh
                geometry={nodes.Sphere002.geometry}
                material={materials["Material.017"]}
                position={[-2.476, 2.08, 0.1]}
                scale={-0.013}
              />
            </group>

          

            <group ref={project2} >
              <mesh
                geometry={nodes.Plane002.geometry}
                position={[-2.247,  1.925, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.185, 0.095, 0.155]}
                onPointerOver={(e) => {
                  gsap.to(project2.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project2.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>

                  window.open("https://chatter-messaging.netlify.app/")
                  
                 
                }
              >
                 <meshStandardMaterial color={"#ebebeb"} emissive={0.1} />
               
                 <Html
                  position={[0, 0.05, 0]}
                  scale={1}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  transform
                  occlude
                  pointerEvents="none"
                >
                  <div
                    className="projects "
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
                          <div className="project-header">Chatter</div>
                          <div className="project-picture"><img src="images/chatterapp.png" /></div>
                          <div className="project-description">
                          Chatter is a dynamic chat app built with React, Node.js, and Tailwind CSS. It offers real-time messaging and an intuitive interface for seamless conversations.
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
                position={[-2.144, 2.08, 0.1]}
                scale={-0.013}
              />

              <mesh
                geometry={nodes.Sphere003.geometry}
                material={materials["Material.018"]}
                position={[-2.354, 2.08, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project3}>
              <mesh
                geometry={nodes.Plane003.geometry}
                position={[-1.913,  1.925, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.185, 0.095, 0.155]}
                onPointerOver={(e) => {
                  gsap.to(project3.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project3.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://surelock-password-app-fcf68c8b901a.herokuapp.com/", "_blank")
                 
                }
                 
              >
                 <meshStandardMaterial color={"#ebebeb"} emissive={0.1} />
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
                          SureLock is a secure password manager built with Django and Python, featuring encryption, easy password generation, and safe sharing for your sensitive data.
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
                position={[-2.015, 2.08, 0.1]}
                scale={-0.013}
              />
              <mesh
                geometry={nodes.Sphere005.geometry}
                material={materials["Material.024"]}
                position={[-1.814, 2.08, 0.1]}
                scale={-0.013}
              />
            </group>

            <group ref={project4}>
              <mesh
                geometry={nodes.Plane004.geometry}
                position={[-2.575, 1.537, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.185, 0.095, 0.155]}
                onPointerOver={(e) => {
                  gsap.to(project4.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project4.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                  window.open("https://ai-api-clone.netlify.app/", "_blank")
                 
                }
                
                 
              >
                 <meshStandardMaterial color={"#ebebeb"} emissive={0.1} />
               
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
                          

                          ChatGPT Clone is a conversational AI app built with React and Node.js, using the ChatGPT API for real-time, personalized responses in a user-friendly interface.
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
                position={[-2.247, 1.537, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.185, 0.095, 0.155]}
                onPointerOver={(e) => {
                  gsap.to(project5.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project5.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>

                  window.open("https://monthly-expense-tracker-2324e228fac8.herokuapp.com/", "_blank")
                  
                }
                  
              >
                 <meshStandardMaterial color={"#ebebeb"}  />
 
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
                          <div className="project-header">Wallet Wise</div>
                          <div className="project-picture">
                            <img src="images/financial-tracker.png" />
                          </div>
                          <div className="project-description">
                          Wallet Wise is a user-friendly expense tracker app built with JavaScript and Node.js, helping users manage, track, and analyze expenses for better financial control.
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
                position={[-2.35, 1.69, 0.1]}
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
                position={[-1.913, 1.537, 0.1]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.185, 0.095, 0.155]}
                onPointerOver={(e) => {
                  gsap.to(project6.current.position, { z: 3.5, duration: 0.3 });
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={(e) => {
                  gsap.to(project6.current.position, { z: 0.1, duration: 0.3 });
                  document.body.style.cursor = "auto";
                }}
                onPointerDown={(e) =>
                window.open("https://chandlercasey13.github.io/snake-clone-project/", "_blank")
                }
              >
                 <meshStandardMaterial color={"#ebebeb"} emissive={0.1} />
                
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
                          <div className="project-header">Worm</div>
                          <div className="project-picture">
                            <img src="images/wormgame.png" />
                          </div>
                          <div className="project-description">
                          Worm is a fun reskin of the classic Snake game, built with JavaScript, CSS, and HTML. Navigate a growing worm to collect food and avoid obstacles.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html>
                
                 {/* <Html
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
                          <div className="project-header">Chatter</div>
                          <div className="project-picture"><img src="images/chatterapp.png" /></div>
                          <div className="project-description">
                          Chatter is a dynamic chat app built with React, Node.js, and Tailwind CSS. It offers real-time messaging and an intuitive interface for seamless conversations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Html> */}
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
