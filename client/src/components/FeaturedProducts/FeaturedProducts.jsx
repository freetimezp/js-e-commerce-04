import React from 'react';

import Card from '../Card/Card';

import './FeaturedProducts.scss';

const data = [
    {
        id: 1,
        img: '/img/featured-1.jpg',
        img2: '/img/featured-4.jpg',
        title: 'Hat',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: '/img/featured-2.jpg',
        img2: '/img/featured-3.jpg',
        title: 'Hat',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 3,
        img: '/img/featured-3.jpg',
        img2: '/img/featured-1.jpg',
        title: 'Hat',
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img: '/img/featured-4.jpg',
        img2: '/img/featured-2.jpg',
        title: 'Hat',
        oldPrice: 19,
        price: 12,
    },
];

const FeaturedProducts = ({ type }) => {
    return (
        <div className='featured-products'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                    numquam officiis tempore ipsam fuga pariatur fugit sapiente atque
                    dignissimos quo repellat incidunt architecto veniam modi, ducimus
                    illum! Consequatur saepe quos similique adipisci libero. Repudiandae
                    deserunt accusamus, vel inventore labore itaque.
                </p>
            </div>
            <div className="bottom">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
