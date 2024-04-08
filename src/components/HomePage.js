import React from 'react';
import '../styles/theme.css';

const HomePage = () => {
    return (
        <div>
            <p className="paragraph" style={{ marginBottom: '5px', fontSize: '0.1em', fontWeight: 'lighter'}}> <i>Welcome to the Sunny Side...</i></p>

            <h className="big-header">I'm Sanjna</h>
            <p className="paragraph" style={{ marginTop: '10px'}}>I'm a full-stack web developer and a student at the University of Washington. I'm passionate about creating beautiful, user-friendly websites and applications. I'm also a huge fan of coffee, dogs, and the color yellow.</p>
            <main>
                {/* Add your content here */}
            </main>
        </div>
    );
};

export default HomePage;