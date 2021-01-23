import React from 'react';
import AdoptAPet from '../AdoptAPet/AdoptAPet';

import config from '../config';

class AdoptionLine extends React.Component
{

    constructor() {
        super();
        this.state = {
            people: [],
            dog: null,
            cat: null,
            submitted: false,
            atFront: false,
            canAdoptDog: false,
            hasAdoptedDog: false,
            hasAdoptedCat: false,
            canAdoptCat: false,
            name: {
                value: ''
            }
        }
    }

    nameUpdated = (name) => {
        this.setState({name: {value: name}});
    }

    adoptDogAndCat = () => {
        return fetch(`${config.API_ENDPOINT}/pets`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify({type: 'dogcat'})
        }).then(res => res.json())
    }

    fetchPeople = (minusOne=false) => {
        let apistr = `${config.API_ENDPOINT}/people/`;
        apistr += minusOne ? 'minusone' : '';
        console.log(apistr);
        return fetch(apistr).then(
            res => res.json()
        ).then(data => {
            if(data[0] === this.state.name.value) {
                console.log('At front');
                this.setState({
                    people: data,
                    canAdoptDog: true,
                    canAdoptCat: true,
                    atFront: true
                });
            } else {
                this.setState({people: data});    
            }
            return data;
        })
    }

    updateTickingToFront = () => {
        this.fetchPeople(true).then(data => {
            if(this.state.atFront) {
                setTimeout(this.updateTickingToBack, 5000);
            } else {
                setTimeout(this.updateTickingToFront, 5000);
            }
        })
        this.adoptDogAndCat().then(data => {
            this.fetchDogAndCat();
        })
    }

    updateTickingToBack = () => {
        if(this.state.people.length < 4) {
            setTimeout(this.updateTickingToBack, 5000);
        }
        fetch(`${config.API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(res => res.json()).then(data => {
            this.fetchPeople();
        })
    }

    submitName = () => {
        this.setState({submitted: true});
        fetch(`${config.API_ENDPOINT}/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({person: this.state.name.value})
        }).then(res => res.json()).then(data => {
            console.log(data);
            setTimeout(this.updateTickingToFront, 5000);
            this.setState({people: [...this.state.people, this.state.name.value]})
        })
    }

    fetchDogAndCat = () => {
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

    checkAndRemovePersonOnAdoption = () => {
        if(this.state.people[0] === this.state.name.value) {
            this.fetchPeople(true);
        }
    }

    adoptDog = () => {
        console.log('Adopting a dog');
        fetch(`${config.API_ENDPOINT}/pets`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify({type: 'dog'})
        }).then(res => res.json()).then(data => {
            if(data.status === 0) {
                this.setState({hasAdoptedDog: true, canAdoptDog: false})
                this.fetchDogAndCat();
                this.checkAndRemovePersonOnAdoption();
            }
        })
    }

    adoptCat = () => {
        console.log('Adopting a cat');
        fetch(`${config.API_ENDPOINT}/pets`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify({type: 'cat'})
        }).then(res => res.json()).then(data => {
            if(data.status === 0) {
                this.setState({hasAdoptedCat: true, canAdoptCat: false})
                this.fetchDogAndCat();
                this.checkAndRemovePersonOnAdoption();
            }
        })
    }

    componentDidMount() {
        this.fetchDogAndCat();
        this.fetchPeople();
    }

    render() {
        return (
            <div className="AdoptionLine">
                <h1>Adoption Line</h1>
                {this.state.hasAdoptedDog ? 
                <h1>You adopted a dog!</h1> : ''}
                {this.state.hasAdoptedCat ? 
                <h1>You adopted a cat!</h1> : ''}
                <ul>
                {this.state.people.map((person) => {
                    return <li key={person}>{person}</li>
                })}
                {this.state.submitted ? 
                    <></> :
                    <>
                    <label htmlFor="name">Name: </label>
                    <input id="name" onChange={e => this.nameUpdated(e.target.value)} />
                    <button onClick={e => this.submitName()}>Enter the Queue</button>
                    </>
                }
                </ul>
                <AdoptAPet 
                    dog={this.state.dog} 
                    cat={this.state.cat} 
                    canAdoptDog={this.state.canAdoptDog} 
                    canAdoptCat={this.state.canAdoptCat}
                    adoptDog={this.adoptDog}
                    adoptCat={this.adoptCat} />
            </div>
        )
    }
}

export default AdoptionLine;