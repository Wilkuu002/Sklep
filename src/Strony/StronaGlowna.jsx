
import './StronyCSS/StronaGlownaCss.css'
import Produkt from "../Komponenty/Produkt.jsx";

const StronaGlowna = () => {

    return (
        <div>
            <Produkt bestsellerOnly={true} />
        </div>
    );
};

export default StronaGlowna;
