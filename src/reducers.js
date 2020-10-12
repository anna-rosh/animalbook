export default function(state = {}, action) {

    if (action.type === "RECEIVE_ALL_ANIMALS") {
        state = Object.assign({}, state, {
            allAnimals: action.animals
        });
    }
    
    if (action.type === "SHOW_CLICKED_ANIMAL") {
        state = {
            ...state,
            animalCardIsVisible: action.animalCardIsVisible,
            clickedAnimal: action.clickedAnimal,
        };
    }
    
    if (action.type === "HIDE_ANIMAL_CARD") {
        state = {
            ...state,
            animalCardIsVisible: action.animalCardIsVisible
        };
    }

    //////////////// QUIZ /////////////////////// QUIZ /////////////
    if (action.type === "GET_QUIZ_QUESTION") {
        state = {
            ...state,
            quizQuestion: action.quizQuestion
        };
    }

    if (action.type === "UPDATE_QUESTION_COUNT") {
        state = {
            ...state,
            questionCount: action.questionCount
        };
    }
    

    if (action.type === "UPDATE_USER_SCORE") {
        console.log('hello!');

        state = {
            ...state,
            userScore: state.userScore ? [...state.userScore, ...action.userScore] : action.userScore
        };
    }
    
    
    return state;
}