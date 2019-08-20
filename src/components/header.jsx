import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  background: transparent;
  height: 100px;
  border-radius: 3px;
  border: 2px solid lightslategray;
  color: lightslategray;
  margin: 0 1em;
  padding: 0.25em 1em;
  position: absolute;
  width: 95%;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid lightslategray;
  color: lightslategray;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: lightslategray;
      color: white;
    `};
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      displayLoginButton: true,
    };
  }

  render() {

    const gifStyle = {
      'height': '400px',
      'width': '700px',
      'position': 'relative',
      'top': '250px',
      'left': '500px'
    }

    const parentStyle = {
      'width:': '100%',
      'position': 'absolute',
    }

    return (
      <div style={parentStyle} >
        <Div>
          <h2>Welcome to this random blog!</h2>
          <Link to='/register'>
            <Button>Sign Up</Button>
          </Link>
          <Link to='/login'>
            <Button primary>Login</Button>
          </Link>
        </Div>
        <img src="https://media1.tenor.com/images/296f9815e3bfd07a366832e16854b995/tenor.gif?itemid=4596954" style={gifStyle} alt=""/>
      </div>
    );
  }
}

export default Header;
