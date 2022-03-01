import React from 'react';


export default function About() {
    return (
        <div>
            <img id="profile_pic" src={ProfilePic} alt="Alisa Wolfram" />

            <div className='about-me'>

                <div>
                    <h2>About Me</h2>
                    <p> I am a graduate of the University of Georgia with a degree in Actuarial Science. I love problem solving and new challenges and after 15+ years of teaching both here in the US and abroad (Germany and Thailand), I decided to make a career. I am now a full stack web developer. When I am not working, I love traveling, cooking, and learning about new cultures.</p>
                </div>
            </div>
        </div>
    )
}