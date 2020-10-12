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
            ShowNextQuestion(dispatch, questionCount);   
        } else {
            dispatch(updateUserScore(2));
            playRightAnswer(quizQuestion.correctAnswer, "term-audio");
            ShowNextQuestion(dispatch, questionCount);
        }
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

const ShowNextQuestion = (dispatch, questionCount) => {
    setTimeout(() => {
        let currVal = questionCount;
        dispatch(updateQuestionCount(currVal));
        dispatch(getQuizQuestion());
        let btns = document.getElementsByClassName("audio-btn-quiz");

        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("green-bg");
        }
    }, 2500);
};

const playRightAnswer = (correctAnswer, elementClass) => {
    // get a collection of audio elements
    const allAudios = document.getElementsByClassName(elementClass);
    // make the collection to an array to me able to get the index of the audio
    // with the right answer
    let allAudiosArr = [];
    let rightAudio;
    // loop over the elemet arr to find the element containing the right answer
    for (let i = 0; i < allAudios.length; i++) {
        if (allAudios[i].innerHTML.includes(correctAnswer)) {
            rightAudio = allAudios[i];
        }
        allAudiosArr.push(allAudios[i]);
    }
    // find out the index of the element with the right audio
    let rightAudioIndex = allAudiosArr.indexOf(rightAudio);
    // display that this answer is correct
    document.getElementsByClassName("audio-btn-quiz")[rightAudioIndex].classList.add("green-bg");
    // play the correct audio
    playAudio(elementClass, rightAudioIndex);
};