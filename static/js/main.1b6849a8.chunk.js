(this["webpackJsonpg-website"]=this["webpackJsonpg-website"]||[]).push([[0],{53:function(e,a,t){e.exports=t(73)},58:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),s=t.n(i),l=(t(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e){if("serviceWorker"in navigator){if(new URL("/g-website",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/g-website","/service-worker.js");l?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}))}}function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=t(12),d=t(13),u=t(16),h=t(14),p=t(17),g=t(40),f=t(6),b=t(28),k=t.n(b),w=t(25),E=t(34),v=(t(60),function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e;switch(this.props.class){case 1:e="Warrior";break;case 2:e="Paladin";break;case 3:e="Hunter";break;case 4:e="Rogue";break;case 5:e="Priest";break;case 6:e="Death Knight";break;case 7:e="Shaman";break;case 8:e="Mage";break;case 9:e="Warlock";break;case 10:e="Monk";break;case 11:e="Druid";break;case 12:e="Demon Hunter";break;case 13:e="";break;default:e="Error"}return this.props.loading?r.a.createElement("div",{className:"shimmerLoad"},r.a.createElement("div",{className:"character-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("div",{className:"img-span"},"  ")),r.a.createElement("span",{className:"text-span"}," ",r.a.createElement("strong",null," ",this.props.name," ")," "),r.a.createElement("span",{className:"text-span"}," ",e),r.a.createElement("div",null))):r.a.createElement("div",{className:"character-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"character-img",src:"https://render-us.worldofwarcraft.com/character/lightbringer/84/149240148-inset.jpg"})),r.a.createElement("span",null," ",r.a.createElement("strong",null," ",this.props.name," ")," "),r.a.createElement("span",null," ",e),r.a.createElement("div",null))}}]),a}(n.Component)),y=(t(61),t(62),t(47),t(20)),N=t(19),j=t(49);y.a.initialize("UA-152946505-1"),y.a.pageview(window.location.pathname+window.location.search);var O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={blizzResponse:"",loading:!0,raider:[],filteredRaider:[]},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(k.a.mark((function e(){var a,t,n,i,s=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us.battle.net/oauth/token",{body:"grant_type=client_credentials",headers:{Authorization:"Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=","Content-Type":"application/x-www-form-urlencoded"},method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,this.setState({blizzResponse:t.access_token}),n="https://us.api.blizzard.com/data/wow/guild/lightbringer/nfa/roster?namespace=profile-us&locale=en_US&access_token=",n+=this.state.blizzResponse,e.next=11,fetch(n).then((function(e){return e.json()})).then((function(e){return s.setState(Object(w.a)({},"raider",e.members))}));case 11:i=(i=(i=(i=this.state.raider).filter((function(e){return e.rank<4}))).sort((function(e,a){return e.character.playable_class.id-a.character.playable_class.id}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.id,class:e.character.playable_class.id,key:a,rank:e.rank})})),this.setState({filteredRaider:i,loading:!1});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",{className:"App"},this.state.loading?r.a.createElement("div",{className:"loading-banner"},r.a.createElement("div",{className:"loading"},r.a.createElement(v,{name:"",class:13,loading:this.state.loading}),r.a.createElement(v,{name:"",class:13,loading:this.state.loading}))):r.a.createElement("div",{className:"rosterDisplay"},r.a.createElement("div",{className:"buttongrp"},r.a.createElement(j.a,{size:"lg"},r.a.createElement("span",{className:"sortTab"}," Sort By: "),r.a.createElement(N.a,{className:"sortButton",variant:"light",style:{width:"auto"},onClick:function(){e=(e=(e=a.state.filteredRaider).sort((function(e,a){return e.props.name.localeCompare(a.props.name)}))).map((function(e,a){return r.a.createElement(v,{name:e.props.name,tnail:e.props.id,class:e.props.class,key:a})})),a.setState({filteredRaider:e})}},"Name"),r.a.createElement(N.a,{className:"sortButton",variant:"light",style:{width:"auto"},onClick:function(){e=(e=(e=(e=a.state.raider).filter((function(e){return e.rank<4}))).sort((function(e,a){return e.rank-a.rank}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.id,class:e.character.playable_class.id,key:a})})),a.setState({filteredRaider:e})}},"Guild Rank"),r.a.createElement(N.a,{className:"sortButton",variant:"light",style:{width:"auto"},onClick:function(){e=(e=(e=(e=a.state.raider).filter((function(e){return e.rank<4}))).sort((function(e,a){return e.character.playable_class.id-a.character.playable_class.id}))).map((function(e,a){return r.a.createElement(v,{name:e.character.name,tnail:e.character.thumbnail,class:e.character.playable_class.id,key:a})})),a.setState({filteredRaider:e})}},"Class"))),this.state.filteredRaider))}}]),a}(n.Component);c();var S=t(33),_=t(52),R=t(32),z=(t(65),t(66),function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rankings-row"},r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h5",null," ",this.props.raidSummary.displayName," ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.summary," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.realm," "),r.a.createElement("span",{className:"rankings-cell"}," ",this.props.raidSummary.world," "))}}]),a}(r.a.Component)),x=t(42),A=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={loading:!0,bod:{},uldir:{},cos:{},tep:{}},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(k.a.mark((function e(){var a,t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,fetch("https://raider.io/api/v1/guilds/profile?region=us&realm=lightbringer&name=nfa&fields=raid_rankings");case 8:return a=e.sent,e.next=11,a.json();case 11:n=e.sent,this.fillRankings("uldir","uldir",t,n,"Uldir"),this.fillRankings("bod","battle-of-dazaralor",t,n,"Battle of Dazar'alor"),this.fillRankings("cos","crucible-of-storms",t,n,"Crucible of Storms"),this.fillRankings("tep","the-eternal-palace",t,n,"Eternal Palace"),this.fillRankings("nwc","nyalotha-the-waking-city",t,n,"Ny'alotha, the Waking City"),this.setState({loading:!1});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillRankings",value:function(e,a,t,n,r){var i,s,l;i=t.raid_progression[a].mythic_bosses_killed,s=t.raid_progression[a].heroic_bosses_killed,l=t.raid_progression[a].normal_bosses_killed,i>=1?this.setState(Object(w.a)({},e,{displayName:r,summary:t.raid_progression[a].summary,world:n.raid_rankings[a].mythic.world,realm:n.raid_rankings[a].mythic.realm})):s>=1?this.setState(Object(w.a)({},e,{displayName:r,summary:t.raid_progression[a].summary,world:n.raid_rankings[a].heroic.world,realm:n.raid_rankings[a].heroic.realm})):l>=1?this.setState(Object(w.a)({},e,{displayName:r,summary:t.raid_progression[a].summary,world:n.raid_rankings[a].normal.world,realm:n.raid_rankings[a].normal.realm})):this.setState(Object(w.a)({},e,{displayName:r,summary:"N/A",world:"N/A",realm:"N/A"}))}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",null,this.state.loading?r.a.createElement("div",{className:"loading-banner-home"},r.a.createElement("h1",{style:{width:"100%",marginLeft:"45%"}},"Loading \xa0",r.a.createElement(x.a,{style:{marginBottom:5,fontSize:12},size:"md",animation:"border",role:"status"}))):r.a.createElement("div",{className:"rankings-page"},r.a.createElement("div",{className:"title-cell"}," ",r.a.createElement("h4",null," No Fun Allowed - Lightbringer (US) ")," "),r.a.createElement("div",{className:"rankings-container"},r.a.createElement("div",{className:"rankings-row"},r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Raid Name ")),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Progress ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," Realm Ranking ")," "),r.a.createElement("span",{className:"rankings-cell"}," ",r.a.createElement("h4",null," World Ranking ")," ")),r.a.createElement(z,{raidSummary:e.uldir}),r.a.createElement(z,{raidSummary:e.bod}),r.a.createElement(z,{raidSummary:e.cos}),r.a.createElement(z,{raidSummary:e.tep}),r.a.createElement(z,{raidSummary:e.nwc}))))}}]),a}(r.a.Component);c(),y.a.initialize("UA-152946505-1"),y.a.pageview(window.location.pathname+window.location.search);var C=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{history:"browserHistory"},r.a.createElement(S.a,{className:"main-bar",bg:"light",expand:"lg",style:{textAlign:"center",minHeight:"120px",fontSize:"24px",width:"100%"}},r.a.createElement(S.a.Brand,{style:{fontSize:"24px"}},"NFA"),r.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(_.a,{className:"justify-content-center",defaultActiveKey:"/"},r.a.createElement(g.b,{to:"/"},r.a.createElement(N.a,{style:{fontSize:"24px",margin:15,marginTop:22},variant:"outline-dark",size:"md"}," Rankings  ")),r.a.createElement(g.b,{to:"/Roster"},r.a.createElement(N.a,{style:{fontSize:"24px",margin:15,marginTop:22},variant:"outline-dark",size:"md"}," Roster  ")),r.a.createElement(R.a,{style:{marginTop:22},title:"Additional Links"},r.a.createElement(R.a.Item,{href:"https://raider.io/guilds/us/lightbringer/NFA",target:"_blank"},"Raider.io"),r.a.createElement(R.a.Item,{href:"https://www.wowprogress.com/guild/us/lightbringer/NFA",target:"_blank"},"Wow progress"),r.a.createElement(R.a.Item,{href:"https://www.warcraftlogs.com/guild/id/357706",target:"_blank"},"Warcraft logs"))))),r.a.createElement(f.a,{exact:!0,path:"/",component:A}),r.a.createElement(f.a,{path:"/Roster",component:O}))}}]),a}(n.Component);y.a.initialize("UA-152946505-1"),y.a.pageview(window.location.pathname+window.location.search),s.a.render(r.a.createElement(C,null),document.getElementById("root")),c()}},[[53,1,2]]]);
//# sourceMappingURL=main.1b6849a8.chunk.js.map