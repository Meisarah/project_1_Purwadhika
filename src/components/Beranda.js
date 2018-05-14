import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { urlAPI } from '../config.json'

import baner from '../img/baner.jpg';
import shop1 from '../img/shop1.jpg';
import shop2 from '../img/shop2.jpg';
import list2 from '../detail/Gamis.json';

import SingleProduct from './SingleProduct';

class Beranda extends Component {
    state = {
        listProduct: []
    }

    getProduct() {
        Axios.get(`${urlAPI}/product`)
        .then(res => {
            this.setState({ 
                listProduct: res.data.list.map((el, i) => 
                    <SingleProduct 
                        key={i}
                        id= {el.id}
                        gambar='/shopgamis1.jpg' 
                        nama={el.product}
                        product={el.deskripsi}
                        harga={el.harga}
                    />
                ) 
            })
        })
    }

    componentWillMount() {
        this.getProduct()
    }

    render() {

    const season = this.props.season.map((x)=>{
        return (
            <div key = {x.id}>
                <div className="col-sm-6 gambar1"> 
                    <a href= {`/subcategory/${x.id}`} onClick={() => this.getseasonid(x.id)}><img src={x.pict} alt="Image" className="new"/>
                    <div className="overlay">{x.season}</div></a>    
                </div>
            </div>
        )
    })

    return (
        <div>
                {/* Jumbotron */}
            <div className="jumbotron text-center kotak">
            <h1 id="logo1">MyHijab</h1> 
            <p>~Hijab elegan trendy~</p> 
        </div>


{/* carousel */}
<div className="container">
<div className="row">
  <div className="col-sm-8">
  <div class="carousel slide" id="iniCarousel" data-ride="carousel">
  <ol class="carousel-indicators">
      <li data-target="#iniCarousel"
      data-slide-to="0" class="active"></li>
      <li data-target="#iniCarousel"
      data-slide-to="1" class="active"></li>
      <li data-target="#iniCarousel"
      data-slide-to="2" class="active"></li>
  </ol>

  <div class="carousel-inner">
          <div class="item active">
              <img src={baner}/>
          </div>
         
      
      <div class="item">
          <img src={baner}/>
              </div>
      <div class="item">
          <img src={baner}/>
              </div>
      
              <a class="right carousel-control"
                  href="#iniCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right">
              </span></a>
              <a class="left carousel-control"
              href="#iniCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"> 
          </span></a>

      </div>
  </div>
</div>



  
  <div className="col-sm-4 kotak">
    <div className="well">
      <p>MyHijab koleksi terbaru!! <span><a href ="/">Selengkapnya...</a></span></p>
    </div>
    <div className="well">
    <p>MyHijab lagi diskon!! <span><a href ="/">Selengkapnya...</a></span></p>
    </div>
    <div className="well">
    <p>MyHijab simpel dan elegan <span><a href ="/">Selengkapnya...</a></span></p>
    </div>
  </div>
</div>
<hr/>
</div>


{/* New product */}
<div className="container text-center bg-1">    
<h3 id="judul1">New Collections</h3><br/>
<div className="row">{season}</div></div>   


{/* Products */}
<div className="container text-center bg-2">

<div className="row harga np">
{this.state.listProduct}
    
    
          </div>
    </div> 


</div>
);
}
}


export default Beranda;

