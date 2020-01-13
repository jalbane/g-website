import React, {Component} from 'react';
import Roster from './Roster';
import './editedApp.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import Spinner from 'react-bootstrap/Spinner'

ReactGA.initialize('UA-152946505-1')
ReactGA.pageview(window.location.pathname + window.location.search)
class editedApp extends Component{
  constructor(props){
    super(props)
    this.state ={ 
      blizzResponse: '',
      loading: true,
      raider: [

      ],
      filteredRaider: [

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

    let intialArray, filteredArray, sortedArray, finalArray   
    intialArray = this.state.raider
    filteredArray = intialArray.filter( arr => arr.rank !== 2 && arr.rank < 5 && arr.character.name !== 'Romelus')
    sortedArray = filteredArray.sort( (a,b) => b.character.spec.role.localeCompare(a.character.spec.role))
      
    finalArray = sortedArray.map( (item, index) => 
      <Roster name= {item.character.name} 
              tnail = {item.character.thumbnail} 
              spec = {item.character.spec}
              class = {item.character.class}
              key = {index}  
              rank = {item.rank}
      />)
    
    /*finalArray = filteredArray.map( (item, index) => 
      <Roster name= {item.character.name} 
              tnail = {item.character.thumbnail} 
              spec = {item.character.spec}
              class = {item.character.class}
              key = {index}  
              rank = {item.rank}
      />)*/
    this.setState({'filteredRaider': finalArray, loading: false})    
  }

  render(){ 
    let intialArray, filteredArray, sortedArray, finalArray   
    return ( 
      <div className="App">
        
          { this.state.loading
          ?<div className = 'loading-banner'> 
              <h1>Loading &nbsp;
                <Spinner style = {{marginBottom: 5, fontSize: 12}} size = 'md' animation="border" role="status"></Spinner>
              </h1>
            </div>
          : 
          <div>
            <div className = 'buttonContainer'>
              <p className= 'sortMessage'> Sort by: 
              <button className = 'sortButton'
                onClick = {() => {
                  intialArray = this.state.raider
                  filteredArray = intialArray.filter( arr => arr.rank !== 2 && arr.rank < 5)
                  sortedArray = filteredArray.sort( (a,b) => a.character.name.localeCompare(b.character.name))
                  finalArray = sortedArray.map( (item, index) => 
                  <Roster name= {item.character.name} 
                          tnail = {item.character.thumbnail} 
                          spec = {item.character.spec}
                          class = {item.character.class}
                          key = {index}  
                  />)
                this.setState({'filteredRaider': finalArray})
                }}> Name 
                </button>

                <button className = 'sortButton'
                onClick = {() => {
                  intialArray = this.state.raider
                  filteredArray = intialArray.filter( arr => arr.rank !== 2 && arr.rank < 5)
                  sortedArray = filteredArray.sort( (a,b) => b.character.spec.role.localeCompare(a.character.spec.role))
                  finalArray = sortedArray.map( (item, index) => 
                  <Roster name= {item.character.name} 
                          tnail = {item.character.thumbnail} 
                          spec = {item.character.spec}
                          class = {item.character.class}
                          key = {index}  
                  />)
                  this.setState({'filteredRaider': finalArray})
                }}> Role
                </button>
              
                <button className = 'sortButton'
                onClick = {() => {          
                  intialArray = this.state.raider
                  filteredArray = intialArray.filter( arr => arr.rank !== 2 && arr.rank < 5)
                  sortedArray = filteredArray.sort( (a,b) => a.rank - b.rank)
                  finalArray = sortedArray.map( (item, index) => 
                  <Roster name= {item.character.name} 
                          tnail = {item.character.thumbnail} 
                          spec = {item.character.spec}
                          class = {item.character.class}
                          key = {index}  
                  />)
                  this.setState({'filteredRaider': finalArray})
                }}> Guild Rank
                </button>
                <button className = 'sortButton'
                onClick = {() => {
                  intialArray = this.state.raider
                  filteredArray = intialArray.filter( arr => arr.rank !== 2 && arr.rank < 5)
                  sortedArray = filteredArray.sort( (a,b) => a.character.class - b.character.class)
                  finalArray = sortedArray.map( (item, index) => 
                  <Roster name= {item.character.name} 
                          tnail = {item.character.thumbnail} 
                          spec = {item.character.spec}
                          class = {item.character.class}
                          key = {index}  
                  />)
                this.setState({'filteredRaider': finalArray})
                }}> Class 
                </button>
              </p> 
            </div>
            {/* this div is part of the ternary operator*/}
            {this.state.filteredRaider}
          </div>
          }
      </div>);
  }
}
export default editedApp;
serviceWorker.register();