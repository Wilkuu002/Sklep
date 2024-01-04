
import './StronyCSS/StronaGlownaCss.css'
import Produkt from "../Komponenty/Produkt.jsx";
import React from "react";

const StronaGlowna = () => {

    return (
        <div>
            <h2 className="Naglowki">Lista Bestsellerów</h2>
            <Produkt bestsellerOnly={true} />
        </div>
    );
};

export default StronaGlowna;
