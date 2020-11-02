import React, { Component } from 'react';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    clickMe(event,param) {
        alert('Option ' + param + ' was selected');
      }
  
    handleSubmit(event) {
        console.log("event--->", event);
      alert('Option ' + this.state.value + ' was selected');
      event.preventDefault();
    }
  
    render() {
      return (
        
             < div className="buttonList">
            <button onClick={(e) => {
                this.clickMe(e, 1)
            }}>1</button>
            <button onClick={(e) => {
                this.clickMe(e, 2)
            }}>2</button>
            <button onClick={(e) => {
                this.clickMe(e, 3)
            }}>3</button>
           <button onClick={(e) => {
                this.clickMe(e, 8)
            }}>8</button>
           
           {/*
           <div className="card-title">
            <form onSubmit={this.handleSubmit}>
                 <input className="inputBox" type="submit" value='1' onClick={this.handleChange} /> 
                <input className="inputBox" type="input" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Send" />
           </form></div> */}
            </div>
      );
    }
  }
