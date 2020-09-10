import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = 'home'>
            <div className = 'home__container'>

                <img className = 'home__image' src = 'images/amazon-home-page.jpg' />

            </div>

            <div className = "home__row">
                <Product 
                    title = 'The Lean Startup'
                    price = {29.99}
                    image = 'images/the-lean-startup.jpg'
                    rating = {5}
                />
                <Product />
                
            </div>

            <div className = "home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className = "home__row">
                <Product />
            </div>
        </div>
    )
}

export default Home
