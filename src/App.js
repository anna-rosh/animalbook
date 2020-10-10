import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cards from './Cards';
import AnimalCard from './AnimalCard';

export default function App() {

    // const playAudio = async () => {
    //     console.log('audio-element: ', document.getElementsByClassName("animal-sound")[0]);
    //     const audioEl = document.getElementsByClassName("animal-sound")[0];
    //     audioEl.play();
    // }


    return (
        <BrowserRouter>
            {/* <h1>a cat is here!</h1>
            <button onClick={playAudio}>play audio</button>
            <audio className="animal-sound">
                <source src="/sounds/cat.mp3"></source>
            </audio> */}
            <>
                <p>here is header from the app-component</p>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/cards" render={() => <Cards />} />
                <Route
                    path="/card/:id"
                    render={() => (
                        <AnimalCard />
                    )}
                />
            </>
        </BrowserRouter>
    );
}