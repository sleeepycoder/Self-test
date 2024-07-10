import React, { useContext } from 'react'
import { counterContext } from './context/Context'

const Button = () => {
const value =useContext(counterContext);

  return (
    <div>
      <button onClick={()=>value.setCount((count)=>count+1)}>Click Me</button>

    </div>
  )
}

export default Button
