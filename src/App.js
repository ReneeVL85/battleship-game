import React from 'react';
import GameModel from './models/GameModel';
import GameListComponent from "./components/GameListComponent";
import NewGameComponent from "./components/NewGameComponent";
import GridComponent from "./components/GridComponent";


class App extends React.Component {
  constructor() {
    super();

    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));

    this.state = {
      games: [],
      currentGame: null
    };
  }

  updateList(){
    this.setState({
      games: this.games.resources
    })
  }

  createGame(newPlayer) {
    this.games.addresources({
    playerOne: newPlayer
    });
  }

    render() {
        return (
            <div>
              <h1>battleship</h1>
              <NewGameComponent onCreate={this.createGame.bind(this)}/>
              <GameListComponent games={this.state.games}/>
              <GridComponent />
            </div>
        );
    }
}

export default App;
