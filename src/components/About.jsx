import React,{Suspense, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls} from "@react-three/drei";

function Stamp () {
  const scene = useGLTF("/models/Stamp_1.glb");
  const iref = useRef();
  useFrame(()=> (iref.current.rotation.y += 0.0009))
  return (
    
            <mesh ref={iref} scale={[0.15,0.15,0.15]} rotation={[-0.2,-2*Math.PI/3,0]}>
                <primitive object={scene.scene} dispose ={null} />
            </mesh>
        
  )
}

const About = () => {
    
    return(
        <div className="about" id="1">
            <div className="canva" style={{position: 'relative', width: '50vw'}}>
                <Canvas>
                    <Suspense fallback={null}>
                    <OrbitControls enableZoom={false}/>
                    <pointLight position={[100, 100, 100]} intensity={1.3} />
                    <pointLight position={[150, -100, 5]} intensity={1.3} />
                    <pointLight position={[-100, 100, -100]} intensity={1.3} />
                    <pointLight position={[-150, -100, -100]} intensity={1.3} />
                    <pointLight position={[100, -100, -100]} intensity={1.3} />
                    <pointLight position={[-150, -100, 100]} intensity={1.3} />
                        <Stamp/>
                    </Suspense>
                    
                </Canvas>
            </div>
            
            <div className="about-info" style={{position: 'relative', width: '40vw'}}>
                <h2 style={{fontSize: '2.5vw'}}><span style={{color: 'magenta'}}>WASTED STAMP</span> NFTs</h2>
                <div style={{position: 'relative', top:'20px', fontSize: '1.2vw'}}><span style={{color: 'red'}}><b>WASTED STAMPS</b></span> is a series of <span style={{color: 'red'}}>257</span> unique collectible stamps. <br/>They represent the history of the world and what we have been through. These 257 stamps are sent into the deep space to contact the unknown races and tell a tale about Earthlings and their history as a collectible.<br/></div><br/>
                <div style={{position: 'relative', top:'20px',fontSize: '1.5vw'}}>Wasted stamp NFT doubles as a ticket to <span style={{color: 'red'}}>earn</span> and avail <span style={{color: 'red'}}>crazy benefits</span> through the journey.<br/></div>
            </div>
            
        </div>
        
    )
}
export default About;