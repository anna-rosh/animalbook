import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import axios from './axios';


export default function Home() {
    // const dispatch = useDispatch();
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        (async () => {
            console.log('component did mount!');
            const { data } = await axios.get('/animals');
            console.log(data);
            setAnimals(data);
        })();
    }, [])


    if (!animals) {
        return 'Loading';
    }

    return (
        <>
            <h1>hi here is home component!</h1>
            {animals.map((animal) => {
                return (
                    <div key={animal.id}>
                        <img src={animal.img} />
                        <audio className="animal-sound" controls>
                            <source src={animal.sound}></source>
                        </audio>
                    </div>
                );
            })}
        </>
    );
}