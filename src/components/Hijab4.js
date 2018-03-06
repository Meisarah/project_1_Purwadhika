import React, { Component } from 'react';
import hijab4 from "../img/shophijab4.jpg";
import data from '../detail/Detail.json';
import list from '../detail/List.json';

class Hijab4 extends Component {
  
  render(){

    return (
      <div>
        {data.map(function(gamis) {
              return <div>

      {/* breadcrumb */}
<div className="container bread">
        <ul className="breadcrumb">
          <li><a href="/beranda">Beranda</a></li>
          <li className="active">Hijab</li>        
        </ul>
      </div>

      {/* Produk */}

      <div className="container">
        <div className="row np">
            <div className="col-sm-4">
                    <img src={hijab4} alt="Gamis"/>
            </div>
            <div className="col-sm-4">
            
                    <p><strong>Hijab MyHijab</strong></p>
                    <p>Pasmina Hijab</p> 
                    <p>Rp.95.000,-</p>
                    <h4>Description</h4>
                    <p>{gamis.deskripsi}</p>
                    <ul id="harga">
                        <li>Bahan : {gamis.bahan} </li>
                        <li>Motif : tanpa motif </li>
                        <li>Style : pasmina </li>
                    </ul>

              
            
                    <p>GRATIS ONGKIR !</p>
                    <h4>Pilihan</h4>
                    <div className="row">
                    <div className="col-sm-6">
                    <div className="form-group">Warna
                                        <select className="form-control">
                                          <option>Merah</option>
                                          <option>Hitam</option>
                                          <option>Pink</option>
                                          <option>Hijau</option>
                                        </select>
                                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">Ukuran
                                        <select className="form-control">
                                          <option>S</option>
                                          <option>M</option>
                                          <option>L</option>
                                          <option>XL</option>
                                        </select>
                                      </div>
                    </div>
                    </div>
                    <h4>Jumlah</h4>
                    <div className="row">
                        <div className="col-sm-4">
                                <div className="form-group">
                                        <select className="form-control">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                        </select>
                                      </div>
                        </div>
                        <div className="col-sm-8">
                                <button type="button" className="btn btn-primary btn-block">Add to Cart</button>
                        </div>
                    </div>
                    <br/>
                </div>

                
                <div className="col-sm-4">
                <div className="list-group">
                <a href="/category" className="list-group-item">Hijab <span className="label label-danger">New!</span></a>
                <a href="/category" className="list-group-item">Gamis <span className="badge">4</span></a> 
                <a href="/category" className="list-group-item">Aksesoris <span className="label label-danger">Sold Out!</span></a> 
              </div>
                        
                </div>

               
        </div>
    </div>
<br/>
    {/* category hijab */}
<div className="container text-center">

    <div className="row harga np bg-1" id="hijab"> 
    <h3 id="judul1">Recommended</h3><br/>
    {list.map(function(hijab) {
              return <div>
                    <div className="col-sm-3"> 
                        <div className="product1">
                                        <a href="/category">
                                        <img src={process.env.PUBLIC_URL + hijab.gambar} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>{hijab.name}</strong></p>
                                        <p>{hijab.produk}<br/>{hijab.harga}</p>
                                      </div>
                                      </div>
    })}
                        
                        
                                      
                </div> 
                </div>

      {/* Pager */}
      <ul className="pager warnapager">
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
      </ul>

      </div>
            })}
        </div>
    );
    }
  }

  
  export default Hijab4;


