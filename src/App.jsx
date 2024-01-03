// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductProvider } from './Komponenty/ProductContext.jsx';
import StronaGlowa from './Komponenty/StronaGlowna.jsx';

const App = () => {
    return (
        <Router>
            <ProductProvider>
                <div>
                    {/* Dodaj nagłówek, nawigację itp., jeśli to konieczne */}
                    <Switch>
                        <Route path="/" exact component={StronaGlowa} />
                    </Switch>
                </div>
            </ProductProvider>
        </Router>
    );
};

export default App;
