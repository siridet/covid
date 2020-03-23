import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    rs: {},   isLoading: true
}
  componentDidMount() {
    axios({
      "method":"GET",
      "url":"https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com",
      "x-rapidapi-key":"f030d9f76cmsh85365f980e3bf3bp1ee6fdjsn60e298b63f0f"
      },"params":{
      "country":"Thailand"
      }
      })
      .then((response)=>{
        console.log(response.data.data.lastChecked)
      })
      .catch((error)=>{
        console.log(error)
      })
}
  render() {
  return (<>
  
  </>
    
  ) 
}}

export default App;
