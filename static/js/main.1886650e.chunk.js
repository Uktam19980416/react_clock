(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(8),r=n.n(c),a=n(2),o=n(3),i=n(5),s=n(4),u=n(1),l=n.n(u),p=(n(7),n(0)),d=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={count:t.props.from},t.intervalId=void 0,t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalId=setInterval((function(){t.intervalId&&1===t.state.count&&clearInterval(t.intervalId),t.setState((function(t){return{count:t.count-1}}))}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.from!==t.from&&this.setState({count:this.props.from})}},{key:"componentWillUnmount",value:function(){this.intervalId&&clearInterval(this.intervalId)}},{key:"render",value:function(){var t=this.state.count;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{children:t||"Done!"})})}}]),n}(l.a.Component),j=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isStarted:!1,limit:5},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,c=e.limit;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"React clock"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.setState({isStarted:!0})},children:"Start"}),Object(p.jsx)("button",{type:"button",onClick:function(){t.setState({isStarted:!1})},children:"Stop"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return t.setState({limit:10})},children:"10"}),n&&Object(p.jsx)(d,{from:c})]})}}]),n}(l.a.Component),b=j;r.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))},7:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.1886650e.chunk.js.map