import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Category from "./Category";
import Detail from "./Detail";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
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

export default App;
