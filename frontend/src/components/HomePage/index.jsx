//LogPage
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends React.Component {


    render() {

        return (
            <div style={{marginLeft:'100px'}}>
                <h2>This is a HomePage</h2>

                <ul>Navigation
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
            </div>
        )
    }
}






export default LoginPage 