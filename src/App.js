import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Cards from './Cards';
import Quiz from './Quiz';
import Memory from './Memory';
import Header from "./Header";

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <section className="app-container">
                <Route exact path="/" render={() => <HomeComponent />} />
                <Route exact path="/cards" render={() => <Cards />} />
                <Route exact path="/quiz" render={() => <Quiz />} />
                <Route exact path="/memory" render={() => <Memory />} />
                <Redirect from="*" to="/" />
            </section>
        </BrowserRouter>
    );
}