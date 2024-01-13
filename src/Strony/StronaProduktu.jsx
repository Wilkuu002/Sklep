import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Produkt from '../Komponenty/Produkt.jsx';

const StronaProduktu = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products?id=${id}`);
                if (!response.ok) {
                    throw new Error('nie dziala respons Strona Produktu');
                }
                const data = await response.json();
                setProduct(data.find((product) => product.id === Number(id)));
            } catch (error) {
                console.error('Błąd fetchowania produktu:', error.message);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {product ? (
                <Produkt id={product.id} name={product.name} price={product.price} />
            ) : (
                <p>Ładowanie danych...</p>
            )}
        </div>
    );
};

export default StronaProduktu;
