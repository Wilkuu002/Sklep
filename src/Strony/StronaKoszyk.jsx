import React from "react";
import { useKoszyk } from "../Komponenty/Koszyk.jsx";

const StronaKoszyk = () => {
    const { koszyk, wyczyscKoszyk, usunZKoszyka } = useKoszyk();

    const showNotification = (message) => {
        window.alert(message);
        if ('Notification' in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(message);
                }
            });
        } else {
            console.error('Przeglądarka nie obsługuje powiadomień.');
        }
    };

    const handleZaplacClick = () => {
        wyczyscKoszyk();
        showNotification("Dziękujemy za zakupy! 😊");
    };

    const handleUsunClick = (produktId) => {
        usunZKoszyka(produktId);
    };

    return (
        <div className="container mt-5">
            <h2>Twój Koszyk</h2>
            <ul className="list-group">
                {koszyk.map((produkt) => (
                    <li key={produkt.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{produkt.name} - Cena: ${produkt.price}</span>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleUsunClick(produkt.id)}
                        >
                            Usuń
                        </button>
                    </li>
                ))}
            </ul>
            <p className="mt-3">
                Łączna kwota zakupów: ${koszyk.reduce((sum, produkt) => sum + produkt.price, 0)}
            </p>
            <button className="btn btn-custom" onClick={handleZaplacClick}>
                Zapłać
            </button>
        </div>
    );
};

export default StronaKoszyk;
