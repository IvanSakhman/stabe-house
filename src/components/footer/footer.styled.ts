import styled, { css } from 'styled-components';
import breakpoints from 'constants/breakpoints';
import { Title } from '../text';

export const Section = styled.section`
  width: 100%;
  padding: 2.85rem 2.75rem 3rem;

  @media (max-width: ${breakpoints.lg}) {
    padding: 1.55rem 4.2rem 2.5rem 0.2rem;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  color: var(--light);

  @media (max-width: ${breakpoints.lg}) {
    max-width: 20.625rem;
    margin: 0 auto;
  }
`;

export const Container = styled.div<{ mobileOrder?: number }>`
  width: 100%;
  padding-top: 1.25rem;

  @media (max-width: ${breakpoints.lg}) {
    text-align: center;
    ${({ mobileOrder }) => mobileOrder && `order: ${mobileOrder};`}
  }
`;

export const LinkListItem = styled.li`
  list-style-type: none;

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
  }
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const BlockOfLinks = styled.ul`
  padding: 0;
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.xl}) {
    gap: 1rem;
    margin: 0;
  }

  @media (max-width: ${breakpoints.lg}) {
    display: block;
  }
`;

export const InfoBlock = styled(BlockOfLinks)`
  @media (max-width: ${breakpoints.lg}) {
    display: block;
  }
  @media (max-width: ${breakpoints.md}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const BlockOfIcons = styled(BlockOfLinks)`
  gap: 1.5rem;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.md}) {
    position: relative;
    left: 1.5rem;
  }
`;

export const BlockOfExternalLinks = styled(BlockOfLinks)`
  justify-content: flex-end;
  gap: 1.1rem;

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.md}) {
    flex-wrap: wrap;
    gap: 0;

    ${LinkListItem} {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
`;

export const StyledLink = styled.a<{ isActive?: boolean }>`
  color: var(--blueDarkest);
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--orange);
      border-bottom: 1px solid var(--orange);
    `}
`;

export const StyledExternalLink = styled.a`
  color: var(--blueDarkest);
  font-family: Inter, sans-serif;
  font-size: 0.63rem;
  line-height: 0.88rem;
  display: flex;
  align-items: center;
  margin-top: 2.3rem;

  @media (max-width: ${breakpoints.lg}) {
    margin-top: 0.5rem;
  }
`;

export const Block = styled.div`
  display: block;
  text-align: center;
`;

export const Link = styled.p`
  margin: 0;

  @media (max-width: ${breakpoints.lg}) {
    margin: 1.6rem 0 0;
  }
`;

export const FooterLogo = styled.img`
  max-width: 7.06rem;
  width: 100%;
`;

export const Description = styled.p`
  margin: 1.4rem 0 0;
  display: flex;
  justify-content: flex-end;
  font-family: Inter, sans-serif;
  font-size: 0.64rem;
  line-height: 0.88rem;
  color: var(--blueDarkest);
  letter-spacing: -0.1px;

  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;
  }
`;

export const AllRightsText = styled(Description)`
  color: var(--greyDarker);
  margin: 1.4rem 0 0;
  justify-content: flex-start;
  letter-spacing: -0.1px;

  @media (max-width: ${breakpoints.lg}) {
    justify-content: center;
  }
`;
