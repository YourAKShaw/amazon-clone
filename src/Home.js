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
                    id = "1"
                    title = 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                    price = {615}
                    image = 'images/the-lean-startup.jpg'
                    rating = {5}
                />
                
                <Product 
                    id = "2"
                    title = 'ASGARD Day & Date Feature Watch for Men, Boys-158-DD1'
                    price = {375}
                    image = 'images/ASGARD-watch.jpg'
                    rating = {3}
                />
                
                
            </div>

            <div className = "home__row">

                <Product 
                    id = "3"
                    title = 'The Rudest Book Ever'
                    price = {249}
                    image = 'images/the-rudest-book-ever.jpg'
                    rating = {5}
                />    

                <Product 
                    id = "4"
                    title = 'OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4085mAH Battery)'
                    price = {47999}
                    image = 'images/oneplus-phone.jpg'
                    rating = {4}
                />

                <Product 
                    id = "5"
                    title = 'JBL Club One Wireless Over-Ear True Adaptive Noise Cancelling Headphones with 40 mm Hi-Res Orange Graphene Drivers and JBL Pro Quality Sound,45 Hours Playtime, Dual mic, Ambient Aware & Talkthru'
                    price = {21999}
                    image = 'images/jbl-headphone.jpg'
                    rating = {5}
                />
            </div>

            <div className = "home__row">
                <Product 
                    id = "6"
                    title = 'LG 23.8 inch (60.45 cm) Borderless LED Monitor - Full HD, IPS Panel with VGA, HDMI, Audio in/Out Ports and in-Built Speakers - 24MP88HV (Silver/White)'
                    price = {15105}
                    image = 'images/lg-tv.jpg'
                    rating = {4}
                />
            </div>
        </div>
    )
}

export default Home
