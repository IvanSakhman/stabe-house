import styled from 'styled-components';
import CloseIcon from '../../icons/close';
import breakpoints from '../../constants/breakpoints';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1.06rem 0;
  background-color: var(--blueDarkest);
  color: white;
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25rem;
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    line-height: 1rem;
    padding: 0.76rem 0;
    flex-direction: column;
  }
`;

export const StyledText = styled.p`
  margin: 0 0.2rem 0 0.1rem;
  letter-spacing: -0.2px;
`;

export const StyledLink = styled.a`
  color: var(--orange);
  text-decoration: none;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--white);

  :hover {
    fill: var(--orange);
  }
`;
