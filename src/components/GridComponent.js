import React from "react";
import ReactDOM from 'react-dom';
import GridList from 'material-ui/lib/grid-list/grid-list';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

class GridComponent extends React.Component{


  render() {
    return
      (
        <div style={styles.root}>
          <GridList cellHeight={200} style={styles.gridList}>
          </GridList>
        </div>
      )
    }
}
export default GridComponent;
