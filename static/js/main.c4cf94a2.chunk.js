(this["webpackJsonpg-website"]=this["webpackJsonpg-website"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),c=t.n(s);t(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(14),l=t(15),o=t(18),m=t(16),u=t(19),p=t(40),d=t(22),h=t(30),b=t.n(h),g=t(31),f=t(36),k=(t(71),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e,a,t;try{e=this.props.spec.name}catch(r){r instanceof TypeError&&(e="Error")}try{a=null,a="HEALING"===this.props.spec.role?1:"DPS"===this.props.spec.role?2:3}catch(r){r instanceof TypeError&&(a="error")}switch(this.props.class){case 1:t="Warrior";break;case 2:t="Paladin";break;case 3:t="Hunter";break;case 4:t="Rogue";break;case 5:t="Priest";break;case 6:t="Death Knight";break;case 7:t="Shaman";break;case 8:t="Mage";break;case 9:t="Warlock";break;case 10:t="Monk";break;case 11:t="Druid";break;case 12:t="Demon Hunter";break;default:t="Error"}return n.a.createElement("div",{className:"character-container"},n.a.createElement("div",{className:"img-container"},n.a.createElement("a",{id:"redirect",href:"https://raider.io/characters/us/lightbringer/".concat(this.props.name),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"character-img",src:"https://render-us.worldofwarcraft.com/character/".concat(this.props.tnail),alt:""}))),n.a.createElement("span",null," ",n.a.createElement("strong",null," ",this.props.name," ")," "),n.a.createElement("span",null," ",e),n.a.createElement("span",null," ",t),1===a?n.a.createElement("div",{className:"Healer"},"  "):2===a?n.a.createElement("div",{className:"Dps"}," "):3===a?n.a.createElement("div",{className:"Tank"}," "):null)}}]),a}(r.Component)),E=(t(72),t(73),t(53),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={blizzResponse:"",loading:!0,raider:[]},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var a,t,r,n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us.battle.net/oauth/token",{method:"POST",body:"grant_type=client_credentials",headers:{Authorization:"Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=","Content-Type":"application/x-www-form-urlencoded"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,this.setState({blizzResponse:t.access_token}),r="https://us.api.blizzard.com/wow/guild/Lightbringer/NFA?fields=members&locale=en_US&access_token=",r+=this.state.blizzResponse,e.next=11,fetch(r).then((function(e){return e.json()})).then((function(e){return n.setState(Object(g.a)({},"raider",e.members))}));case 11:this.setState({loading:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.raider.filter((function(e){return 2!==e.rank&&e.rank<5})).map((function(e,a){return n.a.createElement(k,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec,class:e.character.class})}));return n.a.createElement("div",{className:"App"},this.state.loading?n.a.createElement("div",{className:"loading-banner"},n.a.createElement("h1",null,"Loading...")):n.a.createElement("div",null,e))}}]),a}(r.Component)),v=t(33),y=t(41),w=t(34),j=(t(74),t(75),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"rankings-row"},n.a.createElement("span",{className:"rankings-cell"}," ",n.a.createElement("h5",null," ",this.props.raidSummary.displayName," ")," "),n.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.summary," "),n.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.realm," "),n.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.world," "))}}]),a}(n.a.Component)),N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bod:{},uldir:{},cos:{},tep:{}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var a,t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,fetch("https://raider.io/api/v1/guilds/profile?region=us&realm=lightbringer&name=nfa&fields=raid_rankings");case 8:return a=e.sent,e.next=11,a.json();case 11:r=e.sent,this.fillRankings("uldir","uldir",t,r,"Uldir"),this.fillRankings("bod","battle-of-dazaralor",t,r,"Battle of Dazar'alor"),this.fillRankings("cos","crucible-of-storms",t,r,"Crucible of Storms"),this.fillRankings("tep","the-eternal-palace",t,r,"Eternal Palace");case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillRankings",value:function(e,a,t,r,n){"cos"===e?this.setState(Object(g.a)({},e,{displayName:[n],summary:t.raid_progression[a].summary,world:r.raid_rankings[a].heroic.world,realm:r.raid_rankings[a].heroic.realm})):this.setState(Object(g.a)({},e,{displayName:[n],summary:t.raid_progression[a].summary,world:r.raid_rankings[a].mythic.world,realm:r.raid_rankings[a].mythic.realm}))}},{key:"render",value:function(){var e=this.state;return n.a.createElement("div",{className:"rankings-page"},n.a.createElement("div",{className:"rankings-container"},n.a.createElement("div",{className:"rankings-row"},n.a.createElement("span",{className:"rankings-cell"}," ",n.a.createElement("h4",null," Raid Name ")),n.a.createElement("span",{className:"rankings-cell"}," ",n.a.createElement("h4",null," Progress ")," "),n.a.createElement("span",{className:"rankings-cell"}," ",n.a.createElement("h4",null," Realm Ranking ")," "),n.a.createElement("span",{className:"rankings-cell"}," ",n.a.createElement("h4",null," World Ranking ")," ")),n.a.createElement(j,{raidSummary:e.uldir}),n.a.createElement(j,{raidSummary:e.bod}),n.a.createElement(j,{raidSummary:e.cos}),n.a.createElement(j,{raidSummary:e.tep})))}}]),a}(n.a.Component),O=(t(76),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={load:!0},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,{history:"browserHistory"},n.a.createElement(v.a,{className:"main-bar",bg:"light",expand:"lg",style:{minHeight:"120px",fontSize:"24px",width:"100%"}},n.a.createElement(v.a.Brand,{href:"",style:{fontSize:"24px"}},"NFA"),n.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(y.a,{className:"mr-auto"},n.a.createElement(y.a.Link,null,n.a.createElement("div",{className:"selection"},n.a.createElement(p.b,{to:"",style:{color:"black",textDecoration:"none"}},"Rankings"))),n.a.createElement(y.a.Link,null,n.a.createElement("div",{className:"selection"},n.a.createElement(p.b,{to:"editedApp",style:{color:"black",textDecoration:"none"}},"Roster"))),n.a.createElement(w.a,{title:"Additional Links",id:"basic-nav-dropdown"},n.a.createElement(w.a.Item,{href:"https://raider.io/guilds/us/lightbringer/NFA",target:"_blank"},"Raider.io"),n.a.createElement(w.a.Item,{href:"https://www.wowprogress.com/guild/us/lightbringer/NFA",target:"_blank"},"Wow progress"),n.a.createElement(w.a.Item,{href:"https://www.warcraftlogs.com/guild/id/357706",target:"_blank"},"Warcraft logs"))))),this.state.load?n.a.createElement(d.a,{path:"/",exact:!0,component:N}):null,n.a.createElement(d.a,{path:"/editedApp",component:E}))}}]),a}(r.Component));c.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,a,t){e.exports=t(100)},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.c4cf94a2.chunk.js.map