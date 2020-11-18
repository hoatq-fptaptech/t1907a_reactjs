import React from 'react'
import {Link} from "react-router-dom";

export default class Nav extends React.Component{
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    <li><Link to="/detail">Detail</Link></li>
                </ul>
            </nav>
        )
    }
}