import React, { Component } from 'react';
import Box from './Box';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      maxLength: 75,
      length: 0 };
    this.direction = 'up';
    this.changeLenght = this.changeLenght.bind(this);
  }

  componentDidMount() {
    setInterval(this.changeLenght, 40);
  }

  changeLenght() {
    // add boxes
    if(this.direction === 'up') {
      let newLength = this.state.length + 1;
      this.setState({ length: newLength,
        boxes: this.loop(newLength) });
      this.direction = newLength === 75 ? 'down' : 'up';
    } else {
      // remove boxes
      let newLength = this.state.length - 1;
      this.setState({ length: newLength,
        boxes: this.loop(newLength) });
      this.direction = newLength ? 'down' : 'up';
    }
  }

  loop(arrLength) {
    let boxArray = [];
    for (let i = 0; i < arrLength; i++) {
      boxArray.push(<Box key={i}/>);
    }
    return boxArray;
  }

  render() {
    return (
      <div className="Boxes">
        {this.state.boxes}
      </div>
    );
  }
}

export default Boxes;