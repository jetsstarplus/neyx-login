import React from 'react'
import Layout from '../layout'
import { Link } from 'react-router-dom';

import '../styles/detail.css';

const Detail = () => {
    return (
        <Layout>
            <div className='container3'>
                <header className="breadcrumb">
                        <div className="content">
                            <Link className="home-page" to ='/'>Home</Link>/<span className="item">Hi I'm a product</span>
                        </div>
                        <div class="pagination">
                            <Link className="links color-black"><i className="fa fa-angle-left"></i>Prev</Link> <span className="separator">|</span><Link className="links color-black">Next<i className="fas fa-angle-right"></i></Link>
                        </div>
                </header>
            </div>
        </Layout>
    )
}

export default Detail
