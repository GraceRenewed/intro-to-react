'use client';

import PropTypes from 'prop-types';
import React from 'react'

export default function SayHello({ name, greeting  } ) {
  return (
    <>
  <div>Hello {name}</div>
  <div>{greeting}</div>
  <p>This is a paragraph</p>
  </>
  );
} 
  
  SayHello.propTypes = {
    name: PropTypes.string.isRequired,
    greeting: PropTypes.string,
  }
  
  SayHello.defaultProps = {
    greeting: 'We hope you have a wonderful day!',
  }
