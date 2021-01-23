import React from 'react';

import config from '../config';

import './PetFrame.css';

class PetFrame extends React.Component
{

    constructor() {
        super();
        this.state = {
            adopted: false
        }
    }

    render() {
        if(!this.props.pet || this.props.pet == {}) {
            return (<div className="PetFrame"></div>);
        }
        return (
            <div className="PetFrame">
                <h1>{this.props.pet.name}</h1>
                <img src={this.props.pet.imageURL} />
                <p>{this.props.pet.story}</p>
                <p>Age: {this.props.pet.age}</p>
                <p>Gender: {this.props.pet.gender}</p>
                <p>Description: {this.props.pet.description}</p>
                <p>Breed: {this.props.pet.breed}</p>
                {this.state.adopted ? <p>Adopted!</p> : <button onClick={e => this.props.adopt(this.props.type)} disabled={!this.props.atFront}>Adopt</button>}
            </div>
        );
    }
}

export default PetFrame;