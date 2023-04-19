import React from 'react';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import './Cart.scss';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: '/img/featured-1.jpg',
            img2: '/img/featured-2.jpg',
            title: 'Hat',
            desc: `Lorem ipsum dolor.`,
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: '/img/featured-3.jpg',
            img2: '/img/featured-4.jpg',
            title: 'Hat',
            desc: `Lorem ipsum dolor sit.`,
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>

            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="product" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className="price">
                            1 x ${item.price}
                        </div>
                    </div>

                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}

            <div className="total">
                <span>Subtotal</span>
                <span>$123</span>
            </div>

            <button>Proceed to Checkout</button>
            <span className="reset">Reset Cart</span>
        </div>
    );
}

export default Cart;
