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

export function openImgCard(id, index) {
    console.log('the following animal was clicked: ', id);

    return {
        type: "OPEN_IMG_CARD",
        clickedImgId: id,
        clickedImgIndex: index
    };
}

export function openSoundCard(id, index) {
    console.log("the following sound was clicked: ", id);

    return {
        type: "OPEN_SOUND_CARD",
        clickedSoundId: id,
        clickedSoundIndex: index
    };
}

export function closeImgCard() {
    return {
        type: "CLOSE_IMG_CARD",
        clickedImgId: null,
        clickedImgIndex: null,
    };
}

export function closeSoundCard() {
    return {
        type: "CLOSE_SOUND_CARD",
        clickedSoundId: null,
        clickedSoundIndex: null,
    };
}

export function countMatches() {
    return {
        type: "COUNT_MATCHES",
        matches: [true]
    };
}