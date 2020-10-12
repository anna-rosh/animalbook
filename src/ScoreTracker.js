import React, { useEffect } from 'react';
import { Sun, Cloud } from 'react-feather';
import { useSelector } from 'react-redux';

export default function ScoreTracker() {
    const userScore = useSelector((state) => state && state.userScore);

    // useEffect(() => {
    //     const suns = document.getElementsByClassName('sun');
    //     console.log('suns: ', suns);

    // }, []);
 

    return (
        <div className="score-tracker-container">
            <div className="score-slot">
                <Sun className={userScore && userScore[0] === 1 ? "sun" : "score"} />
                <Cloud className={userScore && userScore[0] === 2 ? "cloud" : "score"} />
            </div>

            <div className="score-slot">
                <Sun className={userScore && userScore[1] === 1 ? "sun" : "score"} />
                <Cloud className={userScore && userScore[1] === 2 ? "cloud" : "score"} />
            </div>

            <div className="score-slot">
                <Sun className={userScore && userScore[2] === 1 ? "sun" : "score"} />
                <Cloud className={userScore && userScore[2] === 2 ? "cloud" : "score"} />
            </div>

            <div className="score-slot">
                <Sun className={userScore && userScore[3] === 1 ? "sun" : "score"} />
                <Cloud className={userScore && userScore[3] === 2 ? "cloud" : "score"} />
            </div>

            <div className="score-slot">
                <Sun className={userScore && userScore[4] === 1 ? "sun" : "score"} />
                <Cloud className={userScore && userScore[4] === 2 ? "cloud" : "score"} />
            </div>
        </div>
    );
}