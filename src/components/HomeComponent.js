import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home(props) {
    return (
        <div className="inner-theme d-flex w-100 h-100 p-3 mx-auto flex-column">
            <h1 className="cover-heading">
                Welcome to the Guild Content Management System
            </h1>
            <p className="lead">
                GCMS is a system dedicated to helping you organize your teams, reward
                participation, and create more rich, tightly-knit gaming and
                team-based moments. We're committed to helping you run the community
                that you want to have.
            </p>
            <div>
                <a className="btn btn-lg btn-primary">Learn more</a>
            </div>
        </div>
    );
}

export default Home;