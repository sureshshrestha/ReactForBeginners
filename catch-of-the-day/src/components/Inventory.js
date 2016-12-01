import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  loadSamples() {

  }

  render () {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
