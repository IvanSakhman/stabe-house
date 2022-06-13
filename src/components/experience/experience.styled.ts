import styled from 'styled-components';
import { Title } from '../text';
import breakpoints from '../../constants/breakpoints';

export const Container = styled.section`
  padding: 8rem 0 8.26rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 5.9rem 0 6.6rem;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.1rem;
  max-width: 33.62rem;
  width: 100%;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
    text-align: center;
    margin-top: 0;
  }
`;

export const StyledTitle = styled(Title)`
  @media (max-width: ${breakpoints.md}) {
    margin-right: 0.6rem;
    max-width: 16rem;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${breakpoints.md}) {
    max-width: 9.8rem;
    width: 100%;
  }
`;

export const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 27.14rem;
  justify-items: center;
  align-items: center;

  ${Logo}:nth-child(1) {
    grid-area: first;
  }

  ${Logo}:nth-child(2) {
    grid-area: second;
  }

  grid-template-areas: 'first second';

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    grid-template-areas: 'second first';
    grid-row-gap: 4.8rem;
    grid-template-rows: 6.5rem;
    grid-column-gap: 1rem;

    ${Logo}:nth-child(1) {
      max-width: 7.8rem;
    }

    ${Logo}:nth-child(2) {
      max-width: 10.8rem;
    }
  }
`;
