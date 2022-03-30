import React, {Suspense, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls} from "@react-three/drei";

const Spaceman = () => {
    const scene = useGLTF("/models/astro.glb");
    const iref = useRef();
  useFrame(()=> (iref.current.rotation.y += 0.0006))
    return (
      <mesh ref={iref} scale={[0.03,0.03,0.03]} position={[-0.4,-2.7,0]} rotation={[0, -Math.PI/6,-0.2]}>
        <primitive object={scene.scene} dispose ={null} />
      </mesh>
      
    )
  }
const OGs = () => {
    return(
        <div className="OGs" id="2">
            
            <div className="OGs-info" style={{position: 'relative', left: '0px', width: '40vw', fontSize: '1.5vw' }}>
                <h2>The<span style={{color: 'magenta', fontSize:'2.5vw'}}> OGs!</span></h2>
                <div style={{position: 'relative', top: '20px', fontSize: '1.2vw'}}>
                    The <span style={{color: 'red'}}><b>WASTED STAMPS</b></span> NFT holders will be the OGs of <span style={{color:"red"}}><b>THE WASTED G</b></span>, a NFT series of intergalactic races in the Metaverse. The OGs are the first from earth to make contact with E.T. race and their tech.<br/>
                    The Gs love to collect, party, make M's and get wasted.<br/>
                    The OGs will get rewarded as the <span style={{color: 'red'}}>ION</span> reaches its Destination!
                    
                </div>

                <h3 style={{position: 'relative', color:'red', top: '40px'}}>Become an OG now!</h3>
                <div><br/>Join our Discord Community to get listed! <a style={{position: 'relative', top: '15px', left:'10px'}} href="https://discord.com"><img style={{width: "48px", height: '48px'}} src="discord.png"/></a></div>
                
            </div>
            <div className="canva" style={{position: 'relative', width: '50vw'}}>
                <Canvas>
                    <Suspense fallback={null}>
                    <OrbitControls enableZoom={false}/>
                    <pointLight position={[100, 100, 100]} intensity={1.3} />
                    <pointLight position={[150, -100, 5]} intensity={1.3} />
                        <Spaceman/>
                    </Suspense>
                    
                </Canvas>
            </div>
            
        </div>
    )
}

export default OGs;