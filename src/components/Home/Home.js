import React from 'react';
import { homeBannerImage } from './imageUrl';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-content">
                <p className='sale-offer-text'>Sale up to 70% off</p>
                <div className='home-content-heading'>
                    <h2>New Collection For Fall</h2>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                </div>
                <Link to='/shop' className='shop-now'>shop now</Link>
            </div>
            <div className="home-banner">
                <img src={homeBannerImage} alt="something wrong" />
            </div>
        </div>
    );
};

export default Home;