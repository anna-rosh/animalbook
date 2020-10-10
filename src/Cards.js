import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveAllAnimals } from './actions';

export default function Cards() {
        const dispatch = useDispatch();
        const allAnimals = useSelector((state) => state && state.allAnimals);

        useEffect(() => {
            console.log('Cards component mounted!');
            dispatch(receiveAllAnimals());
        }, []);

        if (!allAnimals) {
            return "Loading";
        }

        return (
            <>
                {allAnimals.map((animal) => {
                    return (
                        <div className="card" key={animal.id}>
                            <img className="animal-img" src={animal.img} />
                        </div>
                    );
                })}
            </>
        );
}