import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showOrHideInfo } from './actions';
import { X } from 'react-feather';


export default function Info() {
    const dispatch = useDispatch();
    const infoIsVisible = useSelector((state) => state && state.infoIsVisible);

    return (
        <>
            <div className="info-overlay" onClick={() => dispatch(showOrHideInfo(infoIsVisible))}></div>
            <div className="info-container">
                <X className="x" onClick={() => dispatch(showOrHideInfo(infoIsVisible))} />
                <h2>Information für Eltern</h2> 
            </div>
        </>
    );
}