import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--blueDarkest);
`;

interface CircleProps {
  children: React.ReactNode;
  className?: string;
}

const Circle = ({ children, className = '' }: CircleProps): JSX.Element => {
  return <Background className={className}>{children}</Background>;
};

export default Circle;
