import React, { Component } from 'react';
import { Link } from 'react-router-dom'




import '../style/style.css';

class Header extends Component {
  
  state = {
    hello : "hello"
  };

    renderContent() {
      
        
        return (  <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="account_man"  className="nav-link">Account Manager</Link>
        </li>
        <li className="nav-item">   
          <Link to="wish_list" className="nav-link">Wish List</Link>
        </li>

        <li className="nav-item">
          <Link to="mortgage" className="nav-link">Mortgage</Link>
        </li>
      </ul>);
  

    }
    

    render() {

        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" >Home</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                  {this.renderContent()}
                  <div className="btn-group">
                  <button type="button" className="{}btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true">
                    Sign-In
                  </button>
                  <div className="dropdown-menu ">
                    <Link to="login" className="dropdown-item" >Login</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="register" className="dropdown-item" >Register</Link>
                  </div>
                </div>
                </div>
              </nav>
            </div>
               
        );

    }
    
}

export default Header;