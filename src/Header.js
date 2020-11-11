import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component{
    render() {
        return (
            <div className="site-navbar py-2">
                <div className="search-wrap">
                    <div className="container">
                        <a href="#" className="search-close js-search-close"><span className="icon-close2" /></a>
                        <form action="#" method="post">
                            <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <div className="site-logo">
                                <Link to="/" className="js-logo-clone">
                                    <strong className="text-primary">Pharma</strong>tive
                                </Link>
                            </div>
                        </div>
                        <div className="main-nav d-none d-lg-block">
                            <nav className="site-navigation text-right text-md-center" role="navigation">
                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li><Link to="/category">Category</Link></li>
                                    <li className="has-children">
                                       <Link to="/detail">Products</Link>
                                    </li>
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="icons">
                            <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search" /></a>
                            <a href="cart.html" className="icons-btn d-inline-block bag">
                                <span className="icon-shopping-bag" />
                                <span className="number">2</span>
                            </a>
                            <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}