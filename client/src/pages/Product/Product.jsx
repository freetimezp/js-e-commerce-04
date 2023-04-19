import React, { useState } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import './Product.scss';

const images = [
    '/img/prod-1.jpg',
    '/img/prod-2.jpg',
]

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="product" onClick={(e) => setSelectedImg(0)} />
                    <img src={images[1]} alt="product" onClick={(e) => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="product" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam
                    placeat eveniet ab autem, totam modi cumque natus, delectus laudantium
                    illo impedit possimus aperiam odit minus nulla corrupti excepturi ratione.
                </p>

                <div className="quantity">
                    <button onClick={(e) => setQuantity(prev => prev <= 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={(e) => setQuantity(next => next + 1)}>+</button>
                </div>

                <button className="add">
                    <AddShoppingCartIcon /> ADD TO CART
                </button>

                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>Description</span>
                    <hr />
                    <span>Additional Information</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
