
import React from "react";

const StronaKoszyk = ({ koszyk }) => {
    return (
        <div>
            <h2>Twój Koszyk</h2>
            <ul>
                {koszyk.map((produkt, index) => (
                    <li key={index}>{produkt.name} - Cena: ${produkt.price}</li>
                ))}
            </ul>
            <p>Łączna kwota zakupów: ${koszyk.reduce((sum, produkt) => sum + produkt.price, 0)}</p>
        </div>
    );
};

export default StronaKoszyk;
