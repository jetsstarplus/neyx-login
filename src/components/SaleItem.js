import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/saleItems.css';

const SaleItem = ({image, altText, product, original, offer}) => {
    return (
        <div className='sales-item'>
            <div className="sales-item-image">
                <img src={image} alt={altText}/>
            </div> 
            <div className="sales-item-description">
                <div>
                    <p>{product}</p>
                    <p><span className="original">{original}</span> <strong>{offer}</strong></p>
                </div>
                <div>
                    <Link className = "sales-item-button" to='/'>Add to cart</Link>
                </div>
                <div>
                    <Link className="sales-item-button sales-item-buy-now-button" to='/detail'>Buy now</Link>
                </div>
            </div>                       
        </div>
    )
}

export default SaleItem
