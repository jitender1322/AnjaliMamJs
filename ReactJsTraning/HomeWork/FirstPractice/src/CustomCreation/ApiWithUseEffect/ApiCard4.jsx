import React, { useEffect, useState } from "react";
import "./Api4.css";

export default function ApiCard4() {
  const [data, setData] = useState(null);

  useEffect(() => {
    handleApi();
  }, []);

  const handleApi = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    setData(result);
  };

  return (
    <div className="container">
      {data ? (
        data.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={item.image} class="card-image" />
              <div class="card-content">
                <h2 class="card-title">{item.title}</h2>
                <p class="card-price">{item.price}</p>
                <p class="card-description">{item.description}</p>
                <p class="card-category">{item.category}</p>
                <div class="card-rating">
                  <span class="card-rate">{item.rating.rate}</span>
                  <span class="card-count">({item.rating.count})</span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
