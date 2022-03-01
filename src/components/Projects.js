import React from 'react';

export default function Projects() {
    return (
        <div className='projects'>

            <div>
                <h2>My Projects</h2>
            </div>
            <div className="row">
                <a href="https://github.com/caitlinw29/mentor-monkey" target="_blank" rel='noreferrer' />
                <figure className="work-container">
                    <div id="random-generator" className="card-image small-card">
                        <div className="layer"></div>
                    </div>

                    <div className="card-title">
                        <h3>Mentor Monkey</h3>
                        <a href="https://github.com/StevenLof777/dope-horoscope" target="_blank" rel='noreferrer' />
                    </div>
                    </figure>
            </div>
            <div className="row">
                <a href="https://github.com/StevenLof777/dope-horoscope" target="_blank" rel='noreferrer'/>
                <figure className="work-container">
                    <div id="random-generator" className="card-image small-card">
                        <div className="layer"></div>
                    </div>

                    <div className="card-title">
                        <h3>Dope Horoscope</h3>
                    </div>
                    </figure>
            </div>
            <div className="row">
                <a href="https://ealisa818.github.io/Choose-for-Me/" target="_blank" rel='noreferrer'/>
                <figure className="work-container">
                    <div id="random-generator" className="card-image small-card">
                        <div className="layer"></div>
                    </div>

                    <div className="card-title">
                        <h3>Password Generator</h3>
                    </div>
                    </figure>
            </div>
            <div className="row">
                <a href="https://ealisa818.github.io/Daily-Calendar/" target="_blank" rel='noreferrer' />
                <figure className="work-container">
                    <div id="random-generator" className="card-image small-card">
                        <div className="layer"></div>
                    </div>

                    <div className="card-title">
                        <h3>Daily Calendar</h3>
                    </div>
                    </figure>
            </div>

        </div>
    )
}