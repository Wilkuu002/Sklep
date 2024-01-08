import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StronaProduktu = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    setLoading(false);
                    return;
                }

                const response = await fetch('products.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const selectedProduct = data.products.find((p) => p.id === parseInt(id));
                setProduct(selectedProduct);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Ładowanie...</div>;
    }

    if (!product) {
        return <div>Nie znaleziono produktu</div>;
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Cena: ${product.price}</p>
        </div>
    );
};

export default StronaProduktu;
