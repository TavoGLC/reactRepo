(window.webpackJsonpstopwatch=window.webpackJsonpstopwatch||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(1),r=n.n(o),l=n(3),s=n(4),u=n(6),c=n(5),p=n(7);function h(t){var e=t.toString(16);return 1===e.length?"0"+e:e}var m={TimerFormat:function(t){return Math.floor(t%864e4/36e4)+"h "+Math.floor(t%36e4/6e3)+"m "+Math.floor(t%6e3/100)+"s "+Math.floor(10*t%1e3)+"ms "},CountToRGB:function(t){var e,n,a,i=Math.floor(t%6e3/100);return e=Math.floor(4.5*i),n=255,a=255,"#"+h(e)+h(n)+h(a)}},f={color:"#ff901f",margin:"5px",alignItems:"center",fontSize:"25px",textShadow:"2px 2px 5px white",fontFamily:"Century Gothic ",listStyle:"none"},x={fontFamily:"Century Gothic",backgroundColor:"#8c1eff",padding:"15px 32px",margin:"4px 2px",color:"white",fontSize:"15px",border:"none",borderRadius:"8px",boxShadow:"0px 4px 4px 0px #f222ff"},y={fontFamily:"Century Gothic",backgroundColor:"#ff901f",padding:"15px 32px",margin:"4px 2px",color:"white",fontSize:"15px",border:"none",borderRadius:"8px",boxShadow:"0px 4px 4px 0px #ffd319"},d=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={count:0,laps:[],timerRunning:!1},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"tick",value:function(){this.setState({count:this.state.count+1})}},{key:"startTimer",value:function(){clearInterval(this.timer),this.timer=setInterval(this.tick.bind(this),10)}},{key:"stopTimer",value:function(){clearInterval(this.timer)}},{key:"resetTimer",value:function(){this.setState({count:0}),this.setState({laps:[]})}},{key:"handleLap",value:function(){var t=m.TimerFormat(this.state.count);this.setState({laps:this.state.laps.concat(t)})}},{key:"lapsOutput",value:function(){return 0===this.state.laps.length?null:i.a.createElement("ul",null,this.state.laps.map(function(t){return i.a.createElement("li",{style:f,key:t},t)}))}},{key:"startAction",value:function(){var t=this;return!0===this.state.timerRunning?null:i.a.createElement("button",{style:x,onClick:function(){t.startTimer(),t.setState({timerRunning:!0})}},"Start")}},{key:"stopAction",value:function(){var t=this;return!1===this.state.timerRunning?null:i.a.createElement("button",{style:x,onClick:function(){t.stopTimer(),t.setState({timerRunning:!1})}},"Stop")}},{key:"lapAction",value:function(){return!0===this.state.timerRunning?i.a.createElement("button",{style:x,onClick:this.handleLap.bind(this)},"Lap"):i.a.createElement("button",{style:y},"Lap")}},{key:"resetAction",value:function(){return!1===this.state.timerRunning?i.a.createElement("button",{style:x,onClick:this.resetTimer.bind(this)},"Reset"):i.a.createElement("button",{style:y},"Reset")}},{key:"timerState",value:function(){return!1===this.state.timerRunning?i.a.createElement("h1",{style:{color:"white",fontFamily:"Century Gothic",textShadow:"1px 1px 4px #F148FB"}},m.TimerFormat(this.state.count)):i.a.createElement("h1",{style:{color:m.CountToRGB(this.state.count),fontFamily:"Century Gothic",textShadow:"4px 4px 5px #F148FB"}},m.TimerFormat(this.state.count))}},{key:"render",value:function(){return i.a.createElement("div",{className:"timer"},this.timerState(),i.a.createElement("div",null,this.startAction(),this.stopAction(),this.lapAction(),this.resetAction()),i.a.createElement("div",null,this.lapsOutput()))}}]),e}(a.Component),v=i.a.createElement("h1",{style:{color:"#F148FB",fontSize:"50px",textShadow:"5px 5px 8px #00C2BA"}},"Stop Watch App");r.a.render(v,document.getElementById("Welcome")),r.a.render(i.a.createElement(d,null),document.getElementById("Timer"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.e2ed3027.chunk.js.map