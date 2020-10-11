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

export async function getQuizQuestion() {
    const { data } = await axios.get('/question');
    console.log("the question in actions", data);

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