import styled from 'styled-components';
import Button from '../button';
import breakpoints from '../../constants/breakpoints';
import { SecondaryTitle, Subtitle, Title } from '../text';

export const Section = styled.section`
  width: 100%;
  background-color: var(--light);
  padding: 7.25rem 1rem 4.8125rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 4rem 2.5rem 1.2rem;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  font-weight: 400;
  color: var(--blueDarkest);
  line-height: 3rem;

  @media (max-width: ${breakpoints.md}) {
    line-height: 2.25rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 33.625rem;
  border-radius: 1rem;
  padding: 2.6rem 2rem;
  background-color: var(--white);
  text-align: center;
`;

export const Icon = styled.img`
  max-width: 8.9rem;
  margin: 0 auto;
`;

export const CardTitle = styled(SecondaryTitle)`
  color: var(--blueDarkest);
  font-size: 2rem;
  margin: 1.28rem 0 0;

  @media (max-width: ${breakpoints.md}) {
    margin: 1.7rem 0 0;
  }
`;

export const Description = styled(Subtitle)`
  margin: 0.1rem 0 0.75rem;
  color: var(--greyDark);

  @media (max-width: ${breakpoints.md}) {
    margin: 0.4rem 0 0.95rem;
  }
`;

export const CentralSection = styled.div`
  padding: 1.01rem 0;
  border-top: 0.0625rem solid var(--grey);
  border-bottom: 0.0625rem solid var(--grey);
`;

export const PercentageTitle = styled(Title)`
  font-family: Inter, sans-serif;
  font-size: 5.125rem;
  line-height: 5.125rem;
  position: relative;
  :after {
    content: '%';
    font-size: 1.25rem;
    line-height: 1.75rem;
    position: absolute;
    top: 47%;
    transform: translate(25%, -50%);
  }
`;

export const PercentageSubtitle = styled(Subtitle)`
  font-family: Inter, sans-serif;
  color: var(--blueDarkest);
  font-size: 1rem;
  line-height: 1.375rem;
  margin: 0.2rem 0 0;
`;

export const PercentageDescription = styled.b`
  font-family: Inter, sans-serif;
  display: block;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const ComingSoonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  color: var(--greyDark);
  font-size: 2rem;
  line-height: 2.75rem;
  height: 8.4rem;
`;

export const Strategy = styled(Subtitle)`
  font-family: Inter, sans-serif;
  color: var(--blueDarkest);
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 1rem auto;
  max-width: 22.75rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const Condition = styled.div`
  margin: 1.15rem auto 0;
  transform: translate(-0.9rem, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  color: var(--blueDarkest);
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const ConditionIcon = styled.img`
  max-width: 2.5rem;
  margin-right: 0.75rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.md}) {
    margin-top: 1.1rem;
  }
`;

export const Note = styled.p`
  font-family: Inter, sans-serif;
  color: var(--blueDarkest);
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 2.875rem auto 0;
  max-width: 26.5rem;
  text-align: center;
`;

export const MobileCardsContainer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.md}) {
    display: block;
    margin: 2rem 0 4.8rem;
  }
`;
