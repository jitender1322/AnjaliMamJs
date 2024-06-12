import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Deshboard() {
    const navigate = useNavigate();
    const [record, setRecord] = useState(null);
    useEffect(() => {
        const render = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchData(user)
            }
        })
    }, [])
    const fetchData = async (user) => {
        if (user) {
            const userData = await getDoc(doc(db, "Student", user.uid));
            setRecord(userData.data());
        }
    }
    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login', { replace: true })
    }
    return (
        <div>
            <h1>Dashboard</h1>
            {record ? <h2>Welcome {record.name}</h2> : <p>Loading...</p>}

            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}
