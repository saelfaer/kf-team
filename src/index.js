import React from 'react';
import { render } from 'react-dom';
import EventList from './Components/EventList';
import events from './Data/events.js';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <EventList events={events} />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
