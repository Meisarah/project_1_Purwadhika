import React, { Component } from 'react';
import { provider, auth } from '../fire';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';


class Navbar extends Component{
    constructor(){
        super();
        this.state = {user: null, search:[], cari:{}}
      }
      
        async login (){
          const result = await auth().signInWithPopup(provider);
          this.setState({user: result.user});
        }
      
          async logout (){
            await auth().signOut()
            this.setState({user:null});
          }

          // search = () => {
          //   axios.get(`http://localhost:3002/product/${this.state.cari}`)
          //   .then ((a) => {
          //     this.setState({search:a.data})
          //   })
          //   console.log(this.state.cari)
          // } 

render(){

  let navbar;
  if(this.state.user == null){
    navbar =(
                <ul className="nav navbar-nav navbar-right">
                    <li><a>{'Welcome'}</a></li>
                    <li><a onClick={this.login.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a><span className="glyphicon glyphicon-shopping-cart"></span>{this.props.cart}</a></li>
            
                </ul>
    )
  }

  else{
    navbar =(
                <ul className="nav navbar-nav navbar-right">
                    <li><a>{this.state.user ? `Welcome, ${this.state.user.displayName}!` : 'Welcome'}</a></li>
                    <li><a onClick={this.logout.bind(this)}>Logout</a></li>
                    <li><a><span className="glyphicon glyphicon-shopping-cart"></span>{this.props.cart}</a></li>
            
                </ul>
    )
  }

    return(
<div>
<nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="/" id="logo2">MyHijab</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to="/">BERANDA</Link></li>
                  <li><Link to="/">HIJAB</Link></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="/">MORE
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/">Aksesoris</Link></li>
                      <li><Link to="/">Produk Terbaru</Link></li>
                      <li><Link to="/">Populer</Link></li> 
                    </ul>
                  </li>
                </ul>
                {navbar}
              </div>
            </div>
          </nav>
    </div>
    )
}
}

export default Navbar;