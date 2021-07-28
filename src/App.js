import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor() {
    super () 
    this.state ={
      person :{
        fullname: 'wiem jaballah',
        bio:'promotion 2018' ,
       profession:' ingenieur agronome ',
       img: './imgsrc.jpg',
      },
      show: false,
      date: new Date().toLocaleTimeString(),
    };
  }
  
  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.setState({
            date: new Date().toLocaleTimeString()
          }),
      1000);
  }
  render(){ 
  return (
    <div className="App">
    <button onClick={() => this.setState({show: !this.state.show})} className= "btn"> Toggle </button>
    {
        this.state.show?
        <div className='profil'>
        <img src= {this.state.person.img} alt= "Profile" width={200} height={200} style={{borderRadius: "70%"}} />
        <h1 style={{fontStyle:"italic", color:"#e91e63" }}>{this.state.person.fullname}</h1>
        <h4>{this.state.person.bio}</h4>
        <h3>{this.state.person.profession}</h3>
    
        </div> : null
  }
 </div>
  ); 
  }}