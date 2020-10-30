import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { receiveCardsContent, updateClickedAudioInfo } from "./actions";
import { playAudio } from './play';
import { MessageCircle } from 'react-feather';

export default function MemorySounds() {
    const dispatch = useDispatch();
    const soundCards = useSelector((state) => state && state.soundCards);
    const audioId = useSelector((state) => state && state.audioId);
    const matches = useSelector((state) => state && state.matches);

    // receiving cards content neccessary here as it happens in MemoryImages
    // useEffect(() => {
    //     dispatch(receiveCardsContent());

    // }, []);

    const openSoundCard = (id, soundCardIndex) => {
        if (audioId) {
            return;
        }

        playAudio("term-audio", soundCardIndex);

        dispatch(updateClickedAudioInfo(id, soundCardIndex));
    };


    if (!soundCards) {
        return "Loading";
    }

    return (
        <div className="memory-cards-container">
            
            {soundCards.map((audio, i) => {
                return (
                    <div
                        className={
                            audioId === audio.id
                                ? "chosen-card"
                                : "memory-card sound-card"
                        }
                        style={{
                            visibility:
                                matches && matches.includes(audio.id)
                                    ? "hidden"
                                    : "visible",
                        }}
                        key={audio.id}
                        onClick={() => openSoundCard(audio.id, i)}
                    >
                        <div className="cards-img-container sound-btn">
                            <MessageCircle className="message-circle mirrored" />
                            <img
                                className="audio-btn-img"
                                src="/img/person-speaks.png"
                            />
                        </div>
                        <audio className="term-audio">
                            <source src={audio.term_read}></source>
                        </audio>
                
                    </div>
                );
            })}
        </div>
    );
}