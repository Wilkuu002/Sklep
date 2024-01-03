

import React from "react";
import { Link } from "react-router-dom";
import "../Komponenty/KomponentyCss/Header.css"
function Guziki({ onComponentChange }) {
    const handleClick = (componentName) => {
        onComponentChange(componentName);
    };

    return (
        <div className="Menu">
            <Link to="/" onClick={() => handleClick("StronaGlowna")} className="button">Strona Główna</Link>
            <Link to="/obrazy" onClick={() => handleClick("Galeria")}  className="button">Sklep</Link>
            <Link to="/dodaj-obraz" onClick={() => handleClick("DodajObraz")} className="button">FAQ</Link>
            <Link to="/Kontakt" onClick={() => handleClick("Kontakt")}  className="button">Koszyk</Link>
        </div>
    );
}

export default Guziki;
