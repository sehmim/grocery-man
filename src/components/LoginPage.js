import React, { Component } from "react";


const LoginPage = () => {
    return(
    <div className="container"> 
        <br />
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
                <div class="panel-heading">
                <h3 className="panel-title">sign in as <b> Buyer </b></h3>
                </div>
                <div className="panel-body">
                <form accept-charset="UTF-8" role="form">
                    <fieldset>
                    <div className="form-group">
                        <input className="form-control" placeholder="E-mail" />
                    </div>
                    <div class="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" value=""></input>
                    </div>
                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"></input>
                    </fieldset>
                </form>
                </div>
            </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
                <div class="panel-heading">
                <h3 className="panel-title">sign in as <b> Vendor </b></h3>
                </div>
                <div className="panel-body">
                <form accept-charset="UTF-8" role="form">
                    <fieldset>
                    <div className="form-group">
                        <input className="form-control" placeholder="E-mail" />
                    </div>
                    <div class="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" value=""></input>
                    </div>
                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"></input>
                    </fieldset>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>  
            
    )
} 

export default LoginPage;