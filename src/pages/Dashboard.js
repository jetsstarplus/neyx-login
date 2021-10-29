import React from 'react'
import SaleItem from '../components/SaleItem';
import { Link } from 'react-router-dom';

import Layout from "../layout";

import products from '../data/products.json';


const Dashboard = () => {
    console.log(products)
    return (
        <Layout>        
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
                        <Link to="/" className="category-link"><img src="/images/man.webp" className="items" width="100%" alt="this"/></Link>                            
                    </div>
                    <div className='category-link'>
                        <Link to='/' className="category-women-link category-text-link">Shop Women </Link>
                        <Link to="/" className="category-link"><img src="/images/woman.webp" className="items" width="100%" alt="this"/></Link>                            
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
                    {products.map(product =>{
                        console.log(product)
                        return(
                            <SaleItem key={product.id} id={product.id} slug={product.slug} image={product.images[0]} price = {product.price} name={product.name}/>
                        )
                    })}
                </div>
                <div class="shop-more-items">
                    <Link class="link">Shop All Items</Link>
                </div>
            </div>
        </section>
        </Layout>
           
    )
}

export default Dashboard
