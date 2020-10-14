import React, { useEffect } from 'react';
import { Home, RotateCw } from "react-feather";
import { useDispatch } from "react-redux";
import MatchTracket from './MatchTracker';
import { emptyMatchTracker, receiveCardsContent } from './actions';
import { Link } from "react-router-dom";


export default function MemoryComplited() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("memory-end-container").classList.remove("hidden");
        }, 1000);

    }, []);

    const resetGame = () => {
        makeAllVisible();
        dispatch(emptyMatchTracker());
        dispatch(receiveCardsContent());
    };

    // make all cards visible if there are no matches (needed for reseting the game)
    const makeAllVisible = () => {
        const cards = document.getElementsByClassName("memory-card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.visibility = "visible";
            cards[i].classList.remove = "dark-border";
        }
    };


    // console.log(document.getElementsByClassName("memory-card"));

    return (
        <section className="game-end-component-container hidden" id="memory-end-container">
            <MatchTracket />
            <div className="nav-container">
                <Link to="/">
                    <Home
                        className="nav-icon"
                        onClick={resetGame}
                    />
                </Link>
                <Link to="/memory">
                    <RotateCw
                        onClick={resetGame}
                        className="nav-icon"
                    />
                </Link>
            </div>
        </section>
    );
}