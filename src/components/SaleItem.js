import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/saleItems.css';

const SaleItem = ({id, slug, image, name, original, price}) => {
    return (
        <div className='sales-item'>
            <div className="sales-item-image">
                <img src={image} alt={name}/>
            </div> 
            <div className="sales-item-description">
                <div>
                    <p>{name}</p>
                    <p><span className="original">{original}</span> <strong>{price}</strong></p>
                </div>
                <div>
                    <Link className = "sales-item-button" to='/'>Add to cart</Link>
                </div>
                <div>
                    <Link className="sales-item-button sales-item-buy-now-button" to={`/product/${slug}`}>Buy now</Link>
                </div>
            </div>                       
        </div>
    )
}

export default SaleItem
