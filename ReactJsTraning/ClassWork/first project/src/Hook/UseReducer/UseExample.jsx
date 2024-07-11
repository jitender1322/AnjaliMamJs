import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'Inc1':
            return state + 1;
        case 'Inc10':
            return state + 10;
        case 'Inc100':
            return state + 100;
        default:
            return state;
    }
}
export default function UseExample() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            {count}
            <button onClick={() => dispatch('Inc1')} >Add+1</button>
            <button onClick={() => dispatch('Inc10')} >Add+10</button>
            <button onClick={() => dispatch('Inc100')} >Add+100</button>
        </div>
    )
}
