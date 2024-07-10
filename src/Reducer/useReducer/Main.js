import React, { act, useState } from 'react'
import { useReducer } from 'react'
import Todo from './Todo'


export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
case ACTIONS.TOGGLE_TODO:
    return todos.map((todo) =>{
     if(todos.id===action.payload.id){
            return {...todos, completed: !todo.completed}
        }
        return todo
    })
case ACTIONS.DELETE_TODO:
return todos.filter(item=>item.id !==action.payload.id)

      default:
        return todos;
    }
};


function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
};


const Main = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')




    function handleSubmit  (e)  {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }


    console.log(todos);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
                {Array.isArray(todos) && todos?.map(todo=>{
    return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
})}
            </form>
        </>



    )
}

export default Main