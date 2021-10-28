import React from 'react'

import '../styles/dashboard.css';

import { Link } from 'react-router-dom';


const Layout = ({children}) => {
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

            {/* The pages go here */}
            {children}
            {/* The pages go here */}

            
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
        </>
    )
}

export default Layout
