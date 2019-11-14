import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      displayLoginButton: true,
    };
  }

  render() {

    return (
      <div className="header-container">
        <img src="http://pitsel.com/wp-content/uploads/2019/05/blog-communication-data-desk-wallpaper.jpg" alt="blog" className='blog-image'/>
        <div className="login-container">
          <div className="welcome-text">
            Welcome!
            <br/>
            <div className='lower-text'>
            Please register or sign in.
            </div>
          </div>
          <Link to="/register">
            <button className='home-button'>Sign Up</button>
          </Link>
          <Link to="/login">
            <button className='home-button'>Login</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
