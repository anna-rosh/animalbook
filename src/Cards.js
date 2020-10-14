import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveAllAnimals, showClickedAnimal } from './actions';
import AnimalCard from './AnimalCard';

export default function Cards() {
    const dispatch = useDispatch();
    const allAnimals = useSelector((state) => state && state.allAnimals);
    const animalCardIsVisible = useSelector((state) => state && state.animalCardIsVisible);

    useEffect(() => {
        console.log('Cards component mounted!');
        dispatch(receiveAllAnimals());
    }, []);

    if (!allAnimals) {
        return "Loading";
    }

    return (
        <div className="cards-container">
            {allAnimals.map((animal) => {
                return (
                    <div className="card" key={animal.id} onClick={() => dispatch(showClickedAnimal(animal.id))}>
                        <div className="cards-img-container">
                            <img className="animal-img" src={animal.img} /> 
                        </div> 
                    </div>
                );
            })}
            {animalCardIsVisible && <AnimalCard />}
        </div>
    );
}