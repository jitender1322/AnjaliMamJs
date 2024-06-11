import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
            <button onClick={() => navigate('/')} >Register?</button>
        </div>
    )
}
