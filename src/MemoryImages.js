import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveCardsContent, updateClickedImgInfo } from "./actions";

export default function MemoryImages() {
    const dispatch = useDispatch();
    const imgCards = useSelector((state) => state && state.imgCards);
    const imgId = useSelector((state) => state && state.imgId);
    const matches = useSelector((state) => state && state.matches);

    useEffect(() => {
        dispatch(receiveCardsContent());
    }, []);

    
    const openImgCard = (id, imgCardIndex) => {
        // if imgId already is in the state, don't allow to open other cards
        if (imgId) {
            return;
        }

        dispatch(updateClickedImgInfo(id, imgCardIndex));
    };


    if (!imgCards) {
        return 'Loading';
    }

    return (
        <div className="memory-cards-container">

            {imgCards.map((img, i) => {
                
                return(
                    <div key={img.id} className="memory-card" style={{ visibility: matches && matches.includes(img.id) ? "hidden" : "visible"}} onClick={() => openImgCard(img.id, i)} >
                        <div className="cards-img-container">
                            {img.id === imgId && <img className="animal-img" src={img.img} />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}