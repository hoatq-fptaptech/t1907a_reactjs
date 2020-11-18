import React from 'react';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            user: {email:"",password:""},
            isLogged:false
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    changeEmail(e){
        const v = e.target.value;
        const user = this.state.user;
        user.email = v;
        this.setState({
            user:user
        })
        //console.log(this.state.user);
    }
    changePwd(e){
        const v = e.target.value;
        const user = this.state.user;
        user.password = v;
        this.setState({
            user:user
        })
        //console.log(this.state.user);
    }
    formSubmit(){
        // fetch data user gui len api
        // login xong nhan duoc token -> luu token vao cookie/local storage
        // dispatch event cho redux
    }
    render() {
        const user = this.state.user;
        return (
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={this.changeEmail} value={user.email} name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.changePwd} value={user.password} name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={this.formSubmit} className="btn btn-danger">Login</button>
                </div>
            </form>
        )
    }

}