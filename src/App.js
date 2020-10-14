import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Cards from './Cards';
import Quiz from './Quiz';
import Memory from './Memory';
import { BookOpen, HelpCircle, Grid, Info, Home } from 'react-feather';

export default function App() {

    return (
        <BrowserRouter>
            <section className="app-container">
                <header className="app-header">
                    <h2>tier<img className="paw" src="/img/paw.png" />buch</h2>
                    <div className="header-nav-container">
                        <Link to="/cards" className="header-nav-link"><BookOpen className="header-nav-icon" /></Link>
                        <Link to="/quiz" className="header-nav-link"><HelpCircle className="header-nav-icon" /></Link>
                        <Link to="/memory" className="header-nav-link"><Grid className="header-nav-icon" /></Link>
                        <Link className="header-nav-link"><Info className="header-nav-icon" /></Link>
                        <Link to="/" className="header-nav-link"><Home className="header-nav-icon" /></Link>
                    </div>
                </header>
                <Route exact path="/" render={() => <HomeComponent />} />
                <Route exact path="/cards" render={() => <Cards />} />
                <Route exact path="/quiz" render={() => <Quiz />} />
                <Route exact path="/memory" render={() => <Memory />} />
            </section>
        </BrowserRouter>
    );
}