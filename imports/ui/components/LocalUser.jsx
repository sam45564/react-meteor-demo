import React, { Component } from 'react';

export class LocalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            count: 0
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Click Me!</button>
                <p>You have clicked {this.state.count} times.</p>
            </React.Fragment>
        );
    }
}
