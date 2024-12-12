import React, { Component } from 'react';

class LoginForm extends Component {
  // Initial state to store form input values
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // Handler for username change
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  // Handler for password change
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    //  validation 
    if (username && password) {
      console.log('Logged in with', username);
    } else {
      alert('Please fill in both fields!');
    }
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              placeholder="Enter username"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Enter password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
