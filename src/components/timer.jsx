import React, { Component } from 'react';

function TimerFormat(currentCount){
  
  var hours = Math.floor((currentCount % (100 * 60 * 60 * 24)) / (100 * 60 * 60));
  var minutes = Math.floor((currentCount % (100 * 60 * 60)) / (100 * 60));
  var seconds = Math.floor((currentCount % (100 * 60)) / 100);
  var miliseconds = Math.floor((currentCount*10) % 1000);

  var format= hours + "h "+ minutes + "m " + seconds + "s " + miliseconds + "ms ";
   return (format);
}
 
class Timer extends Component {
    constructor (props) {
        super(props)
        this.state = {count: 0,
          laps:[],
          timerRunning:false}
      }
//Timer body
    componentWillUnmount () {
        clearInterval(this.timer)
      }
    tick () {
        this.setState({count: (this.state.count + 1)})
      }
    startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 10)
      }
    stopTimer () {
        clearInterval(this.timer)
      }
    resetTimer () {
        this.setState({count:0})
        this.setState({laps:[]})
      }
    handleLap(){
      var currentCount=TimerFormat(this.state.count)
      this.setState({laps: this.state.laps.concat(currentCount)})
    }
//Add laps 
    lapsOutput(){
      if (this.state.laps.length===0){
          return null;
      }
      else{
          return (<ul>
              {this.state.laps.map(laps =><li key={laps}>{laps}</li>)}
          </ul>
          )
      }
  }
//buttons 
    startAction(){
      if (this.state.timerRunning===true){
        return null;
    } 
      else{
       return (<button onClick={()=>{this.startTimer(); this.setState({timerRunning:true});}}>Start</button>);
      }
    }
    stopAction(){
      if (this.state.timerRunning===false){
        return null;
      } 
      else{
        return (<button onClick={()=>{this.stopTimer(); this.setState({timerRunning:false});}}>Stop</button>);
      }
    }
    lapAction(){
      if (this.state.timerRunning===true){
        return <button onClick={this.handleLap.bind(this)}>Lap</button>;
      } 
      else{
        return (<button>Lap</button>);
      }
    }
    resetAction(){
      if (this.state.timerRunning===false){
        return <button onClick={this.resetTimer.bind(this)}>Reset</button>;
      } 
      else{
        return (<button>Reset</button>);
      }
    }
    render () {
        return (
        <div className='timer'>
            <h1>{TimerFormat(this.state.count)}</h1>
            <div>
            {this.startAction()}
            {this.stopAction()}
            {this.lapAction()}
            {this.resetAction()}
            </div>
            <div>
            {this.lapsOutput()}
            </div>
        </div>
        )
    }
}
export default Timer;