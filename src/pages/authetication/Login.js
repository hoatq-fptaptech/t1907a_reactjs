import React from 'react';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            email:"",
            password:"",
            fullname:"",
            isLogged:false
        }
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(){
        console.log(this.state.fullname);
        console.log(this.state.email);
        console.log(this.state.password);
        // fetch data user gui len api
        // login xong nhan duoc token -> luu token vao cookie/local storage
        // dispatch event cho redux

        // login xong update lai layout
        const user = {
            fullname:this.state.fullname,
            email:this.state.email,
            token:"abc"
        }
        window.localStorage.setItem("user_authetication",JSON.stringify(user));
       // window.sessionStorage.setItem("user_authetication",user);
        this.props.onLogged(user);
    }
    render() {
        const email = this.state.email;
        const fullname = this.state.fullname;
        const password = this.state.password;
        return (
            <form>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" onChange={this.handleChange} value={fullname} name="fullname" placeholder="FullName"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={this.handleChange} value={email} name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.handleChange} value={password} name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button type="button" onClick={this.handleSubmit} className="btn btn-danger">Login</button>
                </div>
            </form>
        )
    }

}