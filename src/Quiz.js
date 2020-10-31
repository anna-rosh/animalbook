import React, { useEffect } from 'react';
import Question from './Question';
import ScoreTracker from './ScoreTracker';
import { useSelector, useDispatch } from 'react-redux';
import QuizEnd from './QuizEnd';
import { clearState } from './actions';


export default function Quiz() {
    const dispatch = useDispatch();
    const userScore = useSelector((state) => state && state.userScore);

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    return (
        <section className="quiz-component-container">
            <ScoreTracker />
            <Question />
            {userScore && userScore.length === 5 && <QuizEnd />}
        </section>
    );
}