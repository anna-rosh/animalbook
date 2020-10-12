import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizQuestion, updateQuestionCount, updateUserScore } from './actions';
import { playAudio } from './play';
import { ThumbsUp } from 'react-feather';

export default function Question() {
    const dispatch = useDispatch();
    const quizQuestion = useSelector((state) => state && state.quizQuestion);
    const questionCount = useSelector((state) => state && state.questionCount);

    useEffect(() => {
        console.log('Question component mounted!');
        dispatch(getQuizQuestion());

        dispatch(updateQuestionCount(0));

    }, []);

    const checkForViktory = (clickedAnswer) => {
        if (clickedAnswer === quizQuestion.correctAnswer) {
            console.log("IT IS THE RIGHT ANSWER!");

            dispatch(updateUserScore(1));

            let currVal = questionCount;
            dispatch(updateQuestionCount(currVal));
            dispatch(getQuizQuestion()); 
            
        } else {
            console.log("UNFRTUNATELY, IT'S A WRONG ANSWER");

            dispatch(updateUserScore(2));

            let currVal = questionCount;
            dispatch(updateQuestionCount(currVal));
            dispatch(getQuizQuestion()); 
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