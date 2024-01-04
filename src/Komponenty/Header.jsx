

import React from "react";
import { Link } from "react-router-dom";
import "../Komponenty/KomponentyCss/Header.css"
import { useKoszyk } from './Koszyk.jsx';

function Guziki({ onComponentChange }) {
    const {koszyk} = useKoszyk()

    const liczbaProduktowWKoszyku = koszyk.length;
    const handleClick = (componentName) => {
        onComponentChange(componentName);
    };

    return (
        <div className="Menu">
            <Link to="/" onClick={() => handleClick("StronaGlowna")} className="button">Strona Główna</Link>
            <Link to="/StronaSklep" onClick={() => handleClick("Sklep")}  className="button">Sklep</Link>
            <Link to="/StronaFAQ" onClick={() => handleClick("FAQ")} className="button">FAQ</Link>
            <Link to="/StronaKoszyk" onClick={() => handleClick("Koszyk")}  className="button">Koszyk ({liczbaProduktowWKoszyku})</Link>
        </div>
    );
}

export default Guziki;
