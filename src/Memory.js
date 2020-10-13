import React, { useEffect } from 'react';
import MemoryImages from './MemoryImages';
import MemorySounds from './MemorySounds';
import MatchTracker from './Matchtracker';
import { useSelector, useDispatch } from 'react-redux';


export default function Memory() {

    return (
        <section className="memory-component-container">
            <MatchTracker />
            <div className="memory-container">
                <MemoryImages />
                <MemorySounds />
            </div>
        </section>
        
    );
}