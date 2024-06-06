import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Product.css"
import { useNavigate } from 'react-router-dom';
export default function ProductDisplay() {

    const navigate = useNavigate();
    const [productData, setProductData] = useState([]);
    const [category, setCategory] = useState('');
    useEffect(() => {
        handleApi();
    }, []);

    useEffect(() => {
        cat();
    }, [category]);

    const handleApi = async () => {
        let response = await axios.get('https://fakestoreapi.com/products')
        setProductData(response.data)
    };

    const cat = async () => {
        let response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProductData(response.data)
    }

    return (
        <div className='main'>
            <h1>Your Shop</h1>
            <div className="btns">
                <select onChange={(e) => setCategory(e.target.value)} >
                    <option hidden>Category</option>
                    <option>electronics</option>
                    <option>jewelery</option>
                    <option>men's clothing</option>
                    <option>women's clothing</option>
                </select>
                <select>
                    <option hidden>Sort Products</option>
                    <option>New to Old</option>
                    <option>Old to New</option>
                </select>
            </div>
            <div className="container">

                {productData ? (
                    productData.map((item, index) => {
                        return (
                            <div key={index} onClick={() => navigate(`/product/${item.id}`)} className="card">
                                <img src={item.image} className="card-image" />
                                <div className="card-content">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-price">{item.price}$</p>
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
    );
}
