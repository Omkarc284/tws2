import React,{Suspense} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls} from "@react-three/drei";

function Stamp () {
  const scene = useGLTF("/models/Stamp_1.glb");
  return (
    
            <mesh scale={[0.15,0.15,0.15]} rotation={[-0.2,-Math.PI/3,0]}>
                <primitive object={scene.scene} dispose ={null} />
            </mesh>
        
  )
}
const About = () => {
    return(
        <div className="about" id="1">
            <div style={{position: 'relative', width: '50vw'}}>
                <Canvas>
                    <Suspense fallback={null}>
                    <OrbitControls enableZoom={false}/>
                    <pointLight position={[100, 100, 100]} intensity={1.3} />
                    <pointLight position={[150, -100, 5]} intensity={1.3} />
                        <Stamp/>
                    </Suspense>
                    
                </Canvas>
            </div>
            
            <div className="about-info" style={{position: 'relative', width: '40vw', fontSize: '1.5vw'}}>
                <h2 style={{color: 'magenta'}}>About WASTED STAMPS NFT</h2>
                <div><span style={{color: 'red'}}><b>WASTED STAMPS</b></span> is a series of <span style={{color: 'red'}}>257</span> unique collectible stamps. Stamps are miniature gateways to the world. They represent the history of the world and what we have been through. These 257 stamps are sent into the deep space to contact the unknown races and tell a tale about Earthlings and their history as a collectible.</div>
            </div>
            
        </div>
        
    )
}
export default About;