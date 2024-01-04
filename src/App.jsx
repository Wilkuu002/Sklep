import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StronaGlowna from './Strony/StronaGlowna.jsx';
import Guziki from "./Komponenty/Header.jsx";
import StronaSklep from "./Strony/StronaSklep.jsx";
import StronaKoszyk from "./Strony/StronaKoszyk.jsx";
import {KoszykProvider} from "./Komponenty/Koszyk.jsx";


function App() {
    const [currentComponent, setCurrentComponent] = useState("StronaGlowna");
    const handleComponentChange = (componentName) => {
        setCurrentComponent(componentName);
    };
    return (

    <Router>
        <KoszykProvider>
            <div className="App">
                <Guziki onComponentChange={handleComponentChange} />

                {currentComponent === "StronaGlowna" && <StronaGlowna />}
                {currentComponent === "Sklep" && <StronaSklep />}
                {/*{currentComponent === "FAQ" && <StronaFAQ />}*/}
                {currentComponent === "Koszyk" && <StronaKoszyk/>}
            </div>
        </KoszykProvider>
    </Router>
    );
}

export default App;