import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { CountersCollection } from '/imports/api/counters';

export class LocalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            user: props.user,
            count: 0
        };
    }

    componentDidMount() {
        const { user } = this.props;
        if (Meteor.isClient) {
            Tracker.autorun(() => {
                Meteor.subscribe('allUsers');

                let currentUser = CountersCollection.find({ user }).fetch();
                if (currentUser.length > 0) {
                    this.setState({ id: currentUser[0]._id });
                }
            });
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        const id = this.state.id;
        const count = this.state.count;

        if (Meteor.isClient) {
            Tracker.autorun(() => {
                Meteor.subscribe('updateUser', { id, count });

                CountersCollection.update({ _id: id }, { $set: { count } });
            });
        }
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
