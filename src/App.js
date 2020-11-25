import './App.css';
import React from 'react';
import Layout from "./pages/Layout";
import Hook from "./Hook";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:1
        }
    }

    render(){
      return (
         <Hook number={this.state.count}/>
      );
  }
}

export default App;
