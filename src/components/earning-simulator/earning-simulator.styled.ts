import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import { Subtitle, Title } from '../text';
import Button from '../button';

export const Section = styled.section`
  width: 100%;
  background-color: var(--light);
  padding: 4.1rem 0 3.5625rem;
`;

export const BlocksWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: max-content;

  @media (max-width: ${breakpoints.md}) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const LeftBlock = styled.div`
  position: relative;
  width: 41.1875rem;
  height: 38.5rem;
  padding: 6.625rem 0 0 6.7125rem;

  @media (max-width: ${breakpoints.xl}) {
    padding: 4.625rem 0 0 6.3125rem;
    width: 29rem;
    height: 29rem;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 0;
    height: auto;
    order: 1;
  }
`;

export const RightBlock = styled.div`
  margin: 10.9rem 0 0 0.65rem;
  width: 26.1875rem;

  @media (max-width: ${breakpoints.xl}) {
    margin-top: 5.2rem;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 0 2.5rem;
    margin: 0 auto 1.875rem;
    text-align: center;
  }
`;

export const StyledTitle = styled(Title)`
  font-weight: 400;
  line-height: 2.625rem;

  @media (max-width: ${breakpoints.md}) {
    line-height: 2.3rem;
  }
`;

export const Subheading = styled(Subtitle)`
  margin: 1.3rem 0 1.37rem;
  line-height: 1.875rem;
  text-align: left;

  @media (max-width: ${breakpoints.md}) {
    margin: 0.75rem 0 0.7rem;
    line-height: 1.38rem;
  }
`;

export const PatternIcon = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const SimulatorImage = styled.img`
  z-index: 1;
  position: relative;
  border-radius: 1rem;

  @media (max-width: ${breakpoints.xl}) {
    width: 20rem;
  }

  @media (max-width: ${breakpoints.md}) {
    border-radius: 0;
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  width: 11.5rem;

  @media (max-width: ${breakpoints.md}) {
    margin: 0 auto;
    width: 100%;
  }
`;
