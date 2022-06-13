import styled from 'styled-components';
import breakpoints from 'constants/breakpoints';
import patternImage from '../../images/white-pattern.png';
import patternImageMobile from '../../images/white-pattern-mobile.png';

export const Section = styled.section`
  background: var(--orange) url(${patternImage}) no-repeat left top;
  padding: 15rem 0 12rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 6.87rem 2.6rem 5.7rem;
    background: var(--orange) url(${patternImageMobile}) no-repeat left top;
  }
`;

export const Block = styled.div`
  margin: 0 auto;
  max-width: 38rem;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  padding: 0 0 2.9rem 0;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const QuoteIcon = styled.img`
  margin: 0 auto 1.3rem;
`;

export const Description = styled.p`
  font-family: 'Noe Text';
  margin: 0;
  font-size: 2.5rem;
  line-height: 2.88rem;
  color: var(--blueDarkest);
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
    line-height: 2.25rem;
    margin-top: 1.3rem;
  }
`;

export const AuthorText = styled.p`
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.38rem;
  color: var(--blueDarkest);
  margin: 2.75rem 0 0.75rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1rem;
    line-height: 1.375rem;
    margin-top: 2.8rem;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
`;
