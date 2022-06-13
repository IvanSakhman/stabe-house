import styled from 'styled-components';
import { Subtitle } from '../text';
import breakpoints from '../../constants/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 9rem 0 2.75rem;
  flex-wrap: wrap;
  gap: 2.25rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
    gap: 1.5rem;
    padding: 3.16rem 0 2.75rem;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 25.69rem;

  @media (max-width: ${breakpoints.lg}) {
    max-width: 19.875rem;
    width: 100%;
  }
`;

export const Description = styled(Subtitle)`
  margin: 0;
`;
