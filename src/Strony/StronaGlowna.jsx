
import './StronyCSS/StronaGlownaCss.css'
import ProduktyLista from "../Komponenty/ProduktyLista.jsx";
import React from "react";
import StronaBlog from "./StronaBlog.jsx";

const StronaGlowna = () => {

    return (
        <div>
            <h2 className="Naglowki">Lista Bestsellerów</h2>
            <ProduktyLista bestsellerOnly={true} />
            <StronaBlog/>
        </div>
    );
};

export default StronaGlowna;
