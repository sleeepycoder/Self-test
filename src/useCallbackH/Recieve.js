import React,{memo} from 'react'

const Recieve = ({message,getName}) => {
    console.log("Receiver Call");
  return (
    <div><p> I Am :{message} </p>
    <button onClick={()=>getName()}>RClick</button>
    </div>
  )
}

export default memo(Recieve)