import React, { useState,  useEffect} from 'react';
import ReactGa from 'react-ga';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import OGs from './components/OGs';
import ION from './components/ION';
import Destination from './components/Destination';
import { Canvas } from "@react-three/fiber";
import {Stars} from "@react-three/drei";
import useWindowDimensions from './components/WindowSize';


var zone;

const Socials = () =>{
  return(
    <div className='social-div'>
      <ul className='social-ul'>
        <div style={{color: 'white', textAlign:'left', fontSize: '1vw'}}>Follow us:</div>
        <div className="social">
          <li><a href="https://instagram.com"><img src="instagram.png"/></a></li>
          <li><a href="https://twitter.com"><img src="twitter.png"/></a></li>
          <li><a href="https://discord.com"><img src="discord.png"/></a></li>
        </div>
        
      </ul>
    </div>
    
  )
}
function App() {
  useEffect(()=>{
    ReactGa.initialize('G-S71Y79P0XF');
    ReactGa.pageview('/');
  },[])
  const { width } = useWindowDimensions();
  var [id, setid] = useState(0)
  const setState = (num) => {
    setid(id = num);
    zone = id;
    console.log("Id: ", id)
  }
  
  return (
    <div className='App' id='canvas-container'>
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='preload' as='style' type='text/css' />
      <meta name="viewport" content="width=device-width"/>
      { width < 501 && (
        <>
          <span style={{color: 'rgba(255,255,255, 1)', alignContent: 'center'}}>Rotate to Landscape.</span>
          <div className='rotate'>
          <img src="rotate_med.gif"/>
          </div>
          
        </>
      )}
      { width > 500 && (
        <>
          <Navbar setState = {setState}/>
          <Socials/>
          <Canvas style={{position: 'fixed', touchAction: 'auto'}}>
            <Stars radius={210}/>
          </Canvas>
          <div className='App-body'>
          
          <section className='section' id='0'>
            <Home/>
          </section>
      
          <section className='section' id='1'>
            <About/>
          </section>
      
          <section className='section' id='2'>
            <OGs/>
          </section>
      
          <section className='section' id='3'>
            <ION/>
          </section>
      
          <section className='section' id='5'>
            <Destination/>
          </section>         
          </div>          
        </>
      ) }     
    </div>   
  )
}

export default App
