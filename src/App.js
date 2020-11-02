import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  state = {
    chats: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ chats: data })
      console.log(this.state.chats)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <div className='title'><h1 className='card'>Messenger</h1></div>
        
        <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Press '1' For billing inquiries or contact updates </h5>
          <h5 className="card-title"> Press '2' To learn more about Your Way Pay </h5>
          <h5 className="card-title"> Press '3' For technical, banking, and payroll </h5>
          <h5 className="card-title"> Press '8' To repeat these options </h5>
        </div></div> 
      {/*  {this.state.chats.map((chat) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{chat.title}</h5>
            </div>
          </div>
      ))}  */}
        </div>
        <div className="card"><Form /></div>
       </div>
    );
  }
}

export default App;