import React, { useEffect } from 'react';
import { Home, RotateCw } from "react-feather";
import { useDispatch } from "react-redux";
import MatchTracker from './MatchTracker';
import { clearState, receiveCardsContent } from './actions';
import { Link } from "react-router-dom";
import { playAudio } from "./play";


export default function MemoryComplited() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("memory-end-container").classList.remove("hidden");
            playAudio("victory-sound", 0);

        }, 1000);
    }, []);


    const resetGame =() => {
        dispatch(clearState());
        dispatch(receiveCardsContent());
    };

    return (
        <section
            className="game-end-component-container hidden"
            id="memory-end-container"
        >
            <MatchTracker />
            <div className="nav-container">
                <Link to="/">
                    <Home className="nav-icon" />
                </Link>
                <RotateCw className="nav-icon" onClick={resetGame} />
            </div>
            <audio className="victory-sound">
                <source src="/sounds/victory.mp3"></source>
            </audio>
        </section>
    );
}