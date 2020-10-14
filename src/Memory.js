import React, { useEffect } from 'react';
import MemoryImages from './MemoryImages';
import MemorySounds from './MemorySounds';
import MatchTracker from './Matchtracker';
import MemoryComplited from './MemoryComplited';
import { useSelector, useDispatch } from 'react-redux';


export default function Memory() {
    const matches = useSelector((state) => state && state.matches);


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