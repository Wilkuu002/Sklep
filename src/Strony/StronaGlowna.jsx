
import './StronyCSS/StronaGlownaCss.css'
import Produkt from "../Komponenty/Produkt.jsx";

const StronaGlowna = () => {

    return (
        <div>
            <Produkt products={bestsellers} />
        </div>
    );
};

export default StronaGlowna;
