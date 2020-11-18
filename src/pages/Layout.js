import React from 'react';
import Nav from "../components/html/Nav";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "../components/html/Header";
import Home from "./home/Home";
import Category from "./category/Category";
import Detail from "./product/Detail";
import Login from "./authetication/Login";

export default function Layout() {
    return (
        <BrowserRouter className="page">
            <Header/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/category/:id"><Category/></Route>
                <Route path="/detail"><Detail/></Route>
                <Route path="/login"><Login/></Route>
            </Switch>
        </BrowserRouter>
    )
}