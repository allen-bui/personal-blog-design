import React from 'react';
import { withRouter } from 'react-router';
import apiServices from './apiServices.js';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoginSuccess: false,
      isWrongAttempt: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    apiServices
      .postRequest('login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then((data) => {
        this.setState(
          {
            isLoginSuccess: data.isUserFound,
          },
          () => {
            if (!this.state.isLoginSuccess) {
              alert(
                'wrong password or login: please register first or try again',
              );
            }
          },
        );
      });
  }

  handleProfile() {
    this.props.history.push({
      pathname: `/home`,
      username: this.state.username,
    });
  }

  render() {
    if (this.state.isLoginSuccess) {
      return (
        <div className="header-container">
          <img
            src="http://pitsel.com/wp-content/uploads/2019/05/blog-communication-data-desk-wallpaper.jpg"
            alt="blog"
            className="blog-image"
          />
          <div className="login-container">
            <div className="welcome-text">Login Successful!</div>
            <button onClick={this.handleProfile} className='registration-submit'>Go to Home</button>
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
            <div className="welcome-text">Login</div>
            <form onSubmit={this.onSubmit}>
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  className="registration-input"
                  name="username"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  className="registration-input"
                  name="password"
                  onChange={this.onChange}
                  required
                />
              </div>
              <Link to="/register">
                <button className="registration-submit">Go to Register</button>
              </Link>
              <input type="submit" className="registration-submit" />
            </form>
          </div>
          <br />
        </div>
      );
    }
  }
}

export default withRouter(Login);
