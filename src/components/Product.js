import React, { Component } from 'react';
import data from '../detail/Detail.json';
import list from '../detail/List.json';
import { Link } from "react-router-dom";
import axios from 'axios';


class Product extends Component {

constructor(){
  super();
  this.state = {
      product_detail: {},
      list_warna: [],
      list_size: [],
      count: 0
  };
}

  getproduct_detailid = (id) => {
    axios.get(`http://localhost:3002/productdetail/${id}`)
    .then((product) => {
      this.setState({
        product_detail: product.data.rows1[0],
        list_warna: product.data.rows2,
        list_size: product.data.rows3
      });
      // console.log('meooong', product.data);
    })
  } 

componentWillMount() {
  this.getproduct_detailid(this.props.idProduct_detail);
}

cart(x) 
{
  axios.post('http://localhost:3002/cart', 
  { 
    namaproduk: x.namaproduk.value, 
    hargaproduk: x.hargaproduk.value,
    warna: x.warna.value, 
    ukuran: x.ukuran.value,
  })
  .then(function(response){
    console.log('saved successfully')
  });
}

tambah= () => {
  this.setState({
  count: this.state.count+1
  });
  }

  kurang= () => {
    this.setState({
    count: this.state.count-1
    });
    }



render(){
  
    let product = () => {
      let detail = this.state.product_detail
      return (
        <div>
          <div className="col-sm-4">
                    <img src={detail.gambar} alt="Gamis" style={{width:320,height:550}}/>
            </div>
            <div className="col-sm-4">
                    <p><strong>{detail.product}</strong></p>
                    <p>My Hijab</p> 
                    <p>Rp.{detail.harga},-</p>
                    <h4>Description</h4>
                    <ul id="harga">
                        <li>Bahan : {detail.deskripsi} </li>
                    </ul>
           
                
                <p>GRATIS ONGKIR !</p>
                    <h4>Pilihan</h4>
                    <div className="row">
                    <div className="col-sm-6">
                    <div className="form-group">Warna
                                        <select className="form-control">
                                        {this.state.list_warna.map(x => 
                                            <option key={x.id} onClick={() => this.getproduct_detailid(x.id)}>
                                             {x.color}
                                            </option>)}
                                        </select>
                                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">Ukuran
                                        <select className="form-control">
                                        {this.state.list_size.map(y=>
                                          <option key={y.id}>{y.size}</option>)}
                                        </select>
                                      </div>
                    </div>
                    </div>
                   
                    <h4>Jumlah</h4>
                    <div className="row">
                        <div className="col-sm-4">
                                      <button type="button" className="btn btn-primary" onClick= {this.kurang}>-</button>
                                      <span>&nbsp;&nbsp;&nbsp;{ this.state.count }&nbsp;&nbsp;&nbsp;</span> 
                                      <button type="button" className="btn btn-primary" onClick= {this.tambah}>+</button>
                                        
                        </div>
                        <div className="col-sm-8">
                                <button type="button" className="btn btn-primary btn-block" onClick={() => this.cart} value="Submit">Add to Cart</button>
                        </div>
                    </div>
                    <br/>
                        
                </div>


                <div className="col-sm-4">
                <div className="list-group">
                <a href="/" className="list-group-item">Hijab <span className="label label-danger">New!</span></a>
                <a href="/" className="list-group-item">Gamis <span className="badge">4</span></a> 
                <a href="/" className="list-group-item">Aksesoris <span className="label label-danger">Sold Out!</span></a> 
                
                </div>
                </div>
                </div>


      )
    }
  

    return (
      <div>

      {/* breadcrumb */}
      <div className="container bread">
        <ul className="breadcrumb">
          <li><a href="/">Beranda</a></li>
          <li className="active">{this.state.product_detail.product}</li>        
        </ul>
      </div>

      {/* Produk */}

      <div className="container">
        <div className="row np">
        {product()}
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
                                        <a href="/">
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
        <li><a href="/">Previous</a></li>
        <li><a href="/">Next</a></li>
      </ul>

            })}
        </div>
    );
    }
  }

  
  export default Product;


