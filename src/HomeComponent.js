import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Grid} from 'react-feather';

export default function HomeComponent() {

    return (
        <section className="home-container">
            <Link className="activity-container" to="/cards">
                <BookOpen className="activity-icon" />
                <h1>tiere lernen</h1>
            </Link>
            <Link to="/quiz" className="activity-container">
                <HelpCircle className="activity-icon" />
                <h1>quiz</h1>
            </Link>
            <Link to="/memory" className="activity-container">
                <Grid className="activity-icon" />
                <h1>memory</h1>
            </Link>
        </section>
    );

}