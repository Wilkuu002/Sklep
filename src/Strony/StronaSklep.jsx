import Produkt from "../Komponenty/Produkt.jsx";
import React from "react";

const StronaSklep = ()=>{
    return(
        <div>
            <h2 className="Naglowki">Sklep</h2>
            <h2 className="Naglowki">Lista Produktów</h2>
            <Produkt bestsellerOnly={false}/>
        </div>
    )
}
export default StronaSklep