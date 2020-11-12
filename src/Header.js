import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookOpen, HelpCircle, Grid, Info, Home } from "react-feather";
import { showOrHideInfo } from "./actions";

import Information from "./Information";

export default function Header() {
    const dispatch = useDispatch();
    const infoIsVisible = useSelector((state) => state && state.infoIsVisible);

    return(
        <header className="app-header">
            <h2>tier<img className="paw" src="/img/paw.png" />buch</h2>
            <div className="header-nav-container">
                <Link to="/cards" className="header-nav-link"><BookOpen className="header-nav-icon" /></Link>
                <Link to="/quiz" className="header-nav-link"><HelpCircle className="header-nav-icon" /></Link>
                <Link to="/memory" className="header-nav-link"><Grid className="header-nav-icon" /></Link>
                <div className="header-nav-link">
                    <Info className="header-nav-icon" onClick={() => dispatch(showOrHideInfo(infoIsVisible))} />
                </div>
                {infoIsVisible && <Information />}
                <Link to="/" className="header-nav-link"><Home className="header-nav-icon" /></Link>
            </div>
        </header>
    );
}