import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component
{
    render() {
        return (
            <div className="Home">
                <h1>Petful</h1>
                <p>Petful is an adoption agency where you can adopt the most recent pet.</p>
                <Link to="/adopt">Adopt a pet</Link>
            </div>
        )
    }
}

export default Home;