import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StronaGlowna from './Strony/StronaGlowna.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StronaGlowna />} />
                {/* Dodaj inne trasy, jeśli są potrzebne */}
            </Routes>
        </Router>
    );
}

export default App;