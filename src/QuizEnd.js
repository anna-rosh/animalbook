import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ScoreTracker from './ScoreTracker';
import { Home, RotateCw } from 'react-feather';
import { Link } from 'react-router-dom';
import { emptyScoreTracker } from './actions';

export default function QuizEnd() {
    const dispatch = useDispatch();

    return (
        <section className="quiz-end-component-container">
            <ScoreTracker />
            <div className="nav-container">
                <Link to="/"><Home onClick={() => dispatch(emptyScoreTracker())} className="nav-icon" /></Link>
                <RotateCw onClick={() => dispatch(emptyScoreTracker())} className="nav-icon" />
            </div>
        </section>
    );
}