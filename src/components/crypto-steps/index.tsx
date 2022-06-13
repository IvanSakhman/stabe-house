import React from 'react';
import checkIcon from '../../icons/check.svg';
import {
  Section,
  LeftBlock,
  RightBlock,
  StyledTitle,
  StyledButton,
  Icon,
  StepWrapper,
  StepNumber,
  StepDescription,
} from './crypto-steps.styled';

const steps = [
  'Open a Stablehouse account and make a deposit.',
  'We lend your deposit to our trusted partners.',
  'Receive weekly interest payouts and withdraw your money any time.',
];

const CryptoSteps = (): JSX.Element => {
  return (
    <Section>
      <LeftBlock>
        <Icon src={checkIcon} alt="check" />
        <StyledTitle>Take your first steps in crypto.</StyledTitle>
        <StyledButton label="Join the waitlist" />
      </LeftBlock>
      <RightBlock>
        {steps.map((step, index) => (
          <StepWrapper key={step}>
            <StepNumber>{++index}</StepNumber>
            <StepDescription>{step}</StepDescription>
          </StepWrapper>
        ))}
      </RightBlock>
    </Section>
  );
};

export default CryptoSteps;
