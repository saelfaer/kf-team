import React from 'react';
import Event from './Event';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const mapEvents = (events) => {
  return events.map(e => {
    return <Event event={e} />;
  });
};

export default ({ events }) => {
  // let items = [];
  // events.map(e => items.push(<Event event={e} />));
  // for (var i = 0; i < numitems; i++) {
  //   items.push(new <Event event={i} />);
  // }

  return (
    <div style={styles}>
      <h2>Kinderfuiven</h2>
      <ul>
        {mapEvents(events)}
      </ul>
    </div>
  );
};
