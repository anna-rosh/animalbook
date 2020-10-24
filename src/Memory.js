import React, { useEffect } from 'react';
import MemoryImages from './MemoryImages';
import MemorySounds from './MemorySounds';
import MatchTracker from './MatchTracker';
import MemoryComplited from './MemoryComplited';
import { matchWasFound, countMatches, clearState } from "./actions";
import { useSelector, useDispatch } from 'react-redux';


export default function Memory() {
    const dispatch = useDispatch();
    const imgId = useSelector((state) => state && state.imgId);
    const audioId = useSelector((state) => state && state.audioId);
    const matches = useSelector((state) => state && state.matches);

    useEffect(() => {

        if (imgId && audioId) {

            if (lookForMatch(imgId, audioId)) {
                setTimeout(() => {
                    dispatch(matchWasFound());
                    dispatch(countMatches(imgId));
                }, 2000);
            
            } else {
                setTimeout(() => {
                    dispatch(matchWasFound(false));
                }, 2000);
            } 

        } else {
            return;
        }

    }, [imgId, audioId]);

    
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };

    }, []);

    return (
        <section className="memory-component-container">
            <MatchTracker />
            <div className="memory-container">
                <MemoryImages />
                <MemorySounds />
            </div>
            {matches && matches.length == 4 && <MemoryComplited />}
        </section>
        
    );
}

const lookForMatch = (imgId, audioId) => {
    if (imgId === audioId) {
        return true;
    }
};