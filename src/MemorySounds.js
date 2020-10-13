import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { receiveCardsContent, openSoundCard } from "./actions";
import { playAudio } from './play';
import { MessageCircle } from 'react-feather';

export default function MemorySounds() {
    const dispatch = useDispatch();
    const soundCards = useSelector((state) => state && state.soundCards);

    useEffect(() => {
        dispatch(receiveCardsContent());
    }, []);

    const handleClick = (elementClass, index, soundId) => {
        playAudio(elementClass, index);
        dispatch(openSoundCard(soundId));
    };

    if (!soundCards) {
        return "Loading";
    }

    return (
        <div className="memory-cards-container">
            {soundCards.map((audio, i) => {
                return (
                    <div className="memory-card" key={audio.id} onClick={() => handleClick('term-audio', i, audio.id)}>
                        <div className="cards-img-container sound-btn">
                            <MessageCircle className="message-circle mirrored" />
                            <img className="audio-btn-img" src="/img/person-speaks.png" />
                        </div>
                        <audio className="term-audio">
                            <source  src={audio.term_read}></source>
                        </audio>
                    </div>
                );
            })}
        </div>
    );
}