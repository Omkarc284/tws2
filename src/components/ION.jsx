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
            <div style={{ position: 'relative', width: '50vw'}}>
                <Canvas>
                    <Suspense fallback={null}>
                    
                    <pointLight position={[100, 100, 100]} intensity={1.3}/>
                    <pointLight position={[150, -100, 5]} intensity={1.3}/>
                        <Ion/>
                    </Suspense>
                    
                </Canvas>
            </div>
            <div className="ION-info" style={{position: 'relative',  width: '40vw', fontSize:'1.5vw'}}>
                <h2 style={{fontSize: '2.5vw'}}>Aboard<span style={{color: 'magenta'}}> The ION</span></h2>
                <div style={{position: 'relative',top: '20px', fontSize:'1.2vw'}}>A voyager spacecraft awaiting to launch with the <span style={{color: 'red'}}>OGs</span> and reach the destination. </div>
                <div style={{position: 'relative',top:'20px', fontSize:'1.2vw'}}>ION will launch after the mint sale is complete.</div>
            </div>
            
        </div>
    )
}

export default ION;