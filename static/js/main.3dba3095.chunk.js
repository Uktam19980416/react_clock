(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){console.log(t.state.time),t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentDidUpdate",value:function(t){t.from!==this.props.from&&console.log("The Clock updated from ".concat(t.from," to ").concat(this.props.from))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.time;return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("p",{children:t})})}}]),n}(u.a.Component),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:1},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isClockVisible,c=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),Object(m.jsx)("p",{children:"Clock Name: ".concat(c)}),Object(m.jsxs)("p",{children:[Object(m.jsx)("p",{children:"Local time:"}),n&&Object(m.jsx)(b,{from:c})]}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Start"}),Object(m.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Stop"}),Object(m.jsx)("button",{type:"button",onClick:function(){return t.setState({clockName:Math.round(1e3*Math.random())})},children:"Random Clock Name"})]})}}]),n}(u.a.Component),j=h;o.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3dba3095.chunk.js.map