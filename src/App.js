import React, { Component } from 'react';
import axios from 'axios';


import './App.css';

class App extends Component {

  state = {
    username: '',
    password: ''
    };

   loginHandler = () => {
     const url = "https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service";
     let payload = {
       username: this.state.username,
       password: this.state.password
     };
     axios.post(url, payload)
       .then(response => {
         console.log(response.data)
       }).catch(e => {
         console.log(e)
     })
   };

  render() {
    return (
      <div className="info">
        <div className="log">
          <div className="input-group mb-3">
            <input type="text" name="username"
                   style={{width: 300}}
                   placeholder="Username"
                   value={this.state.username}
                   onChange={(event) => this.setState({username: event.target.value})}

            />
          </div>
          <div className="input-group mb-3">
            <input type="password"
                   name="password"
                   style={{width: 300}}
                   placeholder="Password"
                   value={this.state.password}
                   onChange={(event) => this.setState({password: event.target.value})}
            />
          </div>
        </div>
        <button className="btn btn-outline-primary"
                onClick={this.loginHandler}
        >Sign In
        </button>
      </div>

    );
  }
}

export default App;
