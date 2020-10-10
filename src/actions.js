import { async } from 'crypto-random-string';
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
    console.log('the following id was clicked: ', id);
    const { data } = await axios.get('/animal-info/' + id);
    console.log('clicked animal data: ', data);

    return {
        type: "SHOW_CLICKED_ANIMAL",
        clickedAnimal: data
    };
}