import React, { useEffect } from 'react';
import { Home, RotateCw } from "react-feather";
import { useDispatch } from "react-redux";
import MatchTracket from './MatchTracker';
import { clearState, receiveCardsContent } from './actions';
import { Link } from "react-router-dom";


export default function MemoryComplited() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            document
                .getElementById("memory-end-container")
                .classList.remove("hidden");
        }, 1000);
    }, []);


    const resetGame =() => {
        dispatch(clearState());
        dispatch(receiveCardsContent());
    };

    return (
        <section className="game-end-component-container hidden" id="memory-end-container">
            <MatchTracket />
            <div className="nav-container">
                <Link to="/">
                    <Home
                        className="nav-icon"
                    />
                </Link>
                <RotateCw
                    className="nav-icon" onClick={resetGame}
                />
            </div>
        </section>
    );
}