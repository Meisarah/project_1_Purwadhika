import React, { Component } from 'react';
import { urlAPI } from '../config.json'
import Axios from 'axios';

export default class Input_Season extends Component{
    state = {
        listSeason: [],
        listSubCategory: []
    }

    getListSeason() {
        Axios.get(`${urlAPI}/season`)
        .then(res => {
            this.setState({
                listSeason: res.data.list.map((el, i) => <option key={i} value={el.id}>{el.season}</option>)
            })
        })
    }

    getListSubCategory(id) {
        Axios.get(`${urlAPI}/subcategory/byseason/${id}`)
        .then(res => {
            this.setState({
                listSubCategory: res.data.list.map((el, i) => <option key={i} value={el.id}>{el.subcategory}</option>)            
            })
        })
    }

    addProduct({ subcategory_id, product, harga, deskripsi, gambar }) {
        Axios.post(`${urlAPI}/product`, { subcategory_id, product, harga, deskripsi, gambar })
        .then(res => {})
    }

    componentWillMount() {
        this.getListSeason()
    }

    render(){
        return(
            <div className="carousel bg-1">
            {/* <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Dropdown Example <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div> */}
            <select name="season" id="season" onChange={(event) => this.getListSubCategory(event.target.value)}>
                {this.state.listSeason}
            </select>
            {
                this.state.listSubCategory.length !== 0 ?
                <select name="subcategory" ref='subcategory_id' id="subcategory">
                    {this.state.listSubCategory}
                </select> : null
            }


        <form class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-2">Produk:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" ref="product"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">Harga:</label>
                    <div class="col-sm-10">          
                    <input type="number" class="form-control" ref="harga"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">Deskripsi:</label>
                <div class="col-sm-10">          
                    <input type="text" class="form-control" ref="deskripsi"/>
                </div>
            </div>
            <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" onClick={(event) => {
                        event.preventDefault()
                        this.addProduct({
                            subcategory_id: this.refs.subcategory_id.value,
                            product: this.refs.product.value,
                            harga: this.refs.harga.value,
                            deskripsi: this.refs.deskripsi.value,
                            gambar: 'gambar.png'
                        })
                    }}>Submit</button>
                </div>
            </div>
  </form>
                </div>
        )
    }
}