import React from 'react';
import {
  Background,
  Container,
  StyledImage,
  TextContainer,
  Subheading,
  ButtonsContainer,
} from './hero.styled';
import { Title } from '../text';
import { SmallWrapper } from '../wrapper';
import Button from '../button';

const Hero = (): JSX.Element => {
  return (
    <Background>
      <SmallWrapper>
        <Container>
          <StyledImage />
          <TextContainer>
            <Title>Crypto made simple.</Title>
            <Subheading>
              We’re the crypto experts you want to introduce to your parents. We facilitate high
              interest rates maximizing value with minimal risk. Earn, learn & invest to fund your
              future.
            </Subheading>
            <ButtonsContainer>
              <Button label="Join the waitlist" />
              <Button label="See rates" isOutlined />
            </ButtonsContainer>
          </TextContainer>
        </Container>
      </SmallWrapper>
    </Background>
  );
};

export default Hero;
