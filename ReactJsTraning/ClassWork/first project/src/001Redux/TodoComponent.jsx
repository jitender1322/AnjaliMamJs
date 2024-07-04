/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './Features/todo';

export default function TodoComponent() {
    const [todo, setTodo] = useState();
    let dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addTodo(todo))
        setTodo("");
    }

    let data = useSelector((state) => {
        return state.todokey.todo;
    })

    const deleteHandler = (index) => {
        dispatch(deleteTodo(index));
    }
    return (
        <div>
            <input type='text'
                placeholder='Enter task'
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />

            <button onClick={handleSave}>Save Task</button>

            {data.map((value, index) => {
                return <div key={index}>
                    <h1 >{value}</h1>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
            })}
        </div>
    )
}
