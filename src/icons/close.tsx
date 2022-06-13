import React from 'react';

const Close = ({ className = '' }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.73488 6L0 1.26512L1.26512 0L6 4.73488L10.7349 0L12 1.26512L7.26512 6L12 10.7349L10.7349 12L6 7.26512L1.26512 12L0 10.7349L4.73488 6Z"
      />
    </svg>
  );
};

export default Close;
