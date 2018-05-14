import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { urlAPI } from '../config.json';

import shop1 from '../img/shop1.jpg';
import shop2 from '../img/shop2.jpg';

class Subcategory extends Component {
    
    state = {
        listSubcategory: []
    }

    // getseasonid = (id) => {
    //     axios.get(`http://localhost:3002/subcategory/${id}`)
    //     .then((subcategory_data) => {
    //         console.log(subcategory_data)
    //         this.setState({subcategory:subcategory_data.data})
    //         console.log(this.state)
    //     })
    // }

    getSubCategory(id) {
        axios.get(`${urlAPI}/subcategory/byseason/${id}`)
        .then(res => this.setState({
            listSubcategory: res.data.list.map((el, i) =>
                <div key = {i}>
                    <div className="col-sm-6 gambar1"> 
                        <a href= {`/category/${el.id}`} onClick={() => this.getsubcategoryid(el.id)}><img src={shop1} alt="Image" className="new"/>
                        <div className="overlay">{el.subcategory}</div></a>    
                    </div>
                </div>
            )
        }))
    }

    componentWillMount() {
        // console.log('miaaaaw', this.props.idSeason)
        // this.getseasonid(this.props.idSeason)
        this.getSubCategory(this.props.idSeason)
    }

  render(){
      
    // const subcategory = this.state.subcategory.map((x)=>{
    //     return (
    //         <div key = {x.id}>
    //             <div className="col-sm-6 gambar1"> 
    //                 <a href= {`/category/${x.id}`} onClick={() => this.getsubcategoryid(x.id)}><img src={shop1} alt="Image" className="new"/>
    //                 <div className="overlay">{x.subcategory}</div></a>    
    //             </div>
    //         </div>
    //     )
    // })

    return (
      <div>
       

     {/* Jumbotron */}
<div className="jumbotron text-center kotak">
<h1 id="logo1">MyHijab</h1> 
<p>~Hijab elegan trendy~</p> 
</div>


{/* New product */}
<div className="container text-center bg-1">    
<h3 id="judul1">New Collections</h3><br/>
<div className="row">{ this.state.listSubcategory }</div></div>   




</div>
);
}
}


export default Subcategory;

