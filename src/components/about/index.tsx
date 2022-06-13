import React from 'react';
import { Container, Block, Description } from './about.styled';
import { SecondaryTitle } from '../text';
import { Wrapper } from '../wrapper';
import Circle from '../../icons/circle';
import firstIcon from '../../icons/1.svg';
import secondIcon from '../../icons/2.svg';
import thirdIcon from '../../icons/3.svg';

const items = [
  {
    icon: firstIcon,
    title: 'Simple',
    description:
      'We are crypto without the confusion - we do our best to explain everything and are totally transparent with our fees so you’ll find no surprises later on.',
  },
  {
    icon: secondIcon,
    title: 'Stable',
    description:
      'Our investments are fully secured by Bitcoin and other digital assets, which we use as collateral to back your deposits.',
  },
  {
    icon: thirdIcon,
    title: 'Secure',
    description:
      'We are regulated, compliant, and use industry leading software, such as Fireblocks and Onfido, to make sure your data and assets are powerfully protected at all times.',
  },
];

const About = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        {items.map(({ icon, title, description }) => (
          <Block key={title}>
            <Circle>
              <img src={icon} alt={title} />
            </Circle>
            <SecondaryTitle>{title}</SecondaryTitle>
            <Description>{description}</Description>
          </Block>
        ))}
      </Container>
    </Wrapper>
  );
};

export default About;
