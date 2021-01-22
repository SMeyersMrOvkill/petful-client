import React from 'react';

import PetFrame from '../PetFrame/PetFrame';

import config from '../config';

class AdoptAPet extends React.Component
{

    render() {
        return (
            <div className="AdoptAPet">
                <PetFrame pet={this.props.dog} type="dog" atFront={this.props.atFront} />
                <PetFrame pet={this.props.cat} type="cat" atFront={this.props.atFront} />
            </div>
        );
    }
}

export default AdoptAPet;