import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Features/Counter';

export default function MainRedux() {
    const data = useSelector((state) => {
        return state.counterKey.count
    })
    const dispatch = useDispatch();
    return (
        <>

            <h1>Redux</h1>

            <Button variant='contained' onClick={() => dispatch(increment())} >Increment</Button>

            <h1>counter : {data}</h1>

            <Button variant='contained' onClick={() => dispatch(decrement())} >Decrement</Button>

        </>
    )
}