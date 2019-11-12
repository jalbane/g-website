import React, {Component} from 'react';
import Roster from './Roster'
import './App.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css'

class editedApp extends Component{
  constructor(props){
    super(props)
    this.state ={ 
      blizzResponse: '',
      loading: true,
      raider: [
      ]
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
    this.setState({blizzResponse: data.access_token})
    let url = 'https://us.api.blizzard.com/wow/guild/Lightbringer/NFA?fields=members&locale=en_US&access_token='
    url += this.state.blizzResponse
    await fetch(url)
    .then(response => response.json())
    .then(data => this.setState( {[`raider`]: data.members}))
    this.setState({loading: false})
  }

  render(){ 
    let oldarr = this.state.raider
    let updatedArr = oldarr.filter(arr =>arr.rank !== 2 && arr.rank < 5)
    let newArr = updatedArr.map( (item, index) => 
      <Roster name= {item.character.name} 
              tnail = {item.character.thumbnail} 
              spec = {item.character.spec}
      />)
    
    return (
      
      <div className="App">
          <div className = "Faketable"> 
          {this.state.loading ? <div><h1>Loading...</h1></div>: 
            <div>
              {/* this div is part of the ternary operator*/}
              {newArr}

            </div>
          }
        </div> 
      
    </div>);
  }
}
export default editedApp;