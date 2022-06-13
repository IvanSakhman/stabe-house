import React from 'react';
import simulatorPatternIcon from '../../icons/simulator-pattern.svg';
import simulatorIcon from '../../icons/simulator.svg';
import {
  Section,
  LeftBlock,
  RightBlock,
  StyledTitle,
  Subheading,
  PatternIcon,
  SimulatorImage,
  BlocksWrapper,
  StyledButton,
} from './earning-simulator.styled';

const EarningSimulator = (): JSX.Element => {
  return (
    <Section>
      <BlocksWrapper>
        <LeftBlock>
          <PatternIcon src={simulatorPatternIcon} alt="simulator pattern" />
          <SimulatorImage src={simulatorIcon} alt="earning simulator" />
        </LeftBlock>
        <RightBlock>
          <StyledTitle>How much can you earn?</StyledTitle>
          <Subheading>
            Select a currency, enter an amount and calculate how much interest you can generate over
            the long-term.
          </Subheading>
          <StyledButton label="Join the waitlist" />
        </RightBlock>
      </BlocksWrapper>
    </Section>
  );
};

export default EarningSimulator;
