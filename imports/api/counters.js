import { Mongo } from 'meteor/mongo';

export const CountersCollection = new Mongo.Collection('counters');
