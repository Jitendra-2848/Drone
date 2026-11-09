'use client';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls, useHelper } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { PointLight, PointLightHelper } from 'three';




function MyLight() {
    const lightRef = useRef<PointLight>(null);
    useHelper(lightRef, PointLightHelper, 0.5, 'yellow');

    return <pointLight ref={lightRef} intensity={1} decay={0} position={[3, 1, 4]} />;
}
function Color(){
    return `rgb(${genColor()},${genColor()},${genColor()})`
}
console.log(Color())
function genColor(){
    return (Math.random() * 255);
}
function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas>
                {/* <pointLight intensity={10} position={[3,1,5]} /> */}
                <MyLight />
                <OrbitControls />
                <Box />
            </Canvas>
            hello world
        </div>
    );
}

export default App;   