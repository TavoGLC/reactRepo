import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Timer from './components/timer'

const element = <h1>Stop Watch App</h1>;

ReactDOM.render(element,document.getElementById('Welcome'))
ReactDOM.render(<Timer/>,document.getElementById('Timer'))