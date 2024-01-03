import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StronaGlowna from './Strony/StronaGlowna.jsx';
import Guziki from "./Komponenty/Header.jsx";

function App() {
    const [currentComponent, setCurrentComponent] = useState("StronaGlowna");

    const handleComponentChange = (componentName) => {
        setCurrentComponent(componentName);
    };
    return (

    <Router>
        <div className="App">
            <Guziki onComponentChange={handleComponentChange} />

            {currentComponent === "StronaGlowna" && <StronaGlowna />}
            {/*{currentComponent === "Galeria" && <Galeria />}*/}
            {/*{currentComponent === "Kontakt" && <Kontakt />}*/}
        </div>
    </Router>
    );
}

export default App;