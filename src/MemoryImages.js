import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveCardsContent, openImgCard, closeImgCard, countMatches } from "./actions";

export default function MemoryImages() {
    const dispatch = useDispatch();
    const imgCards = useSelector((state) => state && state.imgCards);
    const clickedImgId = useSelector((state) => state && state.clickedImgId);
    const clickedSoundId = useSelector((state) => state && state.clickedSoundId);
    const clickedImgIndex = useSelector((state) => state && state.clickedImgIndex);

    useEffect(() => {
        dispatch(receiveCardsContent());
    }, []);

    const handleClick = (index, imgId) => {
        // if one card is already open, prevent users from clicking other cards
        if (clickedImgId) {
            return;
        }

        const clickedImg = document.getElementsByClassName("animal-img")[index];
        clickedImg.style.visibility = "visible";
        dispatch(openImgCard(imgId, index));
    };

    const checkForMatch = () => {
        if (clickedSoundId && clickedImgId && clickedImgId === clickedSoundId) {
            // console.log("MATCH");

            setTimeout(() => {    
                const clickedCard = document.getElementsByClassName("memory-card")[clickedImgIndex];
                clickedCard.style.visibility="hidden";
                const clickedImg = document.getElementsByClassName("animal-img")[clickedImgIndex];
                clickedImg.style.visibility = "hidden";

                dispatch(closeImgCard());
                dispatch(countMatches());

            }, 2000);

        } else if (clickedSoundId && clickedImgId && clickedImgId !== clickedSoundId) {
            // console.log("NOT A MATCH");

            setTimeout(() => {
                const clickedImg = document.getElementsByClassName("animal-img")[clickedImgIndex];
                clickedImg.style.visibility = "hidden";
                dispatch(closeImgCard());

            }, 2000);  

        } else {
            return;
        }
    };

    checkForMatch();

    if (!imgCards) {
        return 'Loading';
    }

    return (
        <div className="memory-cards-container">
            {imgCards.map((img, i) => {
                return(
                    <div key={img.id} className="memory-card" onClick={() => handleClick(i, img.id)}>
                        <div className="cards-img-container">
                            <img className="animal-img" src={img.img} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}