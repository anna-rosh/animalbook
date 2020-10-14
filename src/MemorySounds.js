import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { receiveCardsContent, openSoundCard, closeSoundCard } from "./actions";
import { playAudio } from './play';
import { MessageCircle } from 'react-feather';

export default function MemorySounds() {
    const dispatch = useDispatch();
    const soundCards = useSelector((state) => state && state.soundCards);
    const clickedImgId = useSelector((state) => state && state.clickedImgId);
    const clickedSoundId = useSelector((state) => state && state.clickedSoundId);
    const clickedSoundIndex = useSelector((state) => state && state.clickedSoundIndex);


    useEffect(() => {
        dispatch(receiveCardsContent());
    }, []);


    const handleClick = (elementClass, index, soundId) => {
        // if one card is already open, prevent users from clicking other cards
        if (clickedSoundId) {
            return;
        }

        const clickedCard = document.getElementsByClassName("sound-card")[index];
        clickedCard.classList.add("dark-border");

        playAudio(elementClass, index);
        dispatch(openSoundCard(soundId, index));
    };

    
    const checkForMatch = () => {
        if (clickedSoundId && clickedImgId && clickedImgId === clickedSoundId) {
            // console.log("MATCH");

            setTimeout(() => {    
                const clickedCard = document.getElementsByClassName("sound-card")[clickedSoundIndex];
                clickedCard.style.visibility="hidden";
                clickedCard.classList.remove("dark-border");

                dispatch(closeSoundCard());

            }, 2000);

        } else if (clickedSoundId && clickedImgId && clickedImgId !== clickedSoundId) {
            // console.log("NOT A MATCH");

            setTimeout(() => {
                const clickedCard = document.getElementsByClassName("sound-card")[clickedSoundIndex];
                clickedCard.classList.remove("dark-border");
                dispatch(closeSoundCard());

            }, 2000);  

        } else {
            return;
        }
    }; // closes checkForMatch

    checkForMatch();


    if (!soundCards) {
        return "Loading";
    }

    return (
        <div className="memory-cards-container">
            {soundCards.map((audio, i) => {
                return (
                    <div className="memory-card sound-card" key={audio.id} onClick={() => handleClick('term-audio', i, audio.id)}>
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