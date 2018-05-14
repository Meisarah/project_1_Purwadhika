import React, { Component } from 'react';
import shop1 from '../img/shop1.jpg';
import shopgamis1 from '../img/shopgamis1.jpg';
import shopgamis2 from '../img/shopgamis2.jpg';
import shopgamis3 from '../img/shopgamis3.jpg';
import shopgamis4 from '../img/shopgamis4.jpg';
import shophijab1 from '../img/shophijab1.jpg';
import shophijab2 from '../img/shophijab2.jpg';
import shophijab3 from '../img/shophijab3.jpg';
import shophijab4 from '../img/shophijab4.jpg';

import axios from 'axios';
import { urlAPI } from '../config.json';

class Category extends Component {
  
    state = {
        productBySubCategoryId: []
    }
   
    // getsubcategoryid = (id) => {
    //     axios.get(`http://localhost:3002/product/${id}`)
    //     .then ((product_data) => {
    //       this.setState({product:product_data.data})
    //     })
    //   } 
    
    getProductBySubCategoryId(id) {
        axios.get(`${urlAPI}/product/bysubcategory/${id}`)
        .then(res => {
            this.setState({
                productBySubCategoryId: res.data.list.map((el, i) =>
                    <div key = {i}>
                        <div className="col-sm-3"> 
                            <div className="product1">
                                <a href={`/product/${el.id}`} onClick={() => this.getsubcategoryid(el.id)}>
                                    <img src={el.gambar} alt="Hijab" className="product1img" style={{height:310,width:165}}/>
                                    <div className="middle text">Buy</div>
                                </a>
                            </div>
                            <p><strong>{el.product}</strong></p>
                            <p>My Hijab<br/>Rp.{el.harga}</p>
                        </div>
                    </div>
                )
            })
        })
    }

    componentWillMount() {
        this.getProductBySubCategoryId(this.props.idSubCategory)
        // this.getsubcategoryid(this.props.idProduct)
    }

  render(){

    // const product = this.state.product.map((x)=>{
    //     return (
    //         <div key = {x.id}>
    //         <div className="col-sm-3"> 
    //         <div className="product1">
    //                         <a href={`/product/${x.id}`} onClick={() => this.getsubcategoryid(x.id)}>
    //                         <img src={x.gambar} alt="Hijab" className="product1img" style={{height:310,width:165}}/>
    //                             <div className="middle text">Buy</div>
    //                         </a>
    //                     </div>
    //                         <p><strong>{x.product}</strong></p>
    //                         <p>My Hijab<br/>Rp.{x.harga}</p>
    //                     </div>
    //                     </div>
    //     )
    // })

    return (
      <div>
       
       {/* breadcrumb */}
<div className="container bread">
        <ul className="breadcrumb">
          <li><a href="/">Beranda</a></li>
          <li className="active">Category</li>        
        </ul>
      </div>

       {/* Category */}
       <div className="container">
       <div className="row ctgry">
           <div className="col-sm-3">
                   <h3>Category</h3>
                   <ul className="list-group">
                           <a href="/" className="list-group-item">Hijab <span className="label label-danger">New!</span></a>
                           <a href="/" className="list-group-item">Gamis <span className="badge">4</span></a> 
                           <a href="/" className="list-group-item">Aksesoris <span className="label label-danger">Sold Out!</span></a> 
                         </ul>
           </div>
           <div className="col-sm-9 text-center">
                   <div className="row harga np bg-2" id="gamis">
                   {this.state.productBySubCategoryId}
                           {/* <div className="col-sm-3"> 
                           <div className="product1">
                                           <a href="#">
                                           <img src={shopgamis1} alt="Gamis" className="product1img"/>
                                               <div className="middle text">Buy</div>
                                           </a>
                                       </div>
                                           <p><strong>Gamis MyHijab</strong></p>
                                           <p>Black gamis <br/>Rp.150.000</p>
                                         </div>
                           
                           <div className="col-sm-3"> 
                           <div className="product1">
                                           <a href="/product">
                                           <img src={shopgamis2} alt="Gamis" className="product1img"/>
                                               <div className="middle text">Buy</div>
                                           </a>
                                       </div>
                                           <p><strong>Gamis MyHijab</strong></p>
                                           <p>Red gamis <br/>Rp.150.000</p>
                                         </div> 
                             
                             <div className="col-sm-3"> 
                             <div className="product1">
                                           <a href="#">
                                           <img src={shopgamis3} alt="Gamis" className="product1img"/>
                                               <div className="middle text">Buy</div>
                                           </a>
                                       </div>
                                           <p><strong>Gamis MyHijab</strong></p>
                                           <p>Green gamis <br/>Rp.150.000</p>
                                         </div>   
                   
                               <div className="col-sm-3"> 
                               <div className="product1">
                                               <a href="#">
                                               <img src={shopgamis4} alt="Gamis" className="product1img"/>
                                                   <div className="middle text">Buy</div>
                                               </a>
                                           </div>
                                               <p><strong>Gamis MyHijab</strong></p>
                                               <p>Pink gamis <br/>Rp.150.000</p>
                                             </div>  */}
                                 </div>
      {/* category hijab */}

      <div className="row harga np bg-1" id="hijab"> 
                    <div className="col-sm-3"> 
                        <div className="product1">
                                        <a href="/">
                                        <img src={shophijab1} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>Hijab MyHijab</strong></p>
                                        <p>Peach Hijab<br/>Rp.50.000</p>
                                      </div>
                        
                        <div className="col-sm-3"> 
                        <div className="product1">
                                        <a href="/">
                                        <img src={shophijab2} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>Hijab MyHijab</strong></p>
                                        <p>Grey Hijab <br/>Rp.50.000</p>
                                      </div> 
                          
                          <div className="col-sm-3"> 
                          <div className="product1">
                                        <a href="/">
                                        <img src={shophijab3} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>Hijab MyHijab</strong></p>
                                        <p>Pink Hijab <br/>Rp.50.000</p>
                                      </div>   
                
                            <div className="col-sm-3"> 
                            <div className="product1">
                                            <a href="/">
                                            <img src={shophijab4} alt="Hijab" className="product1img"/>
                                                <div className="middle text">Buy</div>
                                            </a>
                                        </div>
                                            <p><strong>Hijab MyHijab</strong></p>
                                            <p>Pasmina Special <br/>Rp.50.000</p>
                                          </div>  
                </div> 
            </div>
           
        </div>
    </div>

        

      {/* Pager */}
 <ul className="pager warnapager">
        <li><a href="/">Previous</a></li>
        <li><a href="/">Next</a></li>
      </ul>
    

        </div>
    );
    }
  }

  
  export default Category;


