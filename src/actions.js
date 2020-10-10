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
    console.log('HI THERE YOU ARE GOING TO HIDE THE COMPONENT!');

    return {
        type: "HIDE_ANIMAL_CARD",
        animalCardIsVisible: false
    };
}