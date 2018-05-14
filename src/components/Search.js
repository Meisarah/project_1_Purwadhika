// import React, { Component } from 'react';
// import axios from 'axios';
// export default class Search extends Component{

// state = {
//     Search : []
// }

// getsearch = (id) => {
//     axios.get(`http://localhost:3002/product/${id}`)
//     .then ((a) => {
//       this.setState({Search:a.data})
//     })
//   } 

// componentWillMount() {
//     this.getsearch(this.props.idSearch)
// }

// render(){

//     const product = this.state.Search.map((x)=>{
//         return (
//             <div key = {x.id}>
//             <div className="col-sm-3"> 
//             <div className="product1">
//                             <a href={`/product/${x.id}`} onClick={() => this.getsubcategoryid(x.id)}>
//                             <img src={x.gambar} alt="Hijab" className="product1img" style={{height:310,width:165}}/>
//                                 <div className="middle text">Buy</div>
//                             </a>
//                         </div>
//                             <p><strong>{x.product}</strong></p>
//                             <p>My Hijab<br/>Rp.{x.harga}</p>
//                         </div>
//                         </div>
//         )
//     })

//     return(

//         {product}
        
//     )
// }
// }

