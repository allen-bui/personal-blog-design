import React from 'react';
import { Link } from 'react-router-dom';

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      accountCreated: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        this.setState({
          accountCreated: true,
        })
      });
  }

  render() {

    if (this.state.accountCreated) {
      return (
        <div>
          <h2>Account Created Succesfully</h2>
          <Link to='/'>
            <button>Return Home</button>
          </Link>
        </div>
        )
    } else {
      return (
        <div>
          <h1>Registration</h1>
          <form onSubmit={this.onSubmit}>
            {/* Username */}
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' onChange={this.onChange} required/>
            {/* Password */}
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' onChange={this.onChange} required/>
            <input type='submit' />
          </form>
        </div>
      );
    }
  }
}

export default Registration;
