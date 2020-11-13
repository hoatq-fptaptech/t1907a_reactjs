import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Category from "./Category";
import Detail from "./Detail";
import Test from "./Test";
import React from 'react';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:1
        }
    }

    render(){
      const links = [
          {
              title:"Home",
              path:"/"
          },
          {
              title:"Category",
              path:"/category"
          },
          {
              title:"Product",
              path:"/detail"
          },
          {
              title:"About us",
              path:"/"
          },
          {
              title:"Contact us",
              path:"/"
          }
      ];
      return (
          <BrowserRouter>
              <div className="App">
                  <Header links={links}/>
                  <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route exact path="/category">
                          <Category/>
                      </Route>
                      <Route exact path="/detail">
                          <Detail/>
                      </Route>
                  </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;
