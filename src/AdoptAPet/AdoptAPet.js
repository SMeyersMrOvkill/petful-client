import React from 'react';

import PetFrame from '../PetFrame/PetFrame';

import config from '../config';

class AdoptAPet extends React.Component
{
    constructor() {
        super();
        this.state = {
            dog: null,
            cat: null,
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/pets/dog`).then(
            res => res.json()
        ).then(data => {
            this.setState({dog: data})
        })
        fetch(`${config.API_ENDPOINT}/pets/cat`).then(
            res => res.json()
        ).then(data => {
            this.setState({cat: data})
        })
    }

    render() {
        return (
            <div className="AdoptAPet">
                <PetFrame pet={this.state.dog} type="dog" />
                <PetFrame pet={this.state.cat} type="cat" />
            </div>
        );
    }
}

export default AdoptAPet;