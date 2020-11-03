import React, { Component } from 'react';


class Login extends Component{


    render(){


       return(
        <div className="logindiv">
        <h2 className="loginheading">Sign In</h2>
        <div className="loginnerdiv">


          <form action="/" method="POST">

          <div>
          <span style={{display:"block",fontSize:"18px"}}>Email Address</span>
          <input className="inputfield" type="text" placeholder="Enter email" name="email" pattern="[a-zA-Z0-9.-_]+@[a-z]+\.[a-z]{2,3}" required />
          </div>
            <div>
            <span className="inputfield">Password </span>
            <input className="inputfield" type="password" placeholder="Enter password" name="password" required />
            </div>
            <input style={{marginTop:"30px"}}className="inputfield btn"  type="button" value="Login"/>
            </form>



        </div>
        </div>
       )
    }
}

export default Login
