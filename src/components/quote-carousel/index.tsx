import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from '../slider';
import quoteIcon from '../../icons/quote.svg';
import {
  Section,
  Block,
  Container,
  SliderContainer,
  TextContainer,
  QuoteIcon,
  Description,
  AuthorText,
} from './quote-carousel.styled';

const feedbacks = [
  {
    author: 'Marike H, South Africa',
    description:
      'I highly recommend Stablehouse for those who are keen to invest in crypto but don`t know where to start.',
  },
  {
    author: 'Teresa M, Ukraine',
    description:
      'I highly recommend Stablehouse for those who are keen to invest in crypto but don`t know where to start.',
  },
  {
    author: 'Michael J, USA',
    description:
      'I highly recommend Stablehouse for those who are keen to invest in crypto but don`t know where to start.',
  },
];

const QuoteCarousel = (): JSX.Element => {
  return (
    <Section>
      <Block>
        <Container>
          <Slider>
            {feedbacks.map(({ description, author }) => (
              <SliderContainer key={description}>
                <TextContainer>
                  <QuoteIcon src={quoteIcon} alt="logo" key={author} />
                  <Description>{description}</Description>
                  <AuthorText>{author}</AuthorText>
                </TextContainer>
              </SliderContainer>
            ))}
          </Slider>
        </Container>
      </Block>
    </Section>
  );
};

export default QuoteCarousel;
