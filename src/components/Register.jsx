import React, { Component } from 'react';
import Axios from 'axios';
import { urlAPI } from '../config.json';

export default class Register extends Component{

    register({ username, password, name, email }) {
        Axios.post(`${urlAPI}/userlogin`, { username, password, name, email })
    }

    render(){
        return(
            <div className="container bg-1">
            <form class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-2">Username:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" ref="username"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">Name:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" ref="name"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">Password:</label>
                    <div class="col-sm-10">          
                    <input type="password" class="form-control" ref="password"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2">Email:</label>
                <div class="col-sm-10">          
                    <input type="email" class="form-control" ref="email"/>
                </div>
            </div>
            <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" onClick={(event) => {
                        event.preventDefault()
                        this.register({
                            username: this.refs.username.value,
                            password: this.refs.password.value,
                            name: this.refs.name.value,
                            email: this.refs.email.value
                        })
                    }}>Daftar</button>
                </div>
            </div>
  </form></div>
        )
    }
}