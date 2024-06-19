import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';

export default function AllPost() {
    useEffect(() => {
        fetchAlluser()
    }, []);
    const [posts, setPosts] = useState(null);
    const fetchAlluser = async () => {
        const querSanpshot = await getDocs(collection(db, "Post"));
        const fetchPost = [];
        querSanpshot.forEach((doc) => {
            fetchPost.push({ 'id': doc.id, ...doc.data() });
            setPosts(fetchPost);
        })
    }
    return (
        <div>
            <h1>AllPost</h1>
            {
                posts ? posts.map((e, i) => {
                    return <div key={i}>
                        <h2>{e.title}</h2>
                        <h2>{e.description}</h2>
                    </div>
                }) : <p>loading</p>
            }
        </div>
    )
}
