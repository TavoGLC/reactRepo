import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timer from "./components/timer";

const divStyle = {
  color: "#F148FB",
  margin: "40px",
  alignItems: "center",
  fontSize: "50px",
  textShadow: "3px 3px 5px #00C2BA"
};

const element = <h1 style={divStyle}>Stop Watch App</h1>;

ReactDOM.render(element, document.getElementById("Welcome"));
ReactDOM.render(<Timer />, document.getElementById("Timer"));
