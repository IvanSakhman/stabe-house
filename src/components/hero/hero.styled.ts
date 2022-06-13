import styled from 'styled-components';
import { Subtitle } from '../text';
import patternImage from '../../images/pattern.png';
import patternImageMobile from '../../images/pattern-mobile.png';
import heroImage from '../../images/rectangle.png';
import heroMobileImage from '../../images/hero-mobile.png';
import breakpoints from '../../constants/breakpoints';

export const Background = styled.div`
  width: 100%;
  background: transparent url(${patternImage}) no-repeat left bottom;

  @media (max-width: ${breakpoints.md}) {
    background: transparent url(${patternImageMobile}) no-repeat center top;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 5.06rem 0;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: ${breakpoints.xl}) {
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem 0;
    flex-direction: column;
    gap: 3.4rem;
  }
`;

export const StyledImage = styled.div`
  width: 33.06rem;
  height: 33.06rem;
  background-image: url(${heroImage});
  background-size: cover;

  @media (max-width: ${breakpoints.xl}) {
    width: 48vw;
    height: 48vw;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 20.62rem;
    height: 20.62rem;
    background-image: url(${heroMobileImage});
  }

  @media (max-width: ${breakpoints.xs}) {
    width: calc(100vw - 2rem);
    height: calc(100vw - 2rem);
  }
`;

export const TextContainer = styled.div`
  margin-top: 10.7rem;
  max-width: 26.37rem;
  width: 100%;

  @media (max-width: ${breakpoints.xl}) {
    margin-top: 0;
  }

  @media (max-width: ${breakpoints.lg}) {
    max-width: 45vw;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Subheading = styled(Subtitle)`
  margin-top: 0.6rem;

  @media (max-width: ${breakpoints.md}) {
    margin-top: 0.75rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.31rem;

  button {
    width: 50%;
  }

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    gap: 0.75rem;

    button {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    margin-top: 1.44rem;
    flex-direction: column;
    gap: 0.75rem;

    button {
      width: 100%;
      padding: 0.875rem 0;
      font-size: 1rem;
    }
  }
`;
