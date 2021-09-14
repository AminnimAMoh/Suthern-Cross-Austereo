import React from 'react';
import PropTypes from 'prop-types';

function EventCards({ name, discription, url }) {
  return (
    <div>
      <img src={url} alt="content" />
      <h1>{name}</h1>
      <h1>{discription}</h1>
    </div>
  );
}

EventCards.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default EventCards;
