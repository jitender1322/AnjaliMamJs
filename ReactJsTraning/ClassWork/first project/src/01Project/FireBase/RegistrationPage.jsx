import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';

export default function RegistrationPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}
