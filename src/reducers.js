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

    if (action.type === "EMPTY_SCORE_TRACKER") {
        state = {
            ...state,
            userScore: action.userScore,
            questionCount: action.questionCount
        };
    }

    /////////////////// MEMORY /////////////////////// MEMORY /////////////////
    if (action.type === "RECEIVE_CARDS_CONTENT") {
        state = {
            ...state,
            imgCards: action.imgCards,
            soundCards: action.soundCards
        };
    }

    if (action.type === "UPDATE_CLICKED_IMG_INFO") {
        state = {
            ...state,
            imgId: action.imgId,
            imgCardIndex: action.imgCardIndex
        };
    }

    if (action.type === "UPDATE_CLICKED_AUDIO-INFO") {
        state = {
            ...state,
            audioId: action.audioId,
            audioCardIndex: action.audioCardIndex
        };
    }

    if (action.type === "CLOSE_CARDS") {
        state = {
            ...state,
            imgId: action.imgId,
            imgCardIndex: action.imgCardIndex,
            audioId: action.audioId,
            audioCardIndex: action.audioCardIndex,
        };
    }

    if (action.type === "COUNT_MATCHES") {
        state = {
            ...state,
            matches: state.matches ? [...state.matches, ...action.matchId] : action.matchId
        };
    }

    if (action.type === "CLEAR_STATE") {
        state = {};
    }

    if (action.type === "SHOW_OR_HIDE_INFO") {
        state = {
            ...state,
            infoIsVisible: action.infoIsVisible
        };
    }
    
    
    
    return state;
}