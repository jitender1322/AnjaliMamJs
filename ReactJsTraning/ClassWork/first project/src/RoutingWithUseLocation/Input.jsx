import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Input() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const handlebtn = () => {
        navigate("/output", { state: { name } })
    }
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={handlebtn}>add</button>
        </div>
    )
}
