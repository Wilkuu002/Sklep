import React from 'react';
import { Link } from 'react-router-dom';

const Produkt = ({ id, name, price }) => (
    <div key={id} className="product-item">
        <Link to={`/product/${id}`}>
            <h3>{name}</h3>
        </Link>
        <p>Cena: ${price}</p>
    </div>
);

export default Produkt;