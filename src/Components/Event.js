import React from 'react';
import Button from './Button.js';

const styles = {
  background: '#CCC',
  borderRadius: '15px',
  textAlign: 'left',
  padding: '0 0 0 15px',
};

export default ({ event }) => {
  return (
    <div style={styles}>
      <h2>
        {'\u2728'} {event.title}
      </h2>
      <div>{event.description}</div>
      <Button label="I'm in" />
      <Button label="I'm out" />
    </div>
  );
};
