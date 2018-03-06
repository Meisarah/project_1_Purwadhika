import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import Beranda from './components/Beranda';
import Footer from './components/Footer';
import Gamis1 from './components/Gamis1';
import Gamis2 from './components/Gamis2';
import Gamis3 from './components/Gamis3';
import Hijab1 from './components/Hijab1';
import Hijab2 from './components/Hijab2';
import Hijab3 from './components/Hijab3';
import Hijab4 from './components/Hijab4';


class App extends Component {
  
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
                <a className="navbar-brand" href="/beranda" id="logo2">MyHijab</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-left">
                  <li><Link to="/beranda">BERANDA</Link></li>
                  <li><Link to="/hijab2">HIJAB</Link></li>
                  <li><Link to="/product">GAMIS</Link></li>
                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">MORE
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to="/category">Aksesoris</Link></li>
                      <li><Link to="/category">Produk Terbaru</Link></li>
                      <li><Link to="/category">Populer</Link></li> 
                    </ul>
                  </li>
                </ul>

                <form class="navbar-form navbar-right" action="/action_page.php">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search"/>
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit">
                      <i class="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </form>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
            
                </ul>
              </div>
            </div>
          </nav>
       
        <div>
        <Route exact path="/" component={Beranda}/>
        <Route path="/beranda" component={Beranda}/>
        <Route path="/product" component={Product}/>
        <Route path="/category" component={Category}/>
        <Route path="/gamis1" component={Gamis1}/>
        <Route path="/gamis2" component={Gamis2}/>
        <Route path="/gamis3" component={Gamis3}/>
        <Route path="/hijab1" component={Hijab1}/>
        <Route path="/hijab2" component={Hijab2}/>
        <Route path="/hijab3" component={Hijab3}/>
        <Route path="/hijab4" component={Hijab4}/>
        </div>

     <Footer/>
</div>
);
}
}


export default App;

