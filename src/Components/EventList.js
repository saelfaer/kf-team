import React from 'react';
import Event from './Event';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const mapEvents = events => {
  return events.map(e => {
    return <Event event={e} />;
  });
};

export default ({ events }) => {
  return (
    <div style={styles}>
      <h2>Kinderfuiven</h2>
      <ul>{mapEvents(events)}</ul>
    </div>
  );
};
