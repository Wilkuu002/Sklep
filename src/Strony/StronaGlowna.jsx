import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StronyCSS/StronaGlownaCss.css'

const StronaGlowna = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista Produktów</h2>
            <div className="product-list">
                {products.map(product => (
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

export default StronaGlowna;
