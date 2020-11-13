import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizQuestion } from './actions';
import { playAudio } from './play';

import Answers from './Answers';

export default function Question() {
    const dispatch = useDispatch();
    const quizQuestion = useSelector((state) => state && state.quizQuestion);

    useEffect(() => {
        dispatch(getQuizQuestion());

    }, []);


    if (!quizQuestion) {
        return 'Loading';
    }

    return (
        <div className="question-container">
            <div className="question-img-container">
                <img src={quizQuestion.question.img} className="question-animal-img" onClick={() => playAudio("sound-audio", 0)} />
            </div>
            <audio className="sound-audio">
                <source  src={quizQuestion.question.sound}></source>
            </audio>
            <Answers />
        </div>
    );
}