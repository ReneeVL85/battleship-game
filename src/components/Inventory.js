import React from 'react';
import Boat from './Boat';

class Inventory extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        { key: 1, name: "Aircraft carrier", size: 6 },
        { key: 2, name: "Battleship", size: 5 },
        { key: 3, name: "Submarine", size: 4 },
        { key: 4, name: "Cruiser", size: 3 },
        { key: 5, name: "Destroyer", size: 2 },
      ]
    };
  }

  render() {
    return (<div>
      {this.state.inventory.map(function (ship) {
        return (<Boat key={ship.key} size={ship.size} name={ship.name}/>);
      }.bind(this))}
    </div>);
  }
}

export default Inventory;
