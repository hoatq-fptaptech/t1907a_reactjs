import React from 'react';
import Block from "./Block";
import Grid from "../../components/grid/Grid";
import {api,url} from "../../services/Apdapter";
import {Food} from "../../services/models/Category";

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            number:0
        }
        this.changeNumber = this.changeNumber.bind(this);
    }
    async componentDidMount() {
        // https://foodgroup.herokuapp.com/api/today-special
        const rs = await api.get(url.today_special.url);
        if(rs.status === 200){
            const foods = rs.data.data.map(e=>{
                return new Food(e);
            })
            this.setState({
                products: foods
            })
        }
    }
    changeNumber(){
        let n = this.state.number;
        n++;
        this.setState({number:n});
    }
    render() {
        return [
            <h1>Number:{this.state.number}</h1>,
            <button onClick={this.changeNumber} type="button">Onclick</button>,
            <Grid key={1} products={this.state.products}/>,
            <Block key={2}/>
        ]
    }
}