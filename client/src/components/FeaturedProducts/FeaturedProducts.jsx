import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../Card/Card';

import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    },
                });
                //console.log(data);
                setData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

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
