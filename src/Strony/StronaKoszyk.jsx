
import React from "react";
import {useKoszyk} from "../Komponenty/Koszyk.jsx";

const StronaKoszyk = () => {
    const {koszyk, wyczyscKoszyk} = useKoszyk()
    const showNotification = (message) => {
        window.alert(message)
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
        wyczyscKoszyk()
        showNotification("Dziękujemy za zakupy! 😊");
    };
    return (
        <div>
            <h2>Twój Koszyk</h2>
            <ul>
                {koszyk.map((produkt, index) => (
                    <li key={index}>{produkt.name} - Cena: ${produkt.price}</li>
                ))}
            </ul>
            <p>Łączna kwota zakupów: ${koszyk.reduce((sum, produkt) => sum + produkt.price, 0)}</p>
            <button onClick={handleZaplacClick}>Zapłać</button>
        </div>
    );
};

export default StronaKoszyk;
