import React from 'react';

import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

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
                {error ? "Something wrong.. error"
                    : loading
                        ? "loading, you must wait.."
                        : data?.map((item) => (
                            <Card item={item} key={item.id} />
                        ))
                }
            </div>
        </div>
    );
}

export default FeaturedProducts;
