import React from 'react';

import PetFrame from '../PetFrame/PetFrame';

import config from '../config';

class AdoptAPet extends React.Component
{

    render() {
        return (
            <div className="AdoptAPet">
                <PetFrame pet={this.props.dog} type="dog" atFront={this.props.canAdoptDog} adopt={this.props.adoptDog} />
                <PetFrame pet={this.props.cat} type="cat" atFront={this.props.canAdoptCat} adopt={this.props.adoptCat} />
            </div>
        );
    }
}

export default AdoptAPet;