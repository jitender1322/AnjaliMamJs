import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec_by_user, decrement, inc_by_user, increment, updateUsername } from './Features/Counter';

export default function MainRedux() {
    const [name, setName] = useState('');
    const data = useSelector((state) => {
        return state.counterKey.count
    })
    const scoreData = useSelector((state) => {
        return state.scorekey.score
    })
    const nameData = useSelector((state) => {
        return state.counterKey.username
    })
    const btnHandler = () => {
        dispatch(updateUsername(name));
        setName('')
    }
    const dispatch = useDispatch();
    return (
        <>

            <h1>Redux</h1>

            <Button variant='contained' onClick={() => dispatch(increment())} >Increment</Button>

            <h1>counter : {data}</h1>
            <h1>score : {scoreData}</h1>
            <h1>name : {nameData}</h1>
            <Button variant='contained' onClick={() => dispatch(decrement())} >Decrement</Button>
            <Button variant='contained' onClick={() => dispatch(inc_by_user(100))} >increment by user</Button>
            <Button variant='contained' onClick={() => dispatch(dec_by_user(100))} >decrement by user</Button>
            <TextField onChange={(e) => setName(e.target.value)} value={name} ></TextField>
            <Button variant='contained' onClick={btnHandler}>save</Button>
        </>
    )
}