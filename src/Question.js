import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizQuestion, updateQuestionCount, updateUserScore } from './actions';
import { playAudio } from './play';
import { ThumbsUp, MessageCircle } from 'react-feather';

export default function Question() {
    const dispatch = useDispatch();
    const quizQuestion = useSelector((state) => state && state.quizQuestion);
    const questionCount = useSelector((state) => state && state.questionCount);

    useEffect(() => {
        console.log('Question component mounted!');
        dispatch(getQuizQuestion());

        dispatch(updateQuestionCount(0));

    }, []);

    const checkAnswer = (clickedAnswer) => {
        if (clickedAnswer === quizQuestion.correctAnswer) {
            dispatch(updateUserScore(1));
            playRightAnswer(quizQuestion.correctAnswer, 'term-audio');
            addScoreAndShowNextQuestion();   
        } else {
            dispatch(updateUserScore(2));
            playRightAnswer(quizQuestion.correctAnswer, "term-audio");
            addScoreAndShowNextQuestion();
        }
    };

    const addScoreAndShowNextQuestion = () => {
        setTimeout(() => {
            let currVal = questionCount;
            dispatch(updateQuestionCount(currVal));
            dispatch(getQuizQuestion());

            let btns = document.getElementsByClassName("audio-btn-quiz");

            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("green-border");
            }

        }, 2500);
    };

    if (!quizQuestion) {
        return 'Loading';
    }

    return (
        <div className="question-container">
            <div className="question-img-container">
                <img src={quizQuestion.question.img} className="question-animal-img" />
            </div>
            <div className="answers-container">
                {quizQuestion.answers.map((answer, i) => {
                    return (
                        <div className="answer" key={i}>
                            <div className="audio-btn-quiz" onClick={() => playAudio("term-audio", i)}>
                                <MessageCircle className="message-circle mirrored" />
                                <img className="audio-btn-img" src="/img/person-speaks.png" />
                            </div>
                            <ThumbsUp className="thumbs-up" onClick={() => checkAnswer(answer)}/>
                            <audio className="term-audio">
                                <source  src={answer}></source>
                            </audio>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const playRightAnswer = (correctAnswer, elementClass) => {
    const allAudios = document.getElementsByClassName(elementClass);

    let allAudiosArr = [];
    let rightAudio;
    // allAudios.filter(audio => audio.innerHtml.includes(quizQuestion.correctAnswer));
    for (let i = 0; i < allAudios.length; i++) {
        if (allAudios[i].innerHTML.includes(correctAnswer)) {
            rightAudio = allAudios[i];
        }

        allAudiosArr.push(allAudios[i]);
    }

    let rightAudioIndex = allAudiosArr.indexOf(rightAudio);
    document.getElementsByClassName("audio-btn-quiz")[rightAudioIndex].classList.add("green-border");
    
    playAudio(elementClass, rightAudioIndex);
};