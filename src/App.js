import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import {Link, Route} from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import Beranda from './components/Beranda';
import Footer from './components/Footer';
import Subcategory from './components/Subcategory';

import { provider, auth } from './fire';

class App extends Component {

constructor(){
  super();
  this.state = {user: null, season:[], cart:0}
}

  async login (){
    const result = await auth().signInWithPopup(provider);
    this.setState({user: result.user});
  }

    async logout (){
      await auth().signOut()
      this.setState({user:null});
    }

    componentWillMount(){
      axios.get("http://localhost:3002/")
      .then((season_data)=>{console.log(season_data);
        this.setState({season:season_data.data});
        console.log(this.state)
      })
    }

  
  render(){

    return (
      <div>
        {/* Header */}
         {/* Navbar */}
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
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="/">MORE
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to="/">Aksesoris</Link></li>
                      <li><Link to="/">Produk Terbaru</Link></li>
                      <li><Link to="/">Populer</Link></li> 
                    </ul>
                  </li>
                </ul>

                {/* <form class="navbar-form navbar-right">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search"/>
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                      <i class="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </form> */}
                <ul className="nav navbar-nav navbar-right">
                    <li><a>{this.state.user ? `Welcome, ${this.state.user.displayName}!` : 'Welcome'}</a></li>
                    <li><a onClick={this.login.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a onClick={this.logout.bind(this)}>Logout</a></li>
                    <li><a><span className="glyphicon glyphicon-shopping-cart"></span>{this.state.cart}</a></li>
            
                </ul>
              </div>
            </div>
          </nav>
       
        <div>
        <Route exact path="/" render = {() => <Beranda season={this.state.season} getSeasonID={this.getseasonid}/>}/>
        <Route path="/product/:id" render = {({ match }) => <Product idProduct_detail={ match.params.id }/>}/>
        <Route path="/subcategory/:id" render = {({ match }) => <Subcategory idSeason={ match.params.id }/>}/>
        <Route path="/category/:id" render = {({ match }) => <Category idProduct={ match.params.id }/>}/>
        </div>

     <Footer/>
</div>
);
}
}


export default App;

