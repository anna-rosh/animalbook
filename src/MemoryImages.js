import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveCardsContent, openImgCard } from "./actions";

export default function MemoryImages() {
    const dispatch = useDispatch();
    const imgCards = useSelector((state) => state && state.imgCards);

    useEffect(() => {
        dispatch(receiveCardsContent());
    }, []);

    const handleClick = (index, imgId) => {
        dispatch(openImgCard(imgId));
    };

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