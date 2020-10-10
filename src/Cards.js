import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveAllAnimals } from './actions';
import { Link } from 'react-router-dom';

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
                        <Link to={`/card/${animal.id}`} className="card" key={animal.id} >
                            <img className="animal-img" src={animal.img} />
                        </Link>
                    );
                })}
            </>
        );
}