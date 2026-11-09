
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'
import type { Mesh } from 'three';

const Box: React.FC = () => {
    const rotate = useRef<Mesh | null>(null);
    const [color, setColor] = useState<string>("red");
    function Color() {
        setColor(`rgb(${genColor()},${genColor()},${genColor()})`);
    }
    function genColor() {
        return Math.floor(Math.random() * 256);
    }

    useFrame((x,y)=>{
        if(!rotate.current) return;
        rotate.current.rotation.y += y;
        rotate.current.rotation.x += y;
    })
    return (
        <>
            <mesh onClick={Color} ref={rotate}>
                <boxGeometry />
                {/* <meshBasicMaterial color={'red'}   /> */}
                <meshStandardMaterial metalness={0.1} color={color} roughness={0.2} />
            </mesh>
        </>
    )
}

export default Box;