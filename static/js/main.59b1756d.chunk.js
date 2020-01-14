(this["webpackJsonpg-website"]=this["webpackJsonpg-website"]||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),c=t.n(i),s=(t(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e){if("serviceWorker"in navigator){if(new URL("/g-website",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/g-website","/service-worker.js");s?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}))}}function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=t(14),u=t(15),d=t(18),h=t(16),p=t(19),f=t(43),g=t(23),b=t(31),k=t.n(b),E=t(32),w=t(38),v=(t(74),function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e,a,t;try{e=this.props.spec.name}catch(n){n instanceof TypeError&&(e="Error")}try{a="HEALING"===this.props.spec.role?1:"DPS"===this.props.spec.role?2:3}catch(n){n instanceof TypeError&&(a=null)}switch(this.props.class){case 1:t="Warrior";break;case 2:t="Paladin";break;case 3:t="Hunter";break;case 4:t="Rogue";break;case 5:t="Priest";break;case 6:t="Death Knight";break;case 7:t="Shaman";break;case 8:t="Mage";break;case 9:t="Warlock";break;case 10:t="Monk";break;case 11:t="Druid";break;case 12:t="Demon Hunter";break;default:t="Error"}return r.a.createElement("div",{className:"character-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("a",{id:"redirect",href:"https://raider.io/characters/us/lightbringer/".concat(this.props.name),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"character-img",src:"https://render-us.worldofwarcraft.com/character/".concat(this.props.tnail),alt:""}))),r.a.createElement("span",null," ",r.a.createElement("strong",null," ",this.props.name," ")," "),r.a.createElement("span",null," ",e),r.a.createElement("span",null," ",t),1===a?r.a.createElement("div",{className:"Healer"},"  "):2===a?r.a.createElement("div",{className:"Dps"}," "):3===a?r.a.createElement("div",{className:"Tank"}," "):null)}}]),a}(n.Component)),y=(t(75),t(76),t(55),t(22)),N=t(39);y.a.initialize("UA-152946505-1"),y.a.pageview(window.location.pathname+window.location.search);var j=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={blizzResponse:"",loading:!0,raider:[],filteredRaider:[]},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(k.a.mark((function e(){var a,t,n,i,c=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us.battle.net/oauth/token",{method:"POST",body:"grant_type=client_credentials",headers:{Authorization:"Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=","Content-Type":"application/x-www-form-urlencoded"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,this.setState({blizzResponse:t.access_token}),n="https://us.api.blizzard.com/wow/guild/Lightbringer/NFA?fields=members&locale=en_US&access_token=",n+=this.state.blizzResponse,e.next=11,fetch(n).then((function(e){return e.json()})).then((function(e){return c.setState(Object(E.a)({},"raider",e.members))}));case 11:i=(i=(i=(i=this.state.raider).filter((function(e){return 2!==e.rank&&e.rank<5&&void 0!==e.character.spec}))).sort((function(e,a){return a.character.spec.role.localeCompare(e.character.spec.role)}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec,class:e.character.class,key:a,rank:e.rank})})),this.setState({filteredRaider:i,loading:!1});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",{className:"App"},this.state.loading?r.a.createElement("div",{className:"loading-banner"},r.a.createElement("h1",null,"Loading \xa0",r.a.createElement(N.a,{style:{marginBottom:5,fontSize:12},size:"md",animation:"border",role:"status"}))):r.a.createElement("div",null,r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("p",{className:"sortMessage"}," Sort by:",r.a.createElement("button",{className:"sortButton",onClick:function(){e=(e=(e=(e=a.state.raider).filter((function(e){return 2!==e.rank&&e.rank<5}))).sort((function(e,a){return e.character.name.localeCompare(a.character.name)}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec,class:e.character.class,key:a})})),a.setState({filteredRaider:e})}}," Name"),r.a.createElement("button",{className:"sortButton",onClick:function(){e=(e=(e=(e=a.state.raider).filter((function(e){return 2!==e.rank&&e.rank<5&&void 0!==e.character.spec}))).sort((function(e,a){return a.character.spec.role.localeCompare(e.character.spec.role)}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec,class:e.character.class,key:a})})),a.setState({filteredRaider:e})}}," Role"),r.a.createElement("button",{className:"sortButton",onClick:function(){e=(e=(e=(e=a.state.raider).filter((function(e){return 2!==e.rank&&e.rank<5}))).sort((function(e,a){return e.rank-a.rank}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec,class:e.character.class,key:a})})),a.setState({filteredRaider:e})}}," Guild Rank"),r.a.createElement("button",{className:"sortButton",onClick:function(){e=(e=(e=(e=a.state.raider).filter((function(e){return 2!==e.rank&&e.rank<5}))).sort((function(e,a){return e.character.class-a.character.class}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.thumbnail,spec:e.character.spec,class:e.character.class,key:a})})),a.setState({filteredRaider:e})}}," Class"))),this.state.filteredRaider))}}]),a}(n.Component);l();var S=t(35),O=t(66),R=t(36),z=t(34),A=(t(79),t(80),function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rankings-row"},r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h5",null," ",this.props.raidSummary.displayName," ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.summary," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.realm," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.world," "))}}]),a}(r.a.Component)),x=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={loading:!0,bod:{},uldir:{},cos:{},tep:{}},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(k.a.mark((function e(){var a,t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,fetch("https://raider.io/api/v1/guilds/profile?region=us&realm=lightbringer&name=nfa&fields=raid_rankings");case 8:return a=e.sent,e.next=11,a.json();case 11:n=e.sent,this.fillRankings("uldir","uldir",t,n,"Uldir"),this.fillRankings("bod","battle-of-dazaralor",t,n,"Battle of Dazar'alor"),this.fillRankings("cos","crucible-of-storms",t,n,"Crucible of Storms"),this.fillRankings("tep","the-eternal-palace",t,n,"Eternal Palace"),this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillRankings",value:function(e,a,t,n,r){"cos"===e?this.setState(Object(E.a)({},e,{displayName:[r],summary:t.raid_progression[a].summary,world:n.raid_rankings[a].heroic.world,realm:n.raid_rankings[a].heroic.realm})):this.setState(Object(E.a)({},e,{displayName:[r],summary:t.raid_progression[a].summary,world:n.raid_rankings[a].mythic.world,realm:n.raid_rankings[a].mythic.realm}))}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",null,this.state.loading?r.a.createElement("div",{className:"loading-banner-home"},r.a.createElement("h1",{style:{width:"100%",marginLeft:"45%"}},"Loading \xa0",r.a.createElement(N.a,{style:{marginBottom:5,fontSize:12},size:"md",animation:"border",role:"status"}))):r.a.createElement("div",{className:"rankings-page"},r.a.createElement("div",{className:"title-cell"}," ",r.a.createElement("h4",null," No Fun Allowed - Lightbringer (US) ")," "),r.a.createElement("div",{className:"rankings-container"},r.a.createElement("div",{className:"rankings-row"},r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Raid Name ")),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Progress ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Realm Ranking ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," World Ranking ")," ")),r.a.createElement(A,{raidSummary:e.uldir}),r.a.createElement(A,{raidSummary:e.bod}),r.a.createElement(A,{raidSummary:e.cos}),r.a.createElement(A,{raidSummary:e.tep}))))}}]),a}(r.a.Component);l(),y.a.initialize("UA-152946505-1"),y.a.pageview(window.location.pathname+window.location.search);var C=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{history:"browserHistory"},r.a.createElement(S.a,{className:"main-bar",bg:"light",expand:"lg",style:{textAlign:"center",minHeight:"120px",fontSize:"24px",width:"100%"}},r.a.createElement(S.a.Brand,{style:{fontSize:"24px"}},"NFA"),r.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(O.a,{className:"justify-content-center",defaultActiveKey:"/"},r.a.createElement(f.b,{to:"/"},r.a.createElement(z.a,{style:{fontSize:"24px",margin:15,marginTop:22},variant:"outline-dark",size:"md"}," Rankings  ")),r.a.createElement(f.b,{to:"/editedApp"},r.a.createElement(z.a,{style:{fontSize:"24px",margin:15,marginTop:22},variant:"outline-dark",size:"md"}," Roster  ")),r.a.createElement(R.a,{style:{marginTop:22},title:"Additional Links"},r.a.createElement(R.a.Item,{href:"https://raider.io/guilds/us/lightbringer/NFA",target:"_blank"},"Raider.io"),r.a.createElement(R.a.Item,{href:"https://www.wowprogress.com/guild/us/lightbringer/NFA",target:"_blank"},"Wow progress"),r.a.createElement(R.a.Item,{href:"https://www.warcraftlogs.com/guild/id/357706",target:"_blank"},"Warcraft logs"))))),r.a.createElement(g.a,{exact:!0,path:"/",component:x}),r.a.createElement(g.a,{path:"/editedApp",component:j}))}}]),a}(n.Component);y.a.initialize("UA-152946505-1"),y.a.pageview(window.location.pathname+window.location.search),c.a.render(r.a.createElement(C,null),document.getElementById("root")),l()},67:function(e,a,t){e.exports=t(102)},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.59b1756d.chunk.js.map