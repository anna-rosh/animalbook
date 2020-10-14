import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showClickedAnimal, hideAnimalCard } from './actions';
import { XCircle, ChevronLeft, ChevronRight, MessageCircle } from 'react-feather';
import { playAudio } from './play'; 

export default function AnimalCard() {
    const dispatch = useDispatch();
    const clickedAnimal = useSelector((state) => state && state.clickedAnimal);
    const allAnimals = useSelector((state) => state && state.allAnimals);
    
    
    if (!clickedAnimal) {
        return 'Loading';
    }

    return (
        <section className="animal-card-container">
            {/* check if the next id is less than zero. if so don't display navigation btn */}
            {(clickedAnimal.id - 1) > 0 
                ? (<div onClick={() => dispatch(showClickedAnimal(clickedAnimal.id - 1))}><ChevronLeft size={70} className="chevron" /></div>)
                : (<div className="chevron-placeholder"></div>)
            }
            <div onClick={() => dispatch(hideAnimalCard())}><XCircle className="close-animal-card" size={70} /></div>
            <div className="card-img-container">
                <img className='animal-img' src={clickedAnimal.img} alt={clickedAnimal.animal} />
            </div>
            <div className="audio-btn-container">
                <div className="audio-btn" onClick={() => playAudio("term-audio", 0)}>
                    <MessageCircle className="message-circle mirrored" />
                    <img className="audio-btn-img" src="/img/person-speaks.png" />
                </div>
                <audio className="term-audio">
                    <source src={clickedAnimal.term_read}></source>
                </audio>
                <div className="audio-btn" onClick={() => playAudio("sound-audio", 0)}>
                    <MessageCircle className="message-circle " />
                    <img className="audio-btn-img" src={clickedAnimal.img} />
                </div>
                <audio className="sound-audio">
                    <source src={clickedAnimal.sound}></source>
                </audio>
            </div>
                
            {(clickedAnimal.id + 1) <= allAnimals.length
                ? (<div onClick={() => dispatch(showClickedAnimal(clickedAnimal.id + 1))}><ChevronRight size={70} className="chevron" /></div>)
                : (<div className="chevron-placeholder"></div>)
            }  
        </section>
    );
}