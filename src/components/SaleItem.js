import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/saleItems.css';

const SaleItem = ({image, altText, product, original, offer}) => {
    return (
        <Link className='sales-item' to='/'>
            <div className="sales-item-image">
                <img src={image} alt={altText}/>
            </div> 
            <div className="sales-item-show">
                <div className="sales-item-show-container">
                    <Link to="\" className= "sales-item-button">Quick view</Link>
                </div>
            </div>
            <div className="sales-item-description">
                <p>{product}</p>
                <p><span className="original">{original}</span> {offer}</p>
            </div>                       
        </Link>
    )
}

export default SaleItem
