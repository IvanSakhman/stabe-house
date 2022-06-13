import styled from 'styled-components';
import breakpoints from 'constants/breakpoints';
import { Title, SecondaryTitle, Subtitle } from '../text';
import hexPatternImage from '../../images/hex-pattern.png';

export const Section = styled.section`
  width: 100%;
  background-color: var(--blueDarkest);
  padding: 4.275rem 0 6.16rem;
`;

export const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${breakpoints.lg}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  color: var(--light);

  @media (max-width: ${breakpoints.md}) {
    max-width: 20.625rem;
    margin: 0 auto;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26.5rem;
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    max-width: 20.625rem;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Icon = styled.img`
  max-width: 8.9rem;

  @media (max-width: ${breakpoints.md}) {
    max-width: 6.8rem;
  }
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20.625rem;
  height: 21.875rem;
  background: transparent url(${hexPatternImage}) no-repeat center center;
  background-size: cover;

  @media (max-width: ${breakpoints.xl}) {
    width: 25vw;
    height: 26.5vw;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 20.625rem;
    height: 21.875rem;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 15.69rem;
    height: 16.69rem;
  }
`;

export const BlockTitle = styled(SecondaryTitle)`
  color: var(--light);
  margin: 4.2rem 0 0;

  @media (max-width: ${breakpoints.md}) {
    margin: 1.3rem 0 0;
    font-size: 1rem;
    line-height: 138%;
  }
`;

export const Description = styled(Subtitle)`
  color: var(--greyDark);
  line-height: 140%;
`;
