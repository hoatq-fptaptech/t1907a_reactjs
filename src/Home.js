import React from 'react';
import Block from "./Block";
import Grid from "./Grid";

export default class Home extends React.Component{
    render() {
        return [
            <Grid/>,
            <Block/>
        ]
    }
}