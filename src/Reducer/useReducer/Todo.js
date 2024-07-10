import React from 'react'
import { ACTIONS } from './Main'

const Todo = ({dispatch,todo}) => {
  return (
    <div>
     <p style={{color  :todo.name.complete ?  'green' : 'red'}}>{todo.name}</p>

      <button onClick={dispatch({id:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>Toggle</button>
<button onClick={dispatch({id:ACTIONS.DELETE_TODO,payload:{id:todo.id}})} >Delete</button>

    </div>
  )
}

export default Todo
