import React from 'react'
import "./style.css"
export default function Pizza() {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h1>PIZZERIA</h1>
                    <p>The Town Of Pizza & Pasta</p>
                </div>
                <div className="main">
                    <div className="menu">
                        <h2>Our Menu</h2>
                        <div class="cards">
                            <div href="" class="card">
                                <img src="https://i.pinimg.com/564x/7a/1a/78/7a1a782509aed5068b20407a72d27199.jpg" class="card__image" alt="" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                        <div class="card__header-text">
                                            <h3 class="card__title">Large Margreta Pizza</h3>
                                        </div>
                                    </div>
                                    <p class="card__description">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <div href="" class="card">
                                <img src="https://i.pinimg.com/564x/1e/68/91/1e6891d050af81a19ebe86064914a3fe.jpg" class="card__image" alt="" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                        <div class="card__header-text">
                                            <h3 class="card__title">Large Red Sauce Pasta</h3>
                                        </div>
                                    </div>
                                    <p class="card__description">Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer">
                        <h2>Offer Zone</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
