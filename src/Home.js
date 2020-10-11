import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <Link to="/cards">CARDS</Link>
            <Link to="/quiz">QUIZ</Link>
        </>
    );

}