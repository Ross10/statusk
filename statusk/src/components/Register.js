import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions/index';


class Register extends Component {


    onEmailChange(text) {
        console.log(this.props.emailChanged(text));
    }

    render() {

        return (
            <div className="container centro"> 
                <div className="wrapper">
                    <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
                    <form className="form-signin">

                    <div className="form-group">
                            <label>Email Address</label>
                            <input onChange={this.onEmailChange.bind(this)} className="form-control" type="email" placeholder="example@gmail.com" autoFocus="" />     
                    </div>
                    <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="text" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-lg btn-primary btn-block" >Submit</button>
                    </form>
                </div>

            </div>
               
        );

    }
    
}

// const mapStateToProps = (state) => {
//     const { email, password } = state;
  
//     return { email, password };
//   };

export default connect(null,{emailChanged})(Register);