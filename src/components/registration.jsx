import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

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
    }).then(() => {
      this.setState({
        accountCreated: true,
      });
    });
  }

  render() {
    if (this.state.accountCreated) {
      return (
        <div className="header-container">
          <img
            src="http://pitsel.com/wp-content/uploads/2019/05/blog-communication-data-desk-wallpaper.jpg"
            alt="blog"
            className="blog-image"
          />
          <div className='login-container'>
            <div className="welcome-text">Account Created Succesfully</div>
            <Link to="/">
              <button className="registration-submit">Return Home</button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header-container">
          <img
            src="http://pitsel.com/wp-content/uploads/2019/05/blog-communication-data-desk-wallpaper.jpg"
            alt="blog"
            className="blog-image"
          />
          <div className="login-container">
            <div className="welcome-text">Registration</div>
            <form onSubmit={this.onSubmit}>
              {/* Username */}
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  onChange={this.onChange}
                  className="registration-input"
                  required
                />
              </div>
              {/* Password */}
              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  className="registration-input"
                  required
                />
              </div>
              <div>
                <label className="confirmation">Confirm: </label>
                <input
                  type="password"
                  className="registration-input"
                  required
                />
              </div>
              <input type="submit" className="registration-submit" />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Registration;
