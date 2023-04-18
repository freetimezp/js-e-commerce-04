import React from 'react';
import { Link } from 'react-router-dom';

import './Categories.scss';

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row row-hover">
                    <img src="/img/cat-1.jpg" alt="category" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row row-hover">
                    <img src="/img/cat-2.jpg" alt="category" />
                    <button>
                        <Link className='link' to="/products/1">Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row row-hover">
                    <img src="/img/cat-5.jpg" alt="category" />
                    <button>
                        <Link className='link' to="/products/1">New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row row-hover">
                            <img src="/img/cat-3.jpg" alt="category" />
                            <button>
                                <Link className='link' to="/products/1">Men</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row row-hover">
                            <img src="/img/cat-4.jpg" alt="category" />
                            <button>
                                <Link className='link' to="/products/1">Accesories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row row-hover">
                    <img src="/img/cat-6.jpg" alt="category" />
                    <button>
                        <Link className='link' to="/products/1">Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Categories;
