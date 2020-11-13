import React from 'react';
import Block from "./Block";
import Grid from "./Grid";

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        // https://foodgroup.herokuapp.com/api/today-special
        fetch("https://foodgroup.herokuapp.com/api/today-special")
            .then(rs=>rs.json())
            .then(rs=>{
                this.setState({
                    products: rs.data
                })
            })
    }

    render() {
        return [
            <Grid key={1} products={this.state.products}/>,
            <Block key={2}/>
        ]
    }
}