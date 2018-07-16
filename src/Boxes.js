import React, { Component } from 'react';
import Box from './Box';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      maxLength: 75,
      length: 0,
      size: 93 };
    this.direction = 'up';
    this.changeLenght = this.changeLenght.bind(this);
    this.startProcess = this.startProcess.bind(this);
    this.freezeProcess = this.freezeProcess.bind(this);
    this.unfreezeProcess = this.unfreezeProcess.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.startProcess();
  }

  startProcess() {
    let intervalId = setInterval(this.changeLenght, 40);
    this.setState({ intervalId: intervalId });
  }

  changeLenght() {
    // add boxes
    if(this.direction === 'up') {
      let newLength = this.state.length + 1;
      this.setState({ length: newLength,
        boxes: this.loop(newLength) });
      this.direction = newLength === this.state.maxLength ? 'down' : 'up';
    } else {
      // remove boxes
      let newLength = this.state.length - 1;
      this.setState({ length: newLength,
        boxes: this.loop(newLength) });
      this.direction = newLength ? 'down' : 'up';
    }
  }

  freezeProcess() {
    clearInterval(this.state.intervalId);
  }

  unfreezeProcess() {
    this.startProcess();
  }

  handleClick() {
    let newLength = this.state.length * 2;
    let newBoxSize = this.state.size / 2;
    let newMaxLength = this.state.maxLength * 2;
    this.setState({
      length: newLength,
      size: newBoxSize,
      maxLength: newMaxLength,
    });
  }

  loop(arrLength) {
    let boxArray = [];
    for (let i = 0; i < arrLength; i++) {
      boxArray.push(<Box key={i} onHover={this.freezeProcess}
        onLeaveHover={this.unfreezeProcess} handleClick={this.handleClick} size={this.state.size}/>);
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