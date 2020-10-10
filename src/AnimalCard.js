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

    const playAudio = async () => {
        let audioEl = document.getElementsByClassName('term-audio')[0];
        await audioEl.play();
        // console.log('the button was clicked', elementClass);
    };
    

    if (!clickedAnimal) {
        return 'Loading';
    }

    return (
        <section className="animal-card-container">
            <div className="card-img-container">
                <img src={clickedAnimal.img} alt={clickedAnimal.animal}/>
            </div>
            <button onClick={playAudio}>play term</button>
            <audio className='term-audio'>
                <source src={clickedAnimal.term_read}></source>
            </audio>
        </section>
    );
}