import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Produkt = ({ bestsellerOnly }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('products.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = bestsellerOnly ? products.filter(product => product.bestseller === true) : products;

    return (
        <div>
            <h2 className="Naglowki">Lista Bestsellerów</h2>
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <Link to={`/product/${product.id}`}>
                            <h3>{product.name}</h3>
                        </Link>
                        <p>Cena: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
Produkt.propTypes = {
    bestsellerOnly: PropTypes.bool.isRequired,
};

export default Produkt;
