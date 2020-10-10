import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { showClickedAnimal } from './actions';

export default function AnimalCard() {
    // use useRouteMatch to get information about the typed url
    const match = useRouteMatch('/card/:id');
    const dispatch = useDispatch();
    const clickedAnimal = useSelector((state) => state && state.clickedAnimal);

    useEffect(() => {
        console.log('animal card component mounted!', match.params.id);
        // we are passing the animal id as an arg => we know the id from the url
        dispatch(showClickedAnimal(match.params.id));

    }, []);

    const playAudio = async (elementClass) => {
        let audioEl = document.getElementsByClassName(elementClass)[0];
        await audioEl.play();
        // console.log('the button was clicked', elementClass);
    };
    

    if (!clickedAnimal) {
        return 'Loading';
    }

    return (
        <section className="animal-card-container">
            <div className="card-img-container">
                <img src={clickedAnimal.img} alt={clickedAnimal.animal} />
            </div>
            <button onClick={() => playAudio("term-audio")}>play term</button>
            <audio className="term-audio">
                <source src={clickedAnimal.term_read}></source>
            </audio>
            <button onClick={() => playAudio("sound-audio")}>play sound</button>
            <audio className="sound-audio">
                <source src={clickedAnimal.sound}></source>
            </audio>
        </section>
    );
}