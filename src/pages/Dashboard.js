import React from 'react'
import '../styles/dashboard.css';

import { Link } from 'react-router-dom';
import SaleItem from '../components/SaleItem';

const Dashboard = () => {
    return (
        <>
        <div>
            <div class="icon-container menu-icon">
                <i className="fa fa-bars"></i>
            </div>
            <div class="icon-container cart-icon">
                <div class="cart-icon-contents">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="count">0</span>
                </div>
            </div>
                    
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
                                <i className="fas fa-user-circle"></i>
                                <span className="login-text-link">Log In</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fluid-area">
                <header className="category">
                    <div className="container2">
                        <div className="title">
                            <h1>EQUALS</h1>
                        </div>
                        <div className = "document-description">
                            <div className="document-description-title">
                                <h3>This is a demo site to showcase</h3>
                                <div className="logo">Ney<span>X</span></div>
                            </div>
                            <p>You cannot buy any products from here, Get the feel of bargaining in online platform, with NeyX</p>
                        </div>
                        <div className="category-image">
                            <div className='category-link'>
                                <Link to='/' className="category-men-link category-text-link">Shop Men </Link>
                                <Link to="/" className="category-link"><img src="/man.webp" className="items" width="100%" alt="this"/></Link>                            
                            </div>
                            <div className='category-link'>
                                <Link to='/' className="category-women-link category-text-link">Shop Women </Link>
                                <Link to="/" className="category-link"><img src="/woman.webp" className="items" width="100%" alt="this"/></Link>                            
                            </div>
                        </div>
                    </div>
                </header>

                <section className="most-wanted">
                    <div className="container2">
                        <div className="title">
                            <h2>Most Wanted Items</h2>
                        </div>
                        <div className="sale-items">
                            <SaleItem image='/tshirt1.webp' altText="alt text" offer={"$20.30"}  product={"product"}/>
                            <SaleItem image='/shirt1.webp' altText="alt text" offer={"$20.30"}  product={"product"}/>
                            <SaleItem image='/jumper.webp' altText="alt text" offer={"$20.30"}  product={"product"}/>
                            <SaleItem image='/socks.webp' altText="alt text" offer={"$20.30"}  product={"product"}/>
                            <SaleItem image='/phone.webp' altText="alt text" offer={"$20.30"}  product={"product"}/>
                            <SaleItem image='/dress.webp' altText="alt text" offer={"$20.30"}  product={"product"}/>

                        </div>
                        <div class="shop-more-items">
                            <Link class="link">Shop All Items</Link>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container3 footer-content">
                        <div className="footer-links">
                            <ul>
                                <li><Link to='/' className="link">Men</Link></li>
                                <li><Link to='/' className="link">Women</Link></li>
                                <li><Link to='/' className="link">Accessories</Link></li>
                                <li><Link to='/' className="link">About</Link></li>
                                <li><Link to='/' className="link">Contact</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='/' className="link">Shipping and Returns</Link></li>
                                <li><Link to='/' className="link">Store Policy</Link></li>
                                <li><Link to='/' className="link">Payment</Link></li>
                                <li><Link to='/' className="link">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="mailing-form">
                            <form>
                                <input placeholder="Enter email here to subscribe" />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </>
    )
}

export default Dashboard
