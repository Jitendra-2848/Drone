
import React, { useState } from 'react'

const Box: React.FC = () => {

    const [color, setColor] = useState<string>("red");
    function Color() {
        setColor(`rgb(${genColor()},${genColor()},${genColor()})`);
    }
    function genColor() {
        return Math.floor(Math.random() * 256);
    }
    return (
        <>
            <mesh onClick={Color}>
                <boxGeometry />
                {/* <meshBasicMaterial color={'red'}   /> */}
                <meshStandardMaterial metalness={0.1} color={color} roughness={0.2} />
            </mesh>
        </>
    )
}

export default Box;