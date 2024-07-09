import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Features/ApiProducts';

export default function ProductComponent() {
    let dispatch = useDispatch();
    useEffect(() => { dispatch(fetchData()) }, [])
    let { products, pending, error } = useSelector((state) => {
        return state.productkey
    })
    if (pending) return <h1>Loading</h1>
    if (error.length > 0) return <h1>Something went wrong</h1>
    return (
        <div>
            <h1>ProductComponent</h1>
            {products.map((e, i) => {
                return <h3 key={i}>{e.title}</h3>
            })}
        </div>
    )
}
