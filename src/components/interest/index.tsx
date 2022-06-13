import React from 'react';
import {
  Section,
  Container,
  StyledTitle,
  Block,
  IconBackground,
  Icon,
  BlockTitle,
  Description,
} from './interest.styled';
import { Wrapper } from '../wrapper';
import firstIcon from '../../icons/big-icon-1.svg';
import secondIcon from '../../icons/big-icon-2.svg';
import thirdIcon from '../../icons/big-icon-3.svg';

const items = [
  {
    icon: firstIcon,
    title: 'Sit back and earn',
    description:
      'Earn up to 12% p.a interest on stablecoins and 6% p.a interest on Bitcoin and Ethereum deposits. See rates and pricing structure.',
  },
  {
    icon: secondIcon,
    title: 'Top-tier crypto investments ',
    description:
      'We work with trusted parties to rigorously structure crypto investments for you. Access world-class digital asset opportunities at your fingertips.',
  },
  {
    icon: thirdIcon,
    title: 'Diversify your portfolio',
    description:
      'As well as earning passive income with stablecoins, you can buy and hold foundational assets such as Bitcoin and Ethereum as long term investments, benefiting from upside potential as well as yield earnings.',
  },
];

const Interest = (): JSX.Element => {
  return (
    <Section>
      <Wrapper>
        <StyledTitle>Interest just got interesting</StyledTitle>
        <Container>
          {items.map(({ icon, title, description }) => (
            <Block key={title}>
              <IconBackground>
                <Icon src={icon} alt={title} />
              </IconBackground>
              <BlockTitle>{title}</BlockTitle>
              <Description>{description}</Description>
            </Block>
          ))}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default Interest;
