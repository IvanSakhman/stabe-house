import React from 'react';
import { Container, TextContainer, StyledTitle, LogosContainer, Logo } from './experience.styled';
import { Subtitle } from '../text';
import { SmallWrapper } from '../wrapper';
import logo1 from '../../icons/logo1.svg';
import logo2 from '../../icons/logo2.svg';
import logo3 from '../../icons/logo3.svg';
import logo4 from '../../icons/logo4.svg';

const logos = [logo1, logo2, logo3, logo4];

const Experience = (): JSX.Element => {
  return (
    <SmallWrapper>
      <Container>
        <TextContainer>
          <StyledTitle>Experience where it matters</StyledTitle>
          <Subtitle>
            We have long-standing relationships with our institutional investors. We draw on their
            breadth of experience as leaders in cryptofinance to bring you the most simple, safe and
            secure product possible.
          </Subtitle>
        </TextContainer>
        <LogosContainer>
          {logos.map((icon) => (
            <Logo src={icon} alt="logo" key={icon} />
          ))}
        </LogosContainer>
      </Container>
    </SmallWrapper>
  );
};

export default Experience;
