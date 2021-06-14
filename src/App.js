import React, {Component} from 'react';
import Roster from './Roster';
import './App.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
/*import ListGroup from 'react-bootstrap/ListGroup';*/
import Spinner from 'react-bootstrap/Spinner'

ReactGA.initialize('UA-152946505-1')
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component{
  constructor(props){
    super(props)
    this.state ={ 
      blizzResponse: '',
      loading: true,
      raider: [

      ],
      filteredRaider: [

      ],
      img:[
      ]
      
    };
  }

  async componentDidMount(){
    let response = await fetch("https://us.battle.net/oauth/token", {
      body: "grant_type=client_credentials",
      headers: {
        Authorization: "Basic ODExNmYzNGI1NmY2NGM4ZTlkMDJhYWI2MjY1MjNjMzU6d2FscVFOYTBTZjRKa0MweTBxSllHNk5tRjFuYjJTd3A=",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
    let data = await response.json()
    this.setState({blizzResponse: data.access_token})
    let url = 'https://us.api.blizzard.com/data/wow/guild/sargeras/no-skill/roster?namespace=profile-us&locale=en_US&access_token='
    url += this.state.blizzResponse
    await fetch(url)
    .then(response => response.json())
    .then(data => this.setState( {[`raider`]: data.members}))

  
    
  
    /* filter raid roster size */
    let array = this.state.raider
    console.log(array)
    array = array.filter ( arr => arr.rank < 6)
    array = array.filter (arr => arr.character.name !== 'Blinkerbell' && arr.character.name !== 'Rollindeep' && arr.character.name !== 'Reptard' && arr.character.name !== 'Bawlzak')
    array = array.map ( arr => {
      arr.character.asset_id = 0
      return arr
    })

    this.setState({ ['raider']: array})
    console.log(this.state.raider)
    
    /* attempt to add asset id to state */
    let index = 0 
    let img_array = new Array()
    while (index < this.state.raider.length){
      url = `https://us.api.blizzard.com/profile/wow/character/sargeras/${this.state.raider[index++].character.name.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=${this.state.blizzResponse}`
      await fetch(url)
        .then(response => response.json())
        .then(asd => img_array.push(asd.assets[0].value))
    }
    this.setState({['img']: img_array})
    

    array = array.map( (arr, index) => arr.character.asset_id = this.state.img[index])

    let rosterArray = this.state.raider
    rosterArray = rosterArray.filter( arr => arr.rank < 6) /*&& arr.character.spec !== undefined*/
    rosterArray = rosterArray.sort( (a,b) => a.character.playable_class.id - b.character.playable_class.id)
    rosterArray = rosterArray.map( (item, index) => 
    <Roster name = {item.character.name} 
              id = {item.character.id} 
              tnail = {item.character.asset_id}
              class = {item.character.playable_class.id}
              key = {index}  
              rank = {item.rank}
              blizzResponse = {this.state.blizzResponse}
    />)
    this.setState({ 'filteredRaider': rosterArray, loading: false})   
  }

  render(){ 
    let rosterArray

    return ( 
      <div className="App">
        { this.state.loading
          ? <div className = 'loading-banner'> 
              {//<h1>Loading &nbsp;
                //<Spinner style = {{marginBottom: 5, fontSize: 12}} size = 'md' animation="border" role="status"></Spinner>  
              //</h1>
              }
              <div className = "loading">
                <h1 style = {{width: '100%', color: 'White'}}>Loading &nbsp;
                      <Spinner style = {{marginBottom: 5, fontSize: 12}} size = 'md' animation="border" role="status"></Spinner>
                </h1>
                <Roster name = {''} class = {13} loading = {this.state.loading}/>
                <Roster name = {''} class = {13} loading = {this.state.loading}/>
              </div>
            </div>
          :<div className = 'rosterDisplay'> 
            <div className = 'buttongrp'>
              <ButtonGroup size = 'lg'>
                <span className = 'sortTab'> Sort By: </span>
                  <Button className = 'sortButton' variant = "light" style = {{width: 'auto'}}
                    onClick = {() => {
                      rosterArray = this.state.raider
                      rosterArray = rosterArray.sort( (a,b) => a.character.name.localeCompare(b.character.name))
                      console.log(rosterArray)
                      rosterArray = rosterArray.map( (item, index) => 
                      <Roster name= {item.character.name} 
                              id = {item.character.id} 
                              tnail = {item.character.asset_id}
                              class = {item.character.playable_class.id}
                              key = {index}    
                      />)
                      this.setState({'filteredRaider': rosterArray})
                      }}>
                      Name 
                  </Button>

                  {/*   ----- Role API endpoint has been removed or currently being changed -------
                  <Button className = 'sortButton' variant = "light" style = {{width: 'auto'}}
                    onClick = {() => {
                      rosterArray = this.state.raider
                      rosterArray = rosterArray.filter( arr => arr.rank !== 2 && arr.rank < 5 && arr.character.spec !== undefined)
                      rosterArray = rosterArray.sort( (a,b) => b.character.spec.role.localeCompare(a.character.spec.role))
                      rosterArray = rosterArray.map( (item, index) => 
                      <Roster name= {item.character.name} 
                              tnail = {item.character.thumbnail} 
                              spec = {item.character.spec}
                              class = {item.character.class}
                              key = {index}  
                      />)
                      this.setState({'filteredRaider': rosterArray})
                    }}> 
                    Role
                  </Button>
                  */}
                    
                    <Button className = 'sortButton' variant = "light" style = {{width: 'auto'}}
                      onClick = {() => {          
                        rosterArray = this.state.raider
                        rosterArray = rosterArray.filter( arr => arr.rank < 6)
                        rosterArray = rosterArray.sort( (a,b) => a.rank - b.rank)
                        rosterArray = rosterArray.map( (item, index) => 
                        <Roster name= {item.character.name} 
                                id = {item.character.id} 
                                tnail = {item.character.asset_id}
                                /*spec = {item.character.spec}*/
                                class = {item.character.playable_class.id}
                                key = {index}  
                        />)
                        this.setState({'filteredRaider': rosterArray})
                      }}>
                      Guild Rank
                    </Button>
                    <Button className = 'sortButton' variant = "light" style = {{width: 'auto'}}
                      onClick = {() => {
                        rosterArray = this.state.raider
                        rosterArray = rosterArray.filter( arr => arr.rank < 6)
                        rosterArray = rosterArray.sort( (a,b) => a.character.playable_class.id - (b.character.playable_class.id))
                        rosterArray = rosterArray.map( (item, index) => 
                        <Roster name= {item.character.name} 
                                id = {item.character.id} 
                                tnail = {item.character.asset_id}
                                /*spec = {item.character.spec}*/
                                class = {item.character.playable_class.id}
                                key = {index}  
                        />)
                        this.setState({'filteredRaider': rosterArray})
                      }}> 
                      Class 
                    </Button>
                  </ButtonGroup></div>
              {/* this div is part of the ternary operator*/}
              {this.state.filteredRaider}
            </div>
        }
      </div>
    );
  }
}
export default App;
serviceWorker.register();