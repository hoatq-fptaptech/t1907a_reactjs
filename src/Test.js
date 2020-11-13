import React from 'react';

export default class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            xxx: props.number
        }
    }

    render() {
        return <h1>{this.state.xxx}</h1>
    }
}