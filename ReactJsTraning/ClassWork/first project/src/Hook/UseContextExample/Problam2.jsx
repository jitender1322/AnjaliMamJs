import React from 'react'
import Problam3 from './Problam3'

export default function Problam2(props) {
    return (
        <div>
            <h1>Second Componet</h1>
            <Problam3 msg={props.msg} />
        </div>
    )
}
