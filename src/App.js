import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Cards from './Cards';

export default function App() {

    return (
        <BrowserRouter>
            <section className="app-container">
                <p>here is header from the app-component</p>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/cards" render={() => <Cards />} />
            </section>
        </BrowserRouter>
    );
}