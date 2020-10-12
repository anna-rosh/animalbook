import React from 'react';
import Question from './Question';
import ScoreTracker from './ScoreTracker';
import { useSelector } from 'react-redux';
import QuizEnd from './QuizEnd';

export default function Quiz() {
    const userScore = useSelector((state) => state && state.userScore);
    const questionCount = useSelector((state) => state && state.questionCount);

    return (
        <section className="quiz-component-container">
            <ScoreTracker />
            <Question />
            {userScore && userScore.length === 5 && questionCount === 0 && <QuizEnd />}
        </section>
    );
}