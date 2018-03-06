import React, { Component } from 'react';

import shopgamis1 from '../img/shopgamis1.jpg';
import shopgamis2 from '../img/shopgamis2.jpg';
import shopgamis3 from '../img/shopgamis3.jpg';
import shopgamis4 from '../img/shopgamis4.jpg';
import shophijab1 from '../img/shophijab1.jpg';
import shophijab2 from '../img/shophijab2.jpg';
import shophijab3 from '../img/shophijab3.jpg';
import shophijab4 from '../img/shophijab4.jpg';

class Category extends Component {
  
  render(){

    return (
      <div>
       
       {/* breadcrumb */}
<div className="container bread">
        <ul className="breadcrumb">
          <li><a href="/beranda">Beranda</a></li>
          <li className="active">Category</li>        
        </ul>
      </div>

       {/* Category */}
       <div className="container">
       <div className="row ctgry">
           <div className="col-sm-3">
                   <h3>Category</h3>
                   <ul className="list-group">
                           <a href="#hijab" className="list-group-item">Hijab <span className="label label-danger">New!</span></a>
                           <a href="#gamis" className="list-group-item">Gamis <span className="badge">4</span></a> 
                           <a href="#aksesoris" className="list-group-item">Aksesoris <span className="label label-danger">Sold Out!</span></a> 
                         </ul>
           </div>
           <div className="col-sm-9 text-center">
                   <div className="row harga np bg-2" id="gamis">
                           <div className="col-sm-3"> 
                           <div className="product1">
                                           <a href="/gamis1">
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
                                           <a href="/gamis2">
                                           <img src={shopgamis3} alt="Gamis" className="product1img"/>
                                               <div className="middle text">Buy</div>
                                           </a>
                                       </div>
                                           <p><strong>Gamis MyHijab</strong></p>
                                           <p>Green gamis <br/>Rp.150.000</p>
                                         </div>   
                   
                               <div className="col-sm-3"> 
                               <div className="product1">
                                               <a href="/gamis3">
                                               <img src={shopgamis4} alt="Gamis" className="product1img"/>
                                                   <div className="middle text">Buy</div>
                                               </a>
                                           </div>
                                               <p><strong>Gamis MyHijab</strong></p>
                                               <p>Pink gamis <br/>Rp.150.000</p>
                                             </div> 
                                 </div>
      {/* category hijab */}

      <div className="row harga np bg-1" id="hijab"> 
                    <div className="col-sm-3"> 
                        <div className="product1">
                                        <a href="/hijab1">
                                        <img src={shophijab1} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>Hijab MyHijab</strong></p>
                                        <p>Peach Hijab<br/>Rp.50.000</p>
                                      </div>
                        
                        <div className="col-sm-3"> 
                        <div className="product1">
                                        <a href="/hijab2">
                                        <img src={shophijab2} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>Hijab MyHijab</strong></p>
                                        <p>Grey Hijab <br/>Rp.50.000</p>
                                      </div> 
                          
                          <div className="col-sm-3"> 
                          <div className="product1">
                                        <a href="/hijab3">
                                        <img src={shophijab3} alt="Hijab" className="product1img"/>
                                            <div className="middle text">Buy</div>
                                        </a>
                                    </div>
                                        <p><strong>Hijab MyHijab</strong></p>
                                        <p>Pink Hijab <br/>Rp.50.000</p>
                                      </div>   
                
                            <div className="col-sm-3"> 
                            <div className="product1">
                                            <a href="/hijab4">
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
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
      </ul>
    

        </div>
    );
    }
  }

  
  export default Category;

