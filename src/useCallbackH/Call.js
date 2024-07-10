import React, { useState ,useCallback} from 'react'
import Recieve from './Recieve'

const Call = () => {

const [count,setCount] =useState(0)

// const getName =()=>{
//     return "another"
// }

const getName =useCallback(() => {
    return  "Another"
  },[])



  return (
    <div>
<Recieve message={"Good"} getName={getName} />
<p>{count}</p>
<button onClick={()=>setCount(count +1)}>Click</button>
    </div>
  )
}

export default Call