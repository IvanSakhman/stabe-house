import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 84.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 1.375rem;
  }
`;

export const SmallWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 70.13rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 23rem;
  }
`;
