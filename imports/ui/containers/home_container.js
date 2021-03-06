import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {LoaderTransition} from './loader';
import Home from '../components/home/home.js';
import {Events} from '../../api/events/events';

function composer(props, onData) {
  const handle = Meteor.subscribe('eventsList');
  if(handle.ready()) {
    const events = Events.find(
      {
        date: {
          $gte: new Date()
        }
      },
      {sort: {date: 1}});
    onData(null, {events});
  }

}

export default composeWithTracker(composer, LoaderTransition)(Home);
