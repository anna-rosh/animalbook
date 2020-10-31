import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizQuestion, updateUserScore } from './actions';
import { playAudio } from './play';
import { ThumbsUp, MessageCircle } from 'react-feather';

export default function Question() {
    const dispatch = useDispatch();
    const quizQuestion = useSelector((state) => state && state.quizQuestion);

    useEffect(() => {
        dispatch(getQuizQuestion());

    }, []);

    const checkAnswer = (clickedAnswerId) => {
        if (clickedAnswerId === quizQuestion.question.id) {
            dispatch(updateUserScore(1));
            playRightAnswer(quizQuestion.question.id);
            ShowNextQuestion(dispatch, quizQuestion.question.id);

        } else {
            dispatch(updateUserScore(2));
            playRightAnswer(quizQuestion.question.id);
            ShowNextQuestion(dispatch, quizQuestion.question.id);
        }
    };


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
            <div className="answers-container">
                {quizQuestion.answers.map((answer, i) => {
                    return (
                        <div className="answer" key={i}>
                            <div className="audio-btn-quiz" id={answer.id} onClick={() => playAudio("term-audio", i)}>
                                <MessageCircle className="message-circle mirrored" />
                                <img className="audio-btn-img" src="/img/person-speaks.png" />
                            </div>
                            <div className="thumb-container" onClick={() => checkAnswer(answer.id)}>
                                <ThumbsUp className="thumbs-up" /> 
                            </div>
                            <audio className={`term-audio ${answer.id}`}>
                                <source  src={answer.term_read}></source>
                            </audio>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


const ShowNextQuestion = (dispatch, correctAnswerId) => {
    setTimeout(() => {
        // get a new set of data for the question and the answer option
        dispatch(getQuizQuestion());
        // remove the green bg from the btn
        document.getElementById(`${correctAnswerId}`).classList.remove("green-bg");

    }, 2500);
};


const playRightAnswer = (correctAnswerId) => {
    // get the right btn by Id which corresponds this the id of the right answer
    const rightOption = document.getElementById(`${correctAnswerId}`);
    // add green bg to display the right answer
    rightOption.classList.add("green-bg");

    playAudio(`${correctAnswerId}`, 0);
};