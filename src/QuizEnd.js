import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ScoreTracker from './ScoreTracker';
import { Home, RotateCw } from 'react-feather';
import { Link } from 'react-router-dom';
import { emptyScoreTracker } from './actions';
import { playAudio } from './play';

export default function QuizEnd() {
    const dispatch = useDispatch();

    useEffect(() => {
        playAudio("victory-sound", 0);
    }, []);

    return (
        <section className="game-end-component-container">
            <ScoreTracker />
            <div className="nav-container">
                <Link to="/"><Home onClick={() => dispatch(emptyScoreTracker())} className="nav-icon" /></Link>
                <RotateCw onClick={() => dispatch(emptyScoreTracker())} className="nav-icon" />
            </div>
            <audio className="victory-sound">
                <source src="/sounds/victory.mp3"></source>
            </audio>
        </section>
    );
}