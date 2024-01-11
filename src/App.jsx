import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StronaGlowna from './Strony/StronaGlowna.jsx';
import Guziki from "./Komponenty/Header.jsx";
import StronaSklep from "./Strony/StronaSklep.jsx";
import StronaKoszyk from "./Strony/StronaKoszyk.jsx";
import {KoszykProvider} from "./Komponenty/Koszyk.jsx";
import StronaProduktu from "./Strony/StronaProduktu.jsx";
import StronaFAQ from "./Strony/StronaFAQ.jsx";



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

                    <Routes>
                        <Route path="/" element={<StronaGlowna />} />
                        <Route path="/StronaSklep" element={<StronaSklep />} />
                        <Route path="/StronaKoszyk" element={<StronaKoszyk />} />
                        <Route path="/StronaFAQ" element={<StronaFAQ/>}/>
                        <Route path="/StronaProduktu/:id" element={<StronaProduktu/>} />

                    </Routes>
                </div>
            </KoszykProvider>
        </Router>
    );
}

export default App;