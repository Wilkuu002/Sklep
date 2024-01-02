import React from 'react';
import { Link } from 'react-router-dom';

const StronaGlowa = () => {
    // Pobierz listę produktów, np. z kontekstu lub komponentu nadrzędnego
    const products = [...];

    return (
        <div>
            <h2>Lista Produktów</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {/* Użyj Link do stworzenia linku do pojedynczego produktu */}
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
