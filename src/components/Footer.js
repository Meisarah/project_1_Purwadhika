import React, { Component } from 'react';



class Footer extends Component {
  
    render(){
  
      return (
        <div>
{/* Footer */}

<footer className="container-fluid text-center bg-footer">
<div className="col-sm-4">
   <h3 id="footer1">Learn more about us</h3><br/>
   <div className="icon-white">
    <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>  &nbsp; &nbsp;&nbsp;
    <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a> &nbsp; &nbsp;&nbsp;
    <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>  &nbsp; &nbsp;&nbsp;
    <a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>  &nbsp; &nbsp;&nbsp;
   </div>
   <br/>

    <div className="about"><a href="/">About Us</a> &nbsp;
    <a href="/">Customer Service</a> &nbsp;
    <a href="/">Terms</a> &nbsp;
    <a href="/">Privacy</a> &nbsp;
    <a href="/">Cookies</a>
    </div>
  </div>

{/* kontak */}
  <div className="col-sm-4">
    <h3 id="footer1">Subscribe to our page</h3>
              <section className="home-newsletter">
        <div className="row">
        <div className="col-sm-12">
          <div className="single"><br/>
          <div className="input-group">
                 <input type="email" className="form-control" placeholder="Enter your email"/>
                 <span className="input-group-btn">
                 <button className="btn btn-theme" type="submit">Subscribe</button>
                 </span>
                  </div>
          </div>
        </div>
        </div>
        </section>
    </div>

{/* footer logo */}
    <div className="col-sm-4"><br/><br/>
        <div className="footer-logo">
            <p id="logo1">MyHijab</p>
          </div>
        

      </div>
      
</footer>

<div className="container-fluid text-center bg-footer">
  <p id="copyright">©Copyright 2018 MyHijab. All rights reserved | Design by Meisarah Marsa</p>
 </div>
 </div>
);
}
}


export default Footer;
