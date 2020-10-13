import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Cards from './Cards';
import Quiz from './Quiz';
import Memory from './Memory';

export default function App() {

    return (
        <BrowserRouter>
            <section className="app-container">
                <p>here is header from the app-component</p>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/cards" render={() => <Cards />} />
                <Route exact path="/quiz" render={() => <Quiz />} />
                <Route exact path="/memory" render={() => <Memory />} />
            </section>
        </BrowserRouter>
    );
}