(this["webpackJsonpg-website"]=this["webpackJsonpg-website"]||[]).push([[0],{63:function(e,t,a){e.exports=a(96)},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),c=a.n(i),s=(a(68),a(31)),l=a.n(s),o=a(36),m=a(18),u=a(19),h=a(21),p=a(20),d=a(22),E=(a(70),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props.itemList.key;return"TANK"===this.props.itemList.raider[t].character.spec.role?e="Tank":"HEALING"===this.props.itemList.raider[t].character.spec.role?e="Healer":"DPS"===this.props.itemList.raider[t].character.spec.role&&(e="Dps"),this.props.itemList.key++,n.a.createElement("div",{id:"row"},n.a.createElement("span",{className:"cell"},n.a.createElement("a",{id:"redirect",href:"https://raider.io/character/us/lightbringer/".concat(this.props.itemList.raider[t].character.name),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"https://render-us.worldofwarcraft.com/character/".concat(this.props.itemList.raider[t].character.thumbnail),alt:"char_thumbnail"}))),n.a.createElement("span",{className:"cell"},this.props.itemList.raider[t].character.name," "),n.a.createElement("span",{className:"cell"},this.props.itemList.raider[t].character.spec.name," "),n.a.createElement("span",{className:"cell"},e," "))}}]),t}(r.Component)),b=(a(71),a(72),a(51),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={blizzResponse:"",loading:!0,raider:[],key:0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,r,n,i,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us.battle.net/oauth/token",{method:"POST",body:"grant_type=client_credentials",headers:{Authorization:"Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=","Content-Type":"application/x-www-form-urlencoded"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,this.setState({blizzResponse:a}),r="https://us.api.blizzard.com/wow/guild/Lightbringer/NFA?fields=members&locale=en_US&access_token=",r+=this.state.blizzResponse.access_token,e.next=11,fetch(r);case 11:return n=e.sent,e.next=14,n.json();case 14:for(i=e.sent,c=0,s=0;c<i.members.length;)2!==i.members[c].rank&&i.members[c].rank<5&&(this.state.raider[s]=i.members[c],s++),c++;this.setState({loading:!1});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;return n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement("div",{className:"Faketable"},this.state.loading?n.a.createElement("div",null,n.a.createElement("h1",null,"Loading...")):n.a.createElement("div",null,n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e}),n.a.createElement(E,{itemList:e})))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(40),L=a(23),v=a(32),g=a(34),j=a(25),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,this.props.data.uldir.summary,"asdfasdf ",n.a.createElement("br",null),n.a.createElement("br",null))}}]),t}(n.a.Component),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={bod:{},uldir:{},cos:{},tep:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({uldir:a.raid_progression.uldir}),this.setState({bod:a.raid_progression["battle-of-dazaralor"]}),console.log(this.state);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return e=this.state,n.a.createElement(f.a,null,n.a.createElement(v.a,{bg:"light",expand:"lg"},n.a.createElement(v.a.Brand,{href:"#home"},"React-Bootstrap"),n.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(g.a,{className:"mr-auto"},n.a.createElement(g.a.Link,{href:"/Home"},n.a.createElement(f.b,{to:""},"Home")),n.a.createElement(g.a.Link,{href:"Roster.js"},n.a.createElement(f.b,{to:"/App"},"Roster")),n.a.createElement(j.a,{title:"Dropdown",id:"basic-nav-dropdown"},n.a.createElement(j.a.Item,{href:"#action/3.1"},"Action"),n.a.createElement(j.a.Item,{href:"#action/3.2"},"Another action"),n.a.createElement(j.a.Item,{href:"#action/3.3"},"Something"),n.a.createElement(j.a.Divider,null),n.a.createElement(j.a.Item,{href:"#action/3.4"},"Separated link"))))),n.a.createElement(L.c,null,n.a.createElement(L.a,{path:"/Home",component:t,exact:!0}),n.a.createElement(L.a,{path:"/App",component:b,exact:!0})),n.a.createElement(k,{data:e}))}}]),t}(r.Component);c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.3a50399a.chunk.js.map