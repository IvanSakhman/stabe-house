import React from 'react';

const Burger = ({ className = '' }): JSX.Element => {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 14H20V12H0V14ZM0 8H20V6H0V8ZM0 0V2H20V0H0Z" fill="#001C24" />
    </svg>
  );
};

export default Burger;
