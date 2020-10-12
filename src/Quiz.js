import React from 'react';
import Question from './Question';
import ScoreTracker from './ScoreTracker';

export default function Quiz() {
    return (
        <section className="quiz-component-container">
            <ScoreTracker />
            <Question />
        </section>
    );
}