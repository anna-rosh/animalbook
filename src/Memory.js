import React, { useEffect } from 'react';
import MemoryImages from './MemoryImages';
import MemorySounds from './MemorySounds';
import { useSelector, useDispatch } from 'react-redux';


export default function Memory() {

    return (
        <section className="memory-container">
            <MemoryImages />
            <MemorySounds />
        </section>
    );
}