import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizQuestion } from './actions';
import { playAudio } from './play';
import { ThumbsUp } from 'react-feather';

export default function Question() {
    const dispatch = useDispatch();
    const quizQuestion = useSelector((state) => state && state.quizQuestion);

    useEffect(() => {
        console.log('Question component mounted!');
        dispatch(getQuizQuestion());

    }, []);

    const checkForViktory = (clickedAnswer) => {
        if (clickedAnswer === quizQuestion.correctAnswer) {
            console.log("IT IS THE RIGHT ANSWER!");
        } else {
            console.log("UNFRTUNATELY, IT'S A WRONG ANSWER");
        }
    };

    if (!quizQuestion) {
        return 'Loading';
    }

    return (
        <div className="question-container">
            <div className="question-img-comtainer">
                <img src={quizQuestion.question.img} />
            </div>
            <div className="answers-container">
                {quizQuestion.answers.map((answer, i) => {
                    return (
                        <div className="answer" key={i}>
                            <div className="audio-btn" onClick={() => playAudio("term-audio", i)}>play</div>
                            <ThumbsUp onClick={() => checkForViktory(answer)}/>
                            <audio className="term-audio">
                                <source src={answer}></source>
                            </audio>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}