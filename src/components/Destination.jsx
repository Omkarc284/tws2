import React,{Suspense, useRef} from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls} from "@react-three/drei";
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl'

function Planet() {
    const pref = useRef();
    useFrame(()=> (pref.current.rotation.y += 0.0002))
    const planet = useGLTF('/models/Planet.glb');
    return (
      <mesh ref={pref} position={[0,0,0]} scale={[0.06,0.06,0.06]}>
        <primitive object={planet.scene} dispose={null}/>
      </mesh>
    )
  
}
function Atmosphere () {
    const aref = useRef();
    useFrame(()=> (aref.current.rotation.y += 0.0002))
    var scene = new THREE.Scene();

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(40,200,200),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
      })
    );
    atmosphere.scale.set(1.05,1.05,1.05);
    scene.add(atmosphere);
    
    return (
      <mesh ref={aref} position={[0, 0, 0]} scale={[0.065,0.065,0.065]}>
        <primitive object={scene} dispose={null}/>
      </mesh>
    )
}
const Destination = () => {
    return(
        <div className="Dest" id="4">
            <div style={{position: 'relative', width: '50vw'}}>
                <Canvas>
                    <pointLight position={[100, 100, 100]} intensity={1.3} />
                    <pointLight position={[150, -100, 5]} intensity={1.3} />
                    <Suspense fallback={null}>
                    <OrbitControls enableZoom={false}/>
                    
                        <Planet/>
                    <Atmosphere/>
                    </Suspense>
                    
                </Canvas>
            </div>
            <div className="Dest-info" style={{position: 'relative', width:'40vw', fontSize: '1.5vw'}}>
                <div>
                    <h2 style={{color: 'magenta'}}>Destination awaits!</h2>
                <h2 style={{color: 'magenta'}}>Welcome to the wasted paradise,</h2>
                <h2 style={{color: 'magenta'}}>The Galvan.</h2>
                <div><span style={{color:'red'}}><b>Galvan</b></span>, as on Earth, we call it <b>Kepler-452b</b>, the first approximately Earth-sized planet to be found in a Sun-like star's habitable zone. A potential planet where the E.Ts live as per the data gathered by Earth based on the received transmission from this system.</div>
                </div>
                
            </div>
        </div>
    )
}

export default Destination;