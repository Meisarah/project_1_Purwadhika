import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import Beranda from './components/Beranda';
import Footer from './components/Footer';
import Subcategory from './components/Subcategory';
import Navbar from './components/Navbar';
import InputSeason from './components/Input_Season';
// import Search from './components/Search';

class App extends Component {

constructor(){
  super();
  this.state = {season:[], cart:0}
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
        <div>
        <Navbar cart={this.state.cart}/>
        <Route exact path="/" render = {() => <Beranda season={this.state.season} getSeasonID={this.getseasonid}/>}/>
        <Route path="/product/:id" render = {({ match }) => <Product idProduct_detail={ match.params.id }/>}/>
        <Route path="/subcategory/:id" render = {({ match }) => <Subcategory idSeason={ match.params.id }/>}/>
        <Route path="/category/:id" render = {({ match }) => <Category idProduct={ match.params.id }/>}/>
        {/* <Route path="/search/:id" render = {({match})=> <Search idSearch={ match.params.id }/>}/> */}
        </div>
        <Route path="/inputseason" component={InputSeason}/>
     <Footer/>
</div>
);
}
}


export default App;

