// import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// import { provider, auth } from '/fire';


// class Navbar extends Component {


// // constructor(){
// //     super();
// //     this.state = {user: null}
// //   }
  
// //     async login (){
// //       const result = await auth().signInWithPopup(provider);
// //       this.setState({user: result.user});
// //     }
  
// //       async logout (){
// //         await auth().signOut()
// //         this.setState({user:null});
// //       }


//     render(){
//         return(
// <div>
//         {/* Header */}
//          {/* Navbar */}
//     <nav className="navbar navbar-default navbar-fixed-top">
//             <div className="container">
//               <div className="navbar-header">
//                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//                   <span className="icon-bar"></span>
//                   <span className="icon-bar"></span>
//                   <span className="icon-bar"></span>                        
//                 </button>
//                 <a className="navbar-brand" href="/" id="logo2">MyHijab</a>
//               </div>
//               <div className="collapse navbar-collapse" id="myNavbar">
//                 <ul className="nav navbar-nav navbar-left">
//                   <li><Link to="/">BERANDA</Link></li>
//                   <li><Link to="/">HIJAB</Link></li>
//                   <li class="dropdown">
//                     <a class="dropdown-toggle" data-toggle="dropdown" href="/">MORE
//                     <span class="caret"></span></a>
//                     <ul class="dropdown-menu">
//                       <li><Link to="/">Aksesoris</Link></li>
//                       <li><Link to="/">Produk Terbaru</Link></li>
//                       <li><Link to="/">Populer</Link></li> 
//                     </ul>
//                   </li>
//                 </ul>

//                 {/* <form class="navbar-form navbar-right">
//                 <div class="input-group">
//                   <input type="text" class="form-control" placeholder="Search"/>
//                   <div class="input-group-btn">
//                     <button class="btn btn-default" type="submit">
//                       <i class="glyphicon glyphicon-search"></i>
//                     </button>
//                   </div>
//                 </div>
//               </form> */}
//                 <ul className="nav navbar-nav navbar-right">
//                     <li><a>{this.props.user ? `Welcome, ${this.props.user.displayName}!` : 'Welcome'}</a></li>
//                     <li><a onClick={this.login.bind(this)}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
//                     <li><a onClick={this.logout.bind(this)}>Logout</a></li>
//                     <li><a><span className="glyphicon glyphicon-shopping-cart"></span>{this.state.cart}</a></li>
            
//                 </ul>
//               </div>
//             </div>
//           </nav>
//       </div>

// );
// }
// }


// export default Navbar;