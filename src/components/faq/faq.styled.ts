import styled, { css } from 'styled-components';
import patternImage from '../../images/small-pattern.png';
import breakpoints from '../../constants/breakpoints';
import { Subtitle } from '../text';
import { Title } from '../text';

export const Section = styled.section`
  padding: 8.45rem 15.8rem 8.8rem;
  font-family: Inter, sans-serif;
  background: var(--light) url(${patternImage}) no-repeat left bottom;

  @media (max-width: ${breakpoints.md}) {
    padding: 0.25rem 2.5rem 4.6rem;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  font-weight: 400;
  color: var(--blueDarkest);
  line-height: 3rem;
  margin-bottom: 2.68rem;

  @media (max-width: ${breakpoints.md}) {
    line-height: 2.25rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  overflow: scroll;
`;

export const Tab = styled.button<{ isActive?: boolean }>`
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  margin-right: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--blueDarkest);
  background: var(--white);
  margin-bottom: 1.125rem;
  flex-shrink: 0;

  :hover {
    color: var(--white);
    background: var(--blueDarkest);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--white);
      background: var(--blueDarkest);
    `}
`;

export const Description = styled(Subtitle)`
  display: none;
`;

export const Question = styled.div<{ isActive?: boolean }>`
  padding: 1.45rem 2rem 0.75rem;
  background: var(--white);
  border-bottom: 1px solid var(--greyBright);

  :first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  :last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom: none;
  }

  ${Description} {
    ${({ isActive }) =>
      isActive
        ? css`
            display: block;
          `
        : ''}
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSubtitle = styled(Subtitle)`
  color: var(--blueDarkest);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.xl}) {
    max-width: 14.625rem;
  }
`;

export const StyledUpArrow = styled.div`
  transform: rotate(180deg);
`;

export const StyledBottomSubtitle = styled(Subtitle)`
  text-align: center;
  margin-top: 1.125rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--blueDarkest);
  border-bottom: 1px solid var(--blueDarkest);
`;
