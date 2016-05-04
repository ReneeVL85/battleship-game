import React from 'react';
import BaseModel from "./models/BaseModel"
import GameModel from './models/GameModel';
import GameListComponent from "./components/GameListComponent";
import NewGameComponent from "./components/NewGameComponent";
import GridComponent from "./components/GridComponent";
import Inventory from "./components/Inventory";

const boardStyle = {
  width: 400,
  height: 800,
  border: "1px solid #000",
  margin: "auto"
};


class App extends React.Component {
  constructor() {
    super();

    this.games = new GameModel();
    this.games.subscribe(this.updateList.bind(this));

    this.grid = [];
    for (let i=0; i < 200; i++) {
    this.grid.push(i);
    };

    this.state = {
      games: [],
      currentGame: null,
      boats: []

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

  cellHasBoat(cell) {
  let hasBoat = this.state.boats.filter(function(boat) {
    if (boat === cell) {
      return true;
    } else {
      return false;
    }
  });

    return hasBoat.length > 0;
  }

  getBoatIndex(cell) {
    if (this.cellHasBoat(cell)) {
      return this.state.boats.findIndex(function(boat) {
        return boat === cell;
      });
    }
  }

  addBoat(cell) {
    let boats = this.state.boats;

    if (this.cellHasBoat(cell)) {
      let index = this.getBoatIndex(cell);
      boats.splice(index, 1);
    } else {
      boats.push(cell);
    }

    this.setState({
      boats: boats
    });
  }

  countBoats(cell) {
    let check = [-11, -10, -9, -1, 0, +1, +9, +10, +11]
    for (i of check) {
      
    }


  }


    render() {
      console.log("haihai")
        return (
            <div>
              <h1>Battleship</h1>
              <NewGameComponent onCreate={this.createGame.bind(this)}/>
              <GameListComponent games={this.state.games}/>
              <div>
              <Inventory boats={this.state.boats}/>
                <div style={boardStyle}>
                {this.grid.map(function(key) {
                  return(<GridComponent key={key} boat={this.cellHasBoat(key)} index={key} onClick={this.addBoat.bind(this)}/>);}.bind(this))}
                </div>
              </div>);
            </div>
        );
    }
}

export default App;
