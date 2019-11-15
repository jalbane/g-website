(this["webpackJsonpg-website"]=this["webpackJsonpg-website"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s);t(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(14),l=t(15),o=t(18),m=t(16),u=t(19),p=t(40),h=t(23),d=t(30),g=t.n(d),f=t(31),b=t(36),E=(t(71),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a;try{e=this.props.spec.name}catch(t){t instanceof TypeError&&(e="Error")}try{a=this.props.spec.role,a="HEALING"===this.props.spec.role?"Healer":"DPS"===this.props.spec.role?"Damage":"Tank"}catch(t){t instanceof TypeError&&(a="Error")}return r.a.createElement("div",{className:"character-container"},r.a.createElement("span",null,r.a.createElement("a",{id:"redirect",href:"https://raider.io/characters/us/lightbringer/".concat(this.props.name),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://render-us.worldofwarcraft.com/character/".concat(this.props.tnail),alt:""}))),r.a.createElement("span",null," ",r.a.createElement("strong",null," ",this.props.name," ")," "),r.a.createElement("span",null," ",e),r.a.createElement("span",null," ",a))}}]),a}(n.Component)),k=(t(72),t(73),t(52),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={blizzResponse:"",loading:!0,raider:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(g.a.mark((function e(){var a,t,n,r=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us.battle.net/oauth/token",{method:"POST",body:"grant_type=client_credentials",headers:{Authorization:"Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=","Content-Type":"application/x-www-form-urlencoded"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,this.setState({blizzResponse:t.access_token}),n="https://us.api.blizzard.com/wow/guild/Lightbringer/NFA?fields=members&locale=en_US&access_token=",n+=this.state.blizzResponse,e.next=11,fetch(n).then((function(e){return e.json()})).then((function(e){return r.setState(Object(f.a)({},"raider",e.members))}));case 11:this.setState({loading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.raider.filter((function(e){return 2!==e.rank&&e.rank<5})).map((function(e,a){return r.a.createElement(E,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec})}));return r.a.createElement("div",{className:"App"},this.state.loading?r.a.createElement("div",{className:"loading-banner"},r.a.createElement("h1",null,"Loading...")):r.a.createElement("div",null,e))}}]),a}(n.Component)),y=t(33),v=t(41),w=t(34),j=(t(74),t(75),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rankings-row"},r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h5",null," ",this.props.raidSummary.displayName," ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.summary," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.realm," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.world," "))}}]),a}(r.a.Component)),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bod:{},uldir:{},cos:{},tep:{}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(g.a.mark((function e(){var a,t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,fetch("https://raider.io/api/v1/guilds/profile?region=us&realm=lightbringer&name=nfa&fields=raid_rankings");case 8:return a=e.sent,e.next=11,a.json();case 11:n=e.sent,this.fillRankings("uldir","uldir",t,n,"Uldir"),this.fillRankings("bod","battle-of-dazaralor",t,n,"Battle of Dazar'alor"),this.fillRankings("cos","crucible-of-storms",t,n,"Crucible of Storms"),this.fillRankings("tep","the-eternal-palace",t,n,"Eternal Palace");case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillRankings",value:function(e,a,t,n,r){"cos"===e?this.setState(Object(f.a)({},e,{displayName:[r],summary:t.raid_progression[a].summary,world:n.raid_rankings[a].heroic.world,realm:n.raid_rankings[a].heroic.realm})):this.setState(Object(f.a)({},e,{displayName:[r],summary:t.raid_progression[a].summary,world:n.raid_rankings[a].mythic.world,realm:n.raid_rankings[a].mythic.realm}))}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:"rankings-page"},r.a.createElement("div",{className:"rankings-container"},r.a.createElement("div",{className:"rankings-row"},r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Raid Name ")),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Progress ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Realm Ranking ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," World Ranking ")," ")),r.a.createElement(j,{raidSummary:e.uldir}),r.a.createElement(j,{raidSummary:e.bod}),r.a.createElement(j,{raidSummary:e.cos}),r.a.createElement(j,{raidSummary:e.tep})))}}]),a}(r.a.Component),O=(t(76),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={load:!0},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{history:"browserHistory"},r.a.createElement(y.a,{className:"main-bar",bg:"light",expand:"lg",style:{"min-height":"120px","font-size":"24px",width:"100%"}},r.a.createElement(y.a.Brand,{href:"",style:{"font-size":"24px"}},"NFA"),r.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(v.a.Link,null,r.a.createElement("div",{className:"selection"},r.a.createElement(p.b,{to:"",style:{color:"black",textDecoration:"none"}},"Rankings"))),r.a.createElement(v.a.Link,null,r.a.createElement("div",{className:"selection"},r.a.createElement(p.b,{to:"editedApp",style:{color:"black",textDecoration:"none"}},"Roster"))),r.a.createElement(w.a,{title:"Additional Links",id:"basic-nav-dropdown"},r.a.createElement(w.a.Item,{href:"https://raider.io/guilds/us/lightbringer/NFA",target:"_blank"},"Raider.io"),r.a.createElement(w.a.Item,{href:"https://www.wowprogress.com/guild/us/lightbringer/NFA",target:"_blank"},"Wow progress"),r.a.createElement(w.a.Item,{href:"https://www.warcraftlogs.com/guild/id/357706",target:"_blank"},"Warcraft logs"))))),this.state.load?r.a.createElement(h.a,{path:"/",exact:!0,component:N}):null,r.a.createElement(h.a,{path:"/editedApp",component:k}))}}]),a}(n.Component));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,a,t){e.exports=t(100)},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.578532c8.chunk.js.map