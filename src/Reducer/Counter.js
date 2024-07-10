import React, { useReducer } from 'react'


const reducer = (action, state) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state;
    }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })



    return (
        <div>
            <p>{state.count}</p>
            <button onClick={dispatch({ type: 'increment' })}>Increase</button>
            <button onClick={dispatch({ type: 'decrement' })}>Decrease</button>

        </div>


    )
}


export default Counter
