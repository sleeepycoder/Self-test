import React, { useMemo, useState } from 'react'




const nums = new Array(10000000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 500000,
    }
});

const Memo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(nums)


     const magical = useMemo(() => number.find(item => item.isMagical === true), [number])

    return (
        <>
            {magical.index}
            <p>{count}</p>
            <button  onClick={()=>setCount(count +1)}>Click</button>
        </>
    )
}

export default Memo