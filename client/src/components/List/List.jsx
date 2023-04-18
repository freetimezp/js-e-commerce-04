import React from 'react';

import Card from '../Card/Card';

import './List.scss';

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
    {
        id: 5,
        img: '/img/featured-1.jpg',
        img2: '/img/featured-4.jpg',
        title: 'Hat',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 6,
        img: '/img/featured-2.jpg',
        img2: '/img/featured-3.jpg',
        title: 'Hat',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 7,
        img: '/img/featured-3.jpg',
        img2: '/img/featured-1.jpg',
        title: 'Hat',
        oldPrice: 19,
        price: 12,
    },
    {
        id: 8,
        img: '/img/featured-4.jpg',
        img2: '/img/featured-2.jpg',
        title: 'Hat',
        oldPrice: 19,
        price: 12,
    },
];

const List = () => {
    return (
        <div className='list'>
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
}

export default List;
