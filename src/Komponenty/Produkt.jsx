import React from 'react';


const Produkt = ({ id, name, price }) => {

    return (
        <div>
            <p>To jest produkt o id {id}, nazwie {name} i cenie {price} zł</p>
        </div>
    );
};

export default Produkt;
