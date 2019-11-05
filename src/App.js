import React, {Component} from 'react';
import Roster from './Roster'
import './App.css';
import 'tachyons';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={ 
      blizzResponse: '',
      loading: true,
      raider: [
        
      ],
      key: 0
    };
  }

  async componentDidMount(){
    let response = await fetch("https://us.battle.net/oauth/token",{ 
              method: "POST",
              body: "grant_type=client_credentials",
              headers: {
                Authorization: "Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=",
                "Content-Type": "application/x-www-form-urlencoded"
              }
            })
    let data = await response.json()
    this.setState({blizzResponse: data})
    let url = 'https://us.api.blizzard.com/wow/guild/Lightbringer/NFA?fields=members&locale=en_US&access_token='
    url += this.state.blizzResponse.access_token
    let apiResponse = await fetch(url)
    let guildData = await apiResponse.json()
    let i = 0
    let j = 0
    while (i < guildData.members.length){
      if (guildData.members[i].rank !== 2 && guildData.members[i].rank < 5)
      {
        this.state.raider[j] = guildData.members[i]
        j++
      }
      i++
    }
    this.setState({loading: false})
  }

  render(){ 
    let item = this.state
    return (
      <div className="App">
        <div>
          {this.state.loading ? <div><h1>Loading...</h1></div>: 
            <div> 
              {/* this div is part of the ternary operator*/}
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
              <Roster itemList = {item}/>
            </div>
          }
        </div>  
      </div>);
  }
}
export default App;