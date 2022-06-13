import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import { Title } from '../text';
import Button from '../button';

export const Section = styled.section`
  width: 100%;
  background-color: var(--light);
  padding: 11.3125rem 3.025rem 9.8rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${breakpoints.md}) {
    padding: 0.25rem 2.5rem 4.6rem;
    flex-wrap: wrap;
  }
`;

const blockStyles = `
  width: 50%;
  max-width: 26.75rem;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const LeftBlock = styled.div`
  text-align: center;

  ${blockStyles}
`;

export const RightBlock = styled.div`
  @media (max-width: ${breakpoints.md}) {
    margin: 4rem 0 1rem;
  }

  ${blockStyles}
`;

export const StepWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StepNumber = styled.div`
  background: var(--white);
  color: var(--black);
  font-family: Inter, sans-serif;
  font-size: 1rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepDescription = styled.p`
  font-family: Inter, sans-serif;
  color: var(--greyDarker);
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin: 0 0 2rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1rem;
    line-height: 1.375rem;
    margin-bottom: 1.6rem;
  }
`;

export const Icon = styled.img`
  max-width: 3rem;
  margin: 0 auto;
`;

export const StyledTitle = styled(Title)`
  font-weight: 400;
  line-height: 2.825rem;
  margin: 0.75rem auto;
  max-width: 300px;

  @media (max-width: ${breakpoints.md}) {
    margin: 0.65rem auto 2.25rem;
    line-height: 2.6rem;
  }
`;

export const StyledButton = styled(Button)`
  width: 11.5rem;
`;
