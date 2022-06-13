import React from 'react';
import Slider from '../slider';
import {
  Section,
  StyledTitle,
  CardsContainer,
  Note,
  MobileCardsContainer,
} from './wealth-growing.styled';
import renderCards from './card';

const WealthGrowing = (): JSX.Element => {
  return (
    <Section>
      <StyledTitle>Build your wealth from the ground up</StyledTitle>
      <CardsContainer>{renderCards()}</CardsContainer>
      <MobileCardsContainer>
        <Slider isDark>{renderCards()}</Slider>
      </MobileCardsContainer>
      <Note>
        *Rates are purely indicative and are subject to change pending availability, approval and
        market conditions. See complete rates here.
      </Note>
    </Section>
  );
};

export default WealthGrowing;
