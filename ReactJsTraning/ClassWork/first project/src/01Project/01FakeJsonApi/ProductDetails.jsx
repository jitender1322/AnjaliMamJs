import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
    const { id } = useParams();
    const [card, setCard] = useState([]);
    useEffect(() => {
        handleApi();
    }, []);

    const handleApi = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setCard([response.data]);
    };

    return (
        <div className='main'>
            <h1>ProductDetails</h1>
            <div className='singleCard'>
                {card ? (
                    card.map((item, index) => {
                        return (
                            <div key={index} className="card">d
                                <img src={item.image} className="card-image" />
                                <div className="card-content">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-price">{item.price} $</p>
                                    <p class="card-description">{item.description}</p>
                                    <p className="card-category">{item.category}</p>
                                    <div className="card-rating">
                                        <span className="card-rate">{item.rating.rate}</span>
                                        <span className="card-count">({item.rating.count})</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading</p>
                )}
            </div>
        </div>
    )
}
