import React, { useState } from 'react'
import Component1 from './Component1';
import { counterContext } from './context/Context';
const MainContext = () => {

const [count,setCount] =useState(0);
    return (
    <div>
     MainContext
     <p>{count}</p>
     <button onClick={()=>setCount(count +1)}>click1</button>
     <counterContext.Provider value={{count,setCount}}>
      <Component1/>
      </counterContext.Provider>
    </div>
  )
}

export default MainContext
