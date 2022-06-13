import React from 'react';

const Arrow = ({ color = '' }) => {
  return (
    <svg width="12" height="6" viewBox="0 0 12 6">
      <path d="M0 0L6 6L12 0L0 0Z" fill={color} />
    </svg>
  );
};

export default Arrow;
