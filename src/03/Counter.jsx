import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        };
        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
        let data = this.state.count;
        // this.setState({count: data+1});
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <span>카운트: {this.state.count}</span>
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default Counter;