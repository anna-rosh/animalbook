import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ScoreTracker from './ScoreTracker';
import { Home, RotateCw } from 'react-feather';
import { Link } from 'react-router-dom';
import { clearState, getQuizQuestion } from './actions';
import { playAudio } from './play';

export default function QuizEnd() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("quiz-end-container").classList.remove("hidden");
            playAudio("victory-sound", 0);

        }, 1000);
        
    }, []);

    const resetQuiz = () => {
        dispatch(clearState());
        dispatch(getQuizQuestion());
    };

    return (
        <section className="game-end-component-container hidden" id="quiz-end-container">
            <ScoreTracker />
            <div className="nav-container">
                <Link to="/"><Home className="nav-icon" /></Link>
                <RotateCw onClick={resetQuiz} className="nav-icon" />
            </div>
            <audio className="victory-sound">
                <source src="/sounds/victory.mp3"></source>
            </audio>
        </section>
    );
}