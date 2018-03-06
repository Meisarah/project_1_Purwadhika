import React, { Component } from 'react';
import baner from '../img/baner.jpg';
import shop1 from '../img/shop1.jpg';
import shop2 from '../img/shop2.jpg';

import list2 from '../detail/Gamis.json';

class Beranda extends Component {
  
  render(){

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
      <p>MyHijab koleksi terbaru!! <span><a href ="/category">Selengkapnya...</a></span></p>
    </div>
    <div className="well">
    <p>MyHijab lagi diskon!! <span><a href ="/category">Selengkapnya...</a></span></p>
    </div>
    <div className="well">
    <p>MyHijab simpel dan elegan <span><a href ="/category">Selengkapnya...</a></span></p>
    </div>
  </div>
</div>
<hr/>
</div>

{/* New product */}
<div className="container text-center bg-1">    
<h3 id="judul1">New Collections</h3><br/>
<div className="row">
    <div className="col-sm-6 gambar1">
      <a href="/product"><img src={shop1} alt="Image" className="new"/></a>
        <div className="overlay">Hijab Special from MyHijab</div>
      </div>
      <div className="col-sm-6 gambar1"> 
        <a href="/product"><img src={shop2} alt="Image" className="new"/></a>
        <div className="overlay">Hijab Special from MyHijab</div>    
      </div>
</div>
</div>      

{/* Products */}
<div className="container text-center bg-2">

<div className="row harga np">
{list2.map(function(gms) {
    return <div>
          <div className="col-sm-3"> 
              <div className="product1">
                              <a href="/category">
                              <img src={process.env.PUBLIC_URL + gms.gambar} alt="Hijab" className="product1img"/>
                                  <div className="middle text">Buy</div>
                              </a>
                          </div>
                              <p><strong>{gms.name}</strong></p>
                              <p>{gms.produk}<br/>{gms.harga}</p>
                            </div>
                            </div>
})}
    
    
          </div>
    </div>


</div>
);
}
}


export default Beranda;

