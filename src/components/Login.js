import React, { Component } from 'react';
import Axios from 'axios';
import { urlAPI } from '../config.json'

export default class Login extends Component{

    login({ username, password }) {
        Axios.post(`${urlAPI}/userlogin/login`, { username, password })
        .then(res => console.log(res))
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
                <label class="control-label col-sm-2">Password:</label>
                    <div class="col-sm-10">          
                    <input type="password" class="form-control" ref="password"/>
                </div>
            </div>
            <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" onClick={(event) => {
                        event.preventDefault()
                        this.login({
                            username: this.refs.username.value,
                            password: this.refs.password.value,
                        })
                    }}>Submit</button>
                </div>
            </div>
  </form></div>
        )
    }
}