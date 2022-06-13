import styled, { css } from 'styled-components';
import Button from '../button';
import Logo from '../../icons/logo';
import Burger from '../../icons/burger';
import breakpoints from '../../constants/breakpoints';

export const StyledBurger = styled(Burger)`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
  }
`;

export const StyledLogo = styled(Logo)`
  @media (max-width: ${breakpoints.xl}) {
    width: 9rem;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 7.125rem;
    height: 1rem;
    margin: 0.1rem 0 0 3.2rem;
  }
`;

export const StyledHeader = styled.header`
  border-bottom: 1px solid var(--grey);
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.94rem;

  @media (max-width: 768px) {
    height: 3.5rem;
  }
`;

export const LinkContainer = styled.ul`
  margin: 0 0 0 7.7rem;
  padding: 0;
  display: flex;
  gap: 2.5rem;
  height: 100%;

  li {
    list-style-type: none;
    height: 100%;
  }

  @media (max-width: ${breakpoints.xl}) {
    gap: 1rem;
    margin: 0;
  }

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const StyledLink = styled.a<{ isActive: boolean }>`
  color: var(--blueDarkest);
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 100%;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 3px solid var(--orange);
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const StyledButton = styled(Button)`
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
