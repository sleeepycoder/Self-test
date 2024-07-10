import React, { useEffect, useState } from 'react'

const ProgressBar = () => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {

        const Interval = setInterval(() => {
            setProgress(prev=>(prev >=100 ? 0 : prev + 10))
    
           
        },1000)
        return () => clearInterval(Interval)

    }, [])

    return (
        <div style={{ width: '100%', height: '30px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'gray' }}>

            <div style={{ width: `${progress}%`, height: '100%', textAlign: 'center',backgroundColor:'green', color: 'white', borderRadius: '5px' }}>

            </div>
            {progress}%
        </div>
    )
}

export default ProgressBar