import React from 'react';

function Button({category = 'primary', text='Learn More'}) {
  return (
    <button className={`btn btn--${category}`}>{text}</button>
  );
}

export default Button;