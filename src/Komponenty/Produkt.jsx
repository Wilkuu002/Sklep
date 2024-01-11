import React from 'react';


const Produkt = ({ id, name, price }) => {

    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Produkt {id}</h5>
                <p className="card-text">Nazwa: {name}</p>
                <p className="card-text">Cena: {price} zł</p>
            </div>
        </div>
    );
};

export default Produkt;
