import React  from 'react';


class PlayerList extends React.Component {
    constructor() {
        super(); 
        this.state = {
            players: [],
        };
       }
  
  
    componentDidMount() {
      fetch('http://localhost:5000/api/players')
     
        .then(res => res.json())
        
        .then(players => this.setState({players: players}))
        .catch(err => console.log("noooo: ", err))
    }
  
 render() {
         const {players} = this.state;
         console.log(players)
      
return (
        
            <div data-testid="playerList" className="player-list">
              {players.map(player =>
                <div className="player-card" key={player.id}>
                  <h3>{player.name}</h3> 
                  <p>Country: {player.country}</p>
                  <p>Searches: {player.searches}</p>
                </div>
              )}
            </div>
          );
        }
    }
    export default PlayerList;