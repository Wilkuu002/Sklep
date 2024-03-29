import React, { createContext, useContext, useState } from 'react';

const KoszykContext = createContext();

export const KoszykProvider = ({ children }) => {
    const [koszyk, setKoszyk] = useState([]);
    const [licznikId, setLicznikId] = useState(1);

    const dodajDoKoszyka = (produkt) => {
        setKoszyk((prevKoszyk) => [...prevKoszyk, { ...produkt, id: licznikId }]);
        setLicznikId((prevLicznikId) => prevLicznikId + 1);
    };

    const usunZKoszyka = (produktId) => {
        setKoszyk((prevKoszyk) => prevKoszyk.filter((produkt) => produkt.id !== produktId));
    };
    const wyczyscKoszyk = () => {
        setKoszyk([]);
    };

    const wartoscKoszyka = {
        koszyk,
        dodajDoKoszyka,
        usunZKoszyka,
        wyczyscKoszyk
    };

    return <KoszykContext.Provider value={wartoscKoszyka}>{children}</KoszykContext.Provider>;
};

export const useKoszyk = () => {
    const context = useContext(KoszykContext);
    if (!context) {
        throw new Error('useKoszyk musi być użyte wewnątrz KoszykProvider');
    }
    return context;
};
