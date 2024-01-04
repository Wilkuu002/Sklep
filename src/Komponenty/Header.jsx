
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom";
import { useKoszyk } from './Koszyk.jsx';
import './KomponentyCss/Header.css'

function Guziki({ onComponentChange }) {
    const {koszyk} = useKoszyk()

    const liczbaProduktowWKoszyku = koszyk.length;
    const handleClick = (componentName) => {
        onComponentChange(componentName);
    };

    return (
        <div className="Menu">
            <Link to="/" onClick={() => handleClick("StronaGlowna")} className="btn btn-custom">Strona Główna</Link>
            <Link to="/StronaSklep" onClick={() => handleClick("Sklep")} className="btn btn-custom">Sklep</Link>
            <Link to="/StronaFAQ" onClick={() => handleClick("FAQ")} className="btn btn-custom">FAQ</Link>
            <Link to="/StronaKoszyk" onClick={() => handleClick("Koszyk")} className="btn btn-custom">Koszyk ({liczbaProduktowWKoszyku})</Link>
        </div>
    );
}

export default Guziki;
