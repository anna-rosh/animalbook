import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveCardsContent, updateClickedImgInfo } from "./actions";
import { playAudio } from './play';

export default function MemoryImages() {
    const dispatch = useDispatch();
    const imgCards = useSelector((state) => state && state.imgCards);
    const imgId = useSelector((state) => state && state.imgId);
    const matches = useSelector((state) => state && state.matches);

    useEffect(() => {
        dispatch(receiveCardsContent());
    }, []);

    
    const openImgCard = (id) => {
        // if imgId already is in the state, don't allow to open other cards
        if (imgId) {
            return;
        }

        playAudio("button-click", 0);

        dispatch(updateClickedImgInfo(id));
    };


    if (!imgCards) {
        return 'Loading';
    }

    return (
        <div className="memory-cards-container">
            {imgCards.map((img, i) => {
                return (
                    <div
                        key={img.id}
                        className={imgId === img.id ? "chosen-card" : "memory-card"}
                        style={{
                            visibility:
                                matches && matches.includes(img.id)
                                    ? "hidden"
                                    : "visible",
                        }}
                        onClick={() => openImgCard(img.id) }
                    >
                        <div className="cards-img-container">
                            {img.id === imgId && (
                                <img className="animal-img" src={img.img} />
                            )}
                        </div>
                    </div>
                );
            })}
            <audio className="button-click">
                <source src="/sounds/button.mp3"></source>
            </audio>
        </div>
    );
}