import React, { useContext } from 'react'
import Button from './Button'
import { counterContext } from './context/Context'

const Component2 = () => {
    const value = useContext(counterContext)
  return (
    <div>Component2
<Button/>
{value.count}
    </div>
  )
}

export default Component2