import React from 'react';
import '../styles/AboutMe.css';
import '../styles/theme.css';

const AboutMe = () => {
    return (
        <div className="info-container">
            <div className='text'>
                <p className='paragraph'>Hello, my name is [Your Name]. I am a [Your Profession] with [Number of Years] years of experience in [Your Field]. I have a passion for [Your Interests/Hobbies] and enjoy [Other Relevant Information].</p>
            </div>
            <img src="path_to_your_image.jpg" alt="Sanjna Tailor headshot" />

            <div className="text">
                <p className='paragraph'>In my free time, I like to [Your Hobbies/Interests]. I am also skilled in [Other Relevant Skills]. Feel free to reach out to me at [Your Email Address] for any inquiries or collaborations.</p>
            </div>
        </div>
    );
};

export default AboutMe;