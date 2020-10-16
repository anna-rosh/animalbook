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
                <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </h4>
                <h5>References: sounds of animals, clicking and magic sounds 
                    from www.zapsplat.com
                </h5>
            </div>
        </>
    );
}