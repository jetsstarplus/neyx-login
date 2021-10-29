import React, {useState, useEffect} from 'react'
import Layout from '../layout'
import { Link } from 'react-router-dom';

import data from '../data/products.json'
import SlideContent from '../components/slideContent';

import '../styles/detail.css';

const Detail = ({match}) => {
    const {
        params: {productSlug},
    } = match;

    const [product, setProduct] = useState('');
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [saleQuantity, setSaleQuantity] = useState(1);

    const changeQuantity = (e) =>{
        setSaleQuantity(e.target.value)
    }

    useEffect(() =>{
        const fetchProduct = async =>{
            // setLoading(true);
            // setError(false);
            try{
                const result = data.find(item => item.slug === productSlug)
                setProduct(result)
            }
            catch(error){
                // setError(true)
            }
            // setLoading(false)
        }
        fetchProduct()

    }, [productSlug])
    // console.log(product)

    return (
        <Layout>
            <div className='container3'>
                <header className="breadcrumb">
                        <div className="content">
                            <Link className="home-page" to ='/'>Home</Link>/<span className="item">{product.name}</span>
                        </div>
                        <div class="pagination">
                            <Link className="links color-black" to='/'><i className="fa fa-angle-left"></i>Prev</Link> <span className="separator">|</span><Link className="links color-black" to='/'>Next<i className="fas fa-angle-right"></i></Link>
                        </div>
                </header>
                <section className="product-details">
                    <div className="product-images">
                        <div className = "image-container">
                            <img src={product.images && product.images[0]} alt = {product.slug}/>
                        </div>
                        <div className='image-selector'>
                            Hi
                        </div>
                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="product-more-details">
                        <div className="content">
                            <div className="product-title">
                                <h1>{product.name}</h1>
                            </div>
                            <div className="sku">
                                <span>SKU  {product.id}</span>
                            </div>
                            <div className="price">
                                <span>{product.price}</span>
                            </div>
                            <div className="size-selector">
                                <label>Size</label>
                                <select className="bordered-input">
                                    {
                                        product.sizes && product.sizes.map(size =>{
                                            return(
                                                <option key={size} value={size}>{size}</option>
                                                )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="color-selector">
                                    <label>Color</label>
                                    <div className="boxes">
                                    {
                                        product.colors && product.colors.map(color =>{
                                            return(
                                                <>
                                                    <input type="radio" name='color' style={{ color: color}} className="color-box" value={color}>                                                     
                                                    </input>
                                                    <div className="color-box" style={{border: `2px solid ${color}`}} >
                                                        <div className="color-box-inside" style={{backgroundColor: color}}>

                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                    </div>
                            </div>
                            <div className="sale-quantity">
                                <label>Quantity</label>
                                <input value={saleQuantity} onChange={changeQuantity} className=" bordered-input"/>
                            </div>
                            <div className="action-buttons">
                                <div className="w-full flex" style={{gap:10}}><button style={{flexGrow:1}} className="sales-item-button-detail">Add to Cart</button><button className="sales-item-button-detail sales-item-button-detail-bordered"><i className="fa fa-heart"></i></button></div>
                                <button className="sales-item-button-detail sales-item-button-detail-bordered">Burgain Price</button>
                                <button className="sales-item-button-detail">Buy Now</button>
                            </div>
                            <div className="more-information">
                                <SlideContent title="Product Info" content={product.description} state={true} />
                                <SlideContent title="Return and Refund Policy" content={product.description} state={false} />
                                <SlideContent title="Shipping Info" content={product.description} state={false} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Detail
