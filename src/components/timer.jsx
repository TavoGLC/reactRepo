import React, { Component } from "react";
import helpers from "./helperFunctions.js";

const divStyle = {
  color: "#F148FB",
  margin: "5px",
  alignItems: "center",
  fontSize: "20px",
  textShadow: "1px 1px #00C2BA"
};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, laps: [], timerRunning: false };
  }
  //Timer body
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 10);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ count: 0 });
    this.setState({ laps: [] });
  }
  handleLap() {
    var currentCount = helpers.TimerFormat(this.state.count);
    this.setState({ laps: this.state.laps.concat(currentCount) });
  }
  //Add laps
  lapsOutput() {
    if (this.state.laps.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {this.state.laps.map(laps => (
            <li style={divStyle} key={laps}>
              {laps}
            </li>
          ))}
        </ul>
      );
    }
  }
  //buttons
  startAction() {
    if (this.state.timerRunning === true) {
      return null;
    } else {
      return (
        <button
          onClick={() => {
            this.startTimer();
            this.setState({ timerRunning: true });
          }}
        >
          Start
        </button>
      );
    }
  }
  stopAction() {
    if (this.state.timerRunning === false) {
      return null;
    } else {
      return (
        <button
          onClick={() => {
            this.stopTimer();
            this.setState({ timerRunning: false });
          }}
        >
          Stop
        </button>
      );
    }
  }
  lapAction() {
    if (this.state.timerRunning === true) {
      return <button onClick={this.handleLap.bind(this)}>Lap</button>;
    } else {
      return <button style={{ color: "red" }}>Lap</button>;
    }
  }
  resetAction() {
    if (this.state.timerRunning === false) {
      return <button onClick={this.resetTimer.bind(this)}>Reset</button>;
    } else {
      return <button style={{ color: "red" }}>Reset</button>;
    }
  }
  timerState() {
    if (this.state.timerRunning === false) {
      return (
        <h1 style={{ color: "white" }}>
          {helpers.TimerFormat(this.state.count)}
        </h1>
      );
    } else {
      return (
        <h1 style={{ color: helpers.CountToRGB(this.state.count) }}>
          {helpers.TimerFormat(this.state.count)}
        </h1>
      );
    }
  }
  render() {
    return (
      <div className="timer">
        {this.timerState()}
        <div>
          {this.startAction()}
          {this.stopAction()}
          {this.lapAction()}
          {this.resetAction()}
        </div>
        <div>{this.lapsOutput()}</div>
      </div>
    );
  }
}
export default Timer;
