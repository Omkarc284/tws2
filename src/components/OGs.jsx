import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls} from "@react-three/drei";

const Spaceman = () => {
    const scene = useGLTF("/models/astro.glb");
    return (
      <mesh scale={[0.03,0.03,0.03]} position={[-0.4,-2.7,0]} rotation={[0, Math.PI/6,-0.2]}>
        <primitive object={scene.scene} dispose ={null} />
      </mesh>
      
    )
  }
const OGs = () => {
    return(
        <div className="OGs" id="2">
            
            <div className="OGs-info" style={{position: 'relative', left: '0px', width: '40vw', fontSize: '1.5vw' }}>
                <h2 style={{color: 'magenta'}}>Here's something about the OGs!</h2>
                <div>
                    The <span style={{color: 'red'}}><b>WASTED STAMPS</b></span> NFT holders will be the OGs of <span style={{color:"red"}}><b>THE WASTED CLUB</b></span>, an upcoming E.T. race NFTs in the Metaverse. The OGs are the front runners in making the first ever contact with E.T. race and their tech.
                    The OG | <span style={{color:"red"}}><b>THE WASTED CLUB</b></span> is unique, limited and worthy as the role helps you to be the in the community and make ample amount of assets and cash just as any other OG does but better. This role is permanent till the end.
                    The OGs will get rewarded as the ION reaches its Destination!
                    
                </div>

                <h3 style={{position: 'relative', color:'red', top: '15px'}}>Become an OG now!</h3>
                <div>Join our Discord Community and follow us for updates <a style={{position: 'relative', top: '15px', left:'10px'}} href="https://discord.com"><img style={{width: "48px", height: '48px'}} src="discord.png"/></a></div>
                
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