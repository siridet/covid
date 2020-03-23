import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    rs: {}, isLoading: true, item: []
  }
  componentDidMount() {
    axios({
      "method": "GET",
      "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "f030d9f76cmsh85365f980e3bf3bp1ee6fdjsn60e298b63f0f"
      }, "params": {
        "country": "Thailand"
      }
    })
      .then((response) => {
        this.setState({ rs: response.data.data })
        this.setState({ item: response.data.data.covid19Stats })
        console.log(this.state.rs.covid19Stats)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (<>
      <div style={{ paddingLeft: 20 }}>

      </div>
      <h3>Covid-19 Daily Repoter v 1.0</h3>
      <table>
        <tr><td><b>last checked : </b></td><td>{this.state.rs.lastChecked}</td></tr>
        {
          this.state.item.map((v, index) => {
            return (<>
            <tr key={index}><td><b>country : </b></td><td>{v.country}</td></tr>
            <tr key={index}><td><b>confirmed : </b></td><td>{v.confirmed}</td></tr>
            <tr key={index}><td><b>deaths : </b></td><td><span style={{color:'red'}}>{v.deaths}</span></td></tr>
            <tr key={index}><td><b>recovered : </b></td><td>{v.recovered}</td></tr> 
           </> 
            )
          })

        }

      </table>

    </>

    )
  }
}

export default App;
