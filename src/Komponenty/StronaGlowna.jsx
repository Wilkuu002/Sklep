// StronaGlowa.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from './ProductContext.jsx';

const StronaGlowa = () => {
    const { products } = useProductContext();

    return (
        <div>
            <h2>Lista Produktów</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StronaGlowa;
