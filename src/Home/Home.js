import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component
{
    render() {
        return (
            <div className="Home">
                <h1>Petful</h1>
                <img src="https://i.pinimg.com/originals/29/ce/07/29ce07338b632a3131d592ae76749879.jpg" width="300" />
                <p>Petful is an adoption agency where you can adopt the most recent pet.</p>
                <Link to="/line">Adopt a pet</Link>
                <p>To use the app, first click the link above.</p>
                <p>After you get to the page, it will show you the current state of pet adoption.</p>
                <p>When you enter your name and click submit, you will be added to the list of people waiting to adopt a pet.</p>
                <p>The users in front of you will make their decisions about whether they want to adopt the pet or not.</p>
                <p>This is a tough choice, because you can only adopt the pet that has been in the shelter the longest. So they can take up to 5 seconds to make their decision.</p>
                <p>When it's your turn, you will see the pets that are available for you to adopt. You can adopt a dog, a cat, or both.</p>
                <p>When you finally reach the front of the line, people will start lining up behind you.</p>
            </div>
        )
    }
}

export default Home;