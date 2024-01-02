import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Importuj swoje komponenty, np. Home, Product, Cart, itp.
import StronaGlowa from "./StronaGlowna.jsx";
import Product from './Produkty/Krem.jsx';
//import Cart from './Cart';

const App = () => {
    return (
        <Router>
            <div>
                {/* Dodaj nawigację, np. w nagłówku */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* Dodaj więcej linków według potrzeb */}
                    </ul>
                </nav>

                {/* Dodaj Switch, aby zapewnić, że tylko jedna trasa jest renderowana jednocześnie */}
                <Switch>
                    <Route path="/" exact component={StronaGlowa} />
                    <Route path="/product/:id" component={Product} />
                    {/* Dodaj więcej tras, np. dla koszyka */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
