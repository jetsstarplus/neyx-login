import React from 'react'
import '../styles/dashboard.css';

import { Link } from 'react-router-dom';
import SaleItem from '../components/SaleItem';

const Dashboard = () => {
    return (
        <>
        <div>
            <div className="menu">
                <div className="container2">
                    <div className='menu-item'>
                        <div className="search-container menu-flex-item">
                            <span className="search-icon">
                                <i className="fas fa-search"></i>
                            </span>
                            <input type="text" placeholder='Search...' className="search-input"/>
                        </div>
                        <div className="offer menu-flex-item">
                            Sign up for our newsletter here & get 10% off
                        </div>
                        <div className="profile menu-flex-item">
                            <Link to='/login' className="profile-user">
                                <i className="fas fa-user"></i>
                                <span className="login-text-link">Log In</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fluid-area">
                <section className="category">
                    <div className="container2">
                        <div className="title">
                            <h1>EQUALS</h1>
                        </div>
                        <div className="category-image">
                            <div className='category-link'>
                                <Link to='/' className="category-men-link category-text-link">Shop Men </Link>
                                <Link to="/" className="category-link"><img src="/house.jpg" className="items" width="100%" alt="this"/></Link>                            
                            </div>
                            <div className='category-link'>
                                <Link to='/' className="category-women-link category-text-link">Shop Women </Link>
                                <Link to="/" className="category-link"><img src="/house.jpg" className="items" width="100%" alt="this"/></Link>                            
                            </div>
                        </div>
                    </div>
                </section>

                <section className="most-wanted">
                    <div className="container2">
                        <div className="title">
                            <h2>Most Wanted Items</h2>
                        </div>
                        <div className="sale-items">
                            <SaleItem image='/house.jpg' altText="alt text" offer={"$" + "20.30"} original={"$" + '30.50'} product={"I'm a product"}/>
                            <SaleItem image='/house.jpg' altText="alt text" offer={"$" + "20.30"}  product={"I'm a product"}/>
                            <SaleItem image='/house.jpg' altText="alt text" offer={"$" + "20.30"} original={"$" + '30.50'} product={"I'm a product"}/>
                            <SaleItem image='/house.jpg' altText="alt text" offer={"$" + "20.30"} product={"I'm a product"}/>
                            <SaleItem image='/house.jpg' altText="alt text" offer={"$" + "20.30"} original={"$" + '30.50'} product={"I'm a product"}/>
                            <SaleItem image='/house.jpg' altText="alt text" offer={"$" + "20.30"} original={"$" + '30.50'} product={"I'm a product"}/>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Dashboard
