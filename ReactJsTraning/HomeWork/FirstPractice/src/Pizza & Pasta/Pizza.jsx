import React, { useState } from 'react'
import "./style.css"
export default function Pizza() {
    const [pizzaCount, setPizzaCount] = useState(0);
    const [pastaCount, setPastaCount] = useState(0);

    const [name, setName] = useState("");
    const [pop, setPop] = useState('');

    const handleOrder = () => {
        if (name == "") {
            alert("Please enter your name in required field")
        } else {
            setPop('pop')
        }

    }
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h1>PIZZERIA</h1>
                    <p>The Town Of Pizza & Pasta</p>
                </div>
                <div className="username">
                    <input type="text" placeholder='Please Enter Your Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="main">
                    <div className="menu">
                        <h2>Our Menu</h2>
                        <div className="cards">
                            <div href="" className="card">
                                <img src="https://i.pinimg.com/564x/7a/1a/78/7a1a782509aed5068b20407a72d27199.jpg" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">Large Margreta Pizza</h3>
                                        </div>
                                    </div>
                                    <div className="card__description">
                                        <button onClick={() => setPizzaCount(pizzaCount - 1)}> - </button>
                                        <p>{pizzaCount}</p>
                                        <button onClick={() => setPizzaCount(pizzaCount + 1)} > + </button>
                                    </div>
                                </div>
                            </div>
                            <div href="" className="card">
                                <img src="https://i.pinimg.com/564x/1e/68/91/1e6891d050af81a19ebe86064914a3fe.jpg" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">Large Red Sauce Pasta</h3>
                                        </div>
                                    </div>
                                    <div className="card__description">
                                        <button onClick={() => setPastaCount(pastaCount - 1)}> - </button>
                                        <p>{pastaCount}</p>
                                        <button onClick={() => setPastaCount(pastaCount + 1)} > + </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer">
                        <h2>Offer Zone</h2>
                        <div className="cards">
                            <div href="" className="card">
                                <img src="https://i.pinimg.com/474x/8c/b0/20/8cb020babaeb7586ac0f70c89dae9b06.jpg" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">Order 4+ Pizzas</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Get a 1.5 Ltr Coke</p>
                                </div>
                            </div>
                            <div href="" className="card">
                                <img src="https://i.pinimg.com/474x/bf/eb/1e/bfeb1ecbb83e253daf3a935be173b746.jpg" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">Order 4+ Pastas</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Get 1 Bruschetta</p>
                                </div>
                            </div>
                            <div href="" className="card">
                                <img src="https://i.pinimg.com/474x/fb/94/bd/fb94bdece8b53d54347ed53da6ddd8fc.jpg" className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <div className="card__header-text">
                                            <h3 className="card__title">Order 4+ Pizzas & Pastas</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Get 2 Choco Brownie Ice Creams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleOrder} popovertarget="pop" className='orderBtn' >Order Now</button>
                <div id={pop} popover="manual">
                    <h2>{name}</h2>
                    <h4>Please Confirm Your Order</h4>
                    <h4>Pizza : {pizzaCount}</h4>
                    <h4>Pasta : {pastaCount}</h4>
                    <h4>Price of Pizza : {pizzaCount * 10.99} AUD </h4>
                    <h4>Price of Pasta : {pastaCount * 9.5} AUD</h4>
                    <h4>Total Bill : {(pizzaCount * 10.99) + (pastaCount * 9.5)} </h4>
                    {pizzaCount >= 4 && (<p>"You unlocked free coldrink"</p>)}
                    {pastaCount >= 4 && (<p>"You unlocked free Bruschetta"</p>)}
                    {pizzaCount >= 4 && pastaCount >= 4 && (<p>"You unlocked 2 free Brownie IceCreams"</p>)}
                    <button>Confirm order</button>
                    <button popovertarget="pop" popovertargetaction="hide">Cancel</button>
                </div>
            </div>
        </div>
    )
}
