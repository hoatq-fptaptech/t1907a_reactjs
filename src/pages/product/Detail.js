import React from 'react';
import Block from "../home/Block";

export default class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product:{}
        }
    }
    componentDidMount() {
        // update product
    }

    render() {
        return (
            <Block/>
            // form update - ban dau hiden
            // show khi nhan vao update san pham
            // sau khi submit form -> cap nhat lai thong tin san pham
        )
    }
}