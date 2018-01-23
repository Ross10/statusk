import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Account_Manager from '../components/Account_Manager';
import Wish_List from '../components/Wish_list';
import Login from '../components/Login';
import Register from '../components/Register';
import Mortgage from '../components/Mortgage';



import '../firebase';



class App extends Component {


    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component = { Home }   />
                        <Route exact path="/account_man" component = { Account_Manager }  />
                        <Route exact path="/wish_list" component = { Wish_List }  />
                        <Route exact path="/login" component = { Login }  />
                        <Route exact path="/register" component = { Register }  />
                        <Route exact path="/mortgage" component = { Mortgage }  />
                        
                        
                             
                    </div>
                    
                </BrowserRouter>
            </div>
        );
    }
}

export default App;