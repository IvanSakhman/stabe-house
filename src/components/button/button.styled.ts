import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';

const disabledStyles = `
  background-color: var(--grey);
  cursor: default;
  
  &:hover {
    background-color: var(--grey);
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.875rem 1.35rem;
  background-color: var(--orange);
  border-radius: 4px;
  color: var(--darkest-blue);
  border: none;
  outline: none;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: var(--hover);
  }

  @media (max-width: ${breakpoints.xl}) {
    padding: 0.875rem 1rem;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 1rem 0.8rem;
  }

  ${({ disabled }) => disabled && disabledStyles}
`;

export const OutlinedButton = styled(PrimaryButton)`
  padding: 0.875rem 2rem;
  background-color: white;
  border: 1px solid var(--lightGray);

  @media (max-width: 1024px) {
    padding: 0.875rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.9rem;
  }

  ${({ disabled }) => disabled && disabledStyles}
`;
