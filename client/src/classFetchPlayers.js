import React, { Component } from 'react';
import axios from 'axios';

export default class APICall extends Component {
    constructor() {
        super()

        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios.get(`https://http://localhost:5000/api/players`)
            .then(res => this.setState({players: players}))
            .catch(err => console.log(err))
    }

    render() {
        const {players} = this.state;
        console.log(players)

        return (
            <div>
                {players.map(player => 
                    <div key={player.id}>
                        <h2>{player.name}</h2>
                        <h3>Country: {player.country}</h3>
                        <h3>Serches: {player.searches}</h3>
                    </div>
                    )}
            </div>
        )
    }
}