import { Meteor } from 'meteor/meteor';
import { CountersCollection } from '/imports/api/counters';

const insertCounter = ({ user, count }) => CountersCollection.insert({ user, count });

Meteor.startup(() => {
  // If the Counters collection is empty, add some data.
  if (CountersCollection.find().count() === 0) {
    [
      { user: 'User A', count: 0 },
      { user: 'User B', count: 0 },
    ].forEach(insertCounter);
  }
});
