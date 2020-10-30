import axios from './axios';

////////////// used in Cards.js //////////////
export async function receiveAllAnimals() {
    const { data } = await axios.get('/animals');

    return {
        type: "RECEIVE_ALL_ANIMALS",
        animals: data
    };
}

export async function showClickedAnimal(id) {
    // console.log('the following id was clicked: ', id);
    const { data } = await axios.get('/animal-info/' + id);
    // console.log('clicked animal data: ', data);

    return {
        type: "SHOW_CLICKED_ANIMAL",
        animalCardIsVisible: true,
        clickedAnimal: data
    };
}

export function hideAnimalCard() {
    return {
        type: "HIDE_ANIMAL_CARD",
        animalCardIsVisible: false
    };
}

////////// Q U I Z /////////////////// Q U I Z //////////////////// Q U I Z ///////

export async function getQuizQuestion() {
    const { data } = await axios.get('/question');
    // console.log("the question in actions", data);

    return {
        type: 'GET_QUIZ_QUESTION',
        quizQuestion: data
    };
}

export function updateQuestionCount(currVal) {
    if (currVal < 5) {
        return {
            type: "UPDATE_QUESTION_COUNT",
            questionCount: currVal += 1
        };
    } else {
        return {
            type: "UPDATE_QUESTION_COUNT",
            questionCount: 0,
        };
    }

}

export function updateUserScore(result) {
    return {
        type: "UPDATE_USER_SCORE",
        userScore: [result]
    };
    
}

export function emptyScoreTracker() {
    // it is important to set question count to one, bc the conponent won't mount again
    // and we're getting the number of the first question when the component mounts
    return {
        type: "EMPTY_SCORE_TRACKER",
        userScore: [],
        questionCount: 1
    };
}

////////////// MEMORY ///////////////////// MEMORY ////////////////// MEMORY ///////////////

export async function receiveCardsContent() {
    const { data } = await axios.get('/memory-cards');

    return {
        type: "RECEIVE_CARDS_CONTENT",
        imgCards: data.imgs,
        soundCards: data.audios
    };
}

export function updateClickedImgInfo(imgId) {
    return {
        type: "UPDATE_CLICKED_IMG_INFO",
        imgId: imgId
    };
}

export function updateClickedAudioInfo(audioId) {
    return {
        type: "UPDATE_CLICKED_AUDIO-INFO",
        audioId: audioId
    };
}

export function closeCards() {
    return {
        type: "CLOSE_CARDS",
        imgId: null,
        audioId: null
    };
}

export function countMatches(id) {
    return {
        type: "COUNT_MATCHES",
        matchId: [id]
    };
}

export function clearState() {
    return {
        type: "CLEAR_STATE"
    };
}


export function showOrHideInfo(bool) {
    return {
        type: "SHOW_OR_HIDE_INFO",
        infoIsVisible: bool ? false : true
    };
}