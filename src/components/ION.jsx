import React,{Suspense, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls} from "@react-three/drei";

const Ion = () => {
    const scene = useGLTF("/models/Spaceship.glb");
    const iref = useRef();
    useFrame(()=> (iref.current.rotation.x += 0.0004))
    return (
      <mesh ref={iref} scale={[0.04,0.04,0.04]} rotation={[0, Math.PI,0.6]} position={[1,0,0]}>
        <primitive object={scene.scene} dispose ={null} />
      </mesh>
      
    )
  }
const ION = () => {
    return(
        <div className="ION" id="3">
            <div style={{zIndex:25, position: 'relative', width: '50vw'}}>
                <Canvas>
                    <Suspense fallback={null}>
                    
                    <pointLight position={[100, 100, 100]} intensity={1.3}/>
                    <pointLight position={[150, -100, 5]} intensity={1.3}/>
                        <Ion/>
                    </Suspense>
                    
                </Canvas>
            </div>
            <div className="ION-info" style={{zIndex: 30,position: 'relative',  width: '40vw', fontSize: '1.5vw'}}>
                <h2 style={{color: 'magenta'}}>Aboard the ION!</h2>
                <div>A voyager spacecraft set out to explore the unknown universe with <span style={{color: 'red'}}>257</span> NFT holders awaiting to make the first contact with the E.T. races.</div>
                <h3 style={{color:'red'}}>WARNING : </h3>
                <div>Only the <span style={{color: 'red'}}><b>WASTED STAMPS</b></span> holders can aboard the <span style={{color: 'red'}}><b>ION</b></span>!</div>
            </div>
            
        </div>
    )
}

export default ION;