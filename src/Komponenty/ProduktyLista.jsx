// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useKoszyk } from "./Koszyk.jsx";

const ProduktyLista = ({ bestsellerOnly }) => {
    const [products, setProducts] = useState([]);
    const { dodajDoKoszyka } = useKoszyk();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products`);
                if (!response.ok) {
                    throw new Error('blad sieci');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Blad fetchowania produktow  :', error.message);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = bestsellerOnly ? products.filter(product => product.bestseller === true) : products;

    return (
        <div>
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <Link to={`/StronaProduktu/${product.id}`}>
                            <h3>{product.name}</h3>
                        </Link>
                        <p>Cena: ${product.price}</p>
                        <button className='btn btn-custom' onClick={() => dodajDoKoszyka(product)}>Dodaj do koszyka</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

ProduktyLista.propTypes = {
    bestsellerOnly: PropTypes.bool.isRequired,
};

export default ProduktyLista;
