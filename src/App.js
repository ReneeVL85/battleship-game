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
    let boats = this.state.boats;

    if (i === true && i-10 === true && i-20 === true && i-30 === true && i-40 === true && i-50 === true  ||
        i+10 === true && i === true && i-10 === true && i-20 === true && i-30 === true && i-40 === true ||
        i+20 === true && i+10 === true && i === true && i-10 === true && i-20 === true && i-30 === true ||
        i+30 === true && i+20 === true && i+10 === true && i === true && i-10 === true && i-20 === true ||
        i+40 === true && i+30 === true && i+20 === true && i+10 === true && i === true && i-10 === true ||
        i+50 === true && i+40 === true && i+30 === true && i+20 === true && i+10 === true && i === true ||
        i === true && i+1 === true && i+2 === true && i+3 === true && i+4 === true && i+5 === true ||
        i-1 === true && i === true && i+1 === true && i+2 === true && i+3 === true && i+4 === true ||
        i-2 === true && i-1 === true && i === true && i+1 === true && i+2 === true && i+3 === true ||
        i-3 === true && i-2 === true && i-1 === true && i === true && i+1 === true && i+2 === true ||
        i-4 === true && i-3 === true && i-2 === true && i-1 === true && i === true && i+1 === true ||
        i-5 === true && i-4 === true && i-3 === true && i-2 === true && i-1 === true && i === true
      ){ return

      }

    if (i === true && i-10 === true && i-20 === true && i-30 === true && i-40 === true ||
        i+10 === true && i === true && i-10 === true && i-20 === true && i-30 === true ||
        i+20 === true && i+10 === true && i === true && i-10 === true && i-20 === true ||
        i+30 === true && i+20 === true && i+10 === true && i === true && i-10 === true ||
        i+40 === true && i+30 === true && i+20 === true && i+10 === true && i === true ||
        i === true && i+1 === true && i+2 === true && i+3 === true && i+4 === true ||
        i-1 === true && i === true && i+1 === true && i+2 === true && i+3 === true ||
        i-2 === true && i-1 === true && i === true && i+1 === true && i+2 === true ||
        i-3 === true && i-2 === true && i-1 === true && i === true && i+1 === true ||
        i-4 === true && i-3 === true && i-2 === true && i-1 === true && i === true
      ){

      }

    if (i === true && i-10 === true && i-20 === true && i-30 === true ||
        i+10 === true && i === true && i-10 === true && i-20 === true ||
        i+20 === true && i+10 === true && i === true && i-10 === true ||
        i+30 === true && i+20 === true && i+10 === true && i === true ||
        i === true && i+1 === true && i+2 === true && i+3 === true ||
        i-1 === true && i === true && i+1 === true && i+2 === true ||
        i-2 === true && i-1 === true && i === true && i+1 === true ||
        i-3 === true && i-2 === true && i-1 === true && i === true
      ){

      }

    if (i === true && i-10 === true && i-20 === true ||
        i+10 === true && i === true && i-10 === true ||
        i+20 === true && i+10 === true && i === true ||
        i === true && i+1 === true && i+2 === true ||
        i-1 === true && i === true && i+1 === true ||
        i-2 === true && i-1 === true && i === true
      ){

      }

    if (i === true && i-10 === true ||
        i+10 === true && i === true ||
        i-1 === true && i === true
      ){

      }
    else{
      // place your ships
    }
  }

  storeBoat(){

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
