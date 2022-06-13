import React, { useState } from 'react';
import { Container, StyledText, StyledLink, Button, StyledCloseIcon } from './banned.styled';

const data = {
  text: 'Join the waitlist to reserve your spot today!',
  linkLabel: 'Why a waitlist? Can I still earn rewards?',
};

const Banner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <>
      {isBannerVisible ? (
        <Container>
          <StyledText>{data.text}</StyledText>
          <StyledLink href="/">{data.linkLabel}</StyledLink>
          <Button onClick={() => setIsBannerVisible(false)}>
            <StyledCloseIcon />
          </Button>
        </Container>
      ) : null}
    </>
  );
};

export default Banner;
