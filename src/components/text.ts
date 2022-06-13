import styled from 'styled-components';
import breakpoints from '../constants/breakpoints';

export const Title = styled.h2`
  margin: 0;
  font-family: 'Noe Text';
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3.5rem;
  color: var(--blueDarkest);

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.87rem;
    line-height: 2.25rem;
  }
`;

export const SecondaryTitle = styled.h3`
  margin: 0.94rem 0 1.25rem;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.875rem;
  color: var(--darkestBlue);
`;

export const Subtitle = styled.p`
  margin: 0.7rem 0 1.4rem 0;
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  line-height: 1.87rem;
  color: var(--greyDarker);

  @media (max-width: ${breakpoints.md}) {
    margin: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;
