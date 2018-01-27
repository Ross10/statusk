import React, { Component } from 'react';


class Login extends Component {


    render() {

        return (
            <div className="container centro"> 
                <div className="wrapper">
                    <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
                    <form className="form-signin">

                    <div className="form-group">
                            <label>Email Address</label>
                            <input className="form-control" type="email" placeholder="example@gmail.com" autoFocus="" />     
                    </div>
                    <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                    </form>
                </div>

            </div>
               
        );

    }
    
}

export default Login;