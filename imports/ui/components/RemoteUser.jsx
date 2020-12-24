import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { CountersCollection } from '/imports/api/counters';

export const RemoteUser = () => {
    let remoteUser = null;

    if (Meteor.isClient) {
        Tracker.autorun(() => {
            Meteor.subscribe('allUsers');

            remoteUser = CountersCollection.find({ user: "two" }).fetch();
            console.log(remoteUser);
        });
    }

    return (
        <React.Fragment>
            {remoteUser.length > 0 && <p>Someone else clicked {remoteUser[0].count} times.</p>}
        </React.Fragment>
    )
}
