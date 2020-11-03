import React, { Component } from 'react';


class Signup extends Component{


    render(){


       return(
         <div className="signupdiv">
         <h2 className="loginheading">Sign Up</h2>
         <div className="loginnerdiv">

         <form action="/" method="POST">
         <div>
         <span style={{display:"block",fontSize:"18px"}}>Name</span>
         <input className="inputfield" type="text" placeholder="Enter name" name="name" required />
         </div>
         <div>
         <span className="inputfield">Address</span>
         <input className="inputfield" type="text" placeholder="Enter address" name="address"  required />
         </div>
           <div>
           <span className="inputfield">Email Address</span>
           <input className="inputfield" type="text" placeholder="Enter email" name="email" pattern="[a-zA-Z0-9.-_]+@[a-z]+\.[a-z]{2,3}" required />
           </div>
           <div>
           <span className="inputfield">Password </span>
           <input className="inputfield" type="password" placeholder="Enter password" name="password" required />
           </div>
           <input style={{marginTop:"20px"}}className="inputfield btn"  type="button" value="Sign Up"/>
           </form>



         </div>
         </div>
       )
    }
}

export default Signup
