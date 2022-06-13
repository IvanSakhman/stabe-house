import React from 'react';
import clockIcon from '../../icons/clock.svg';
import conservativeRiskIcon from '../../icons/conservative-risk.svg';
import moderateRiskIcon from '../../icons/moderate-risk.svg';
import {
  Card,
  Icon,
  CardTitle,
  Description,
  CentralSection,
  PercentageTitle,
  PercentageSubtitle,
  PercentageDescription,
  ComingSoonBlock,
  Strategy,
  Condition,
  ConditionIcon,
  StyledButton,
} from './wealth-growing.styled';
import keyFactsFirstIcon from '../../icons/key-facts.svg';
import keyFactsSecondIcon from '../../icons/key-facts-2.svg';

const risks = {
  conservative: 'Conservative',
  moderate: 'Moderate',
};

const wealthGrowingCards = [
  {
    icon: keyFactsFirstIcon,
    title: 'Core',
    description: 'Secured lending',
    centralSection: {
      percentage: '12',
      percentageTitle: 'p.a.* for Stablecoins',
      percentageDescription: 'and 6% p.a* for BTC/ETH',
    },
    strategy:
      'Invest in defensive, secured investments, i.e. backed by 125% collateral in BTC or other digital assets at all times.',
    term: 'No lock up',
    risk: risks.conservative,
    isButtonActive: true,
  },
  {
    icon: keyFactsSecondIcon,
    title: 'Growth',
    description: 'Collateral-free lending',
    centralSection: {},
    strategy:
      'Capitalizing on collateral-free lending strategies to deliver attractive risk-adjusted income responsibly.',
    term: 'No lock up',
    risk: risks.moderate,
    isButtonActive: false,
  },
];

const renderCards = () =>
  wealthGrowingCards.map(
    ({ icon, title, description, centralSection, strategy, term, risk, isButtonActive }) => (
      <Card key={title}>
        <Icon src={icon} alt={title} />
        <CardTitle>{title}</CardTitle>
        <Description>{description}</Description>
        <CentralSection>
          {Object.keys(centralSection).length ? (
            <>
              <PercentageTitle>{centralSection.percentage}</PercentageTitle>
              <PercentageSubtitle>
                <PercentageDescription>{centralSection.percentageTitle}</PercentageDescription>
                {centralSection.percentageDescription}
              </PercentageSubtitle>
            </>
          ) : (
            <ComingSoonBlock>Coming Soon</ComingSoonBlock>
          )}
        </CentralSection>
        <Strategy>
          <b>Strategy: </b>
          {strategy}
        </Strategy>
        <Condition>
          <ConditionIcon src={clockIcon} alt="term" />
          Term:&nbsp;<b>{term}</b>
        </Condition>
        <Condition>
          <ConditionIcon
            src={risk === risks.conservative ? conservativeRiskIcon : moderateRiskIcon}
            alt="risk"
          />
          Risk:&nbsp;<b>{risk}</b>
        </Condition>
        {isButtonActive ? (
          <StyledButton label="Deposit now" />
        ) : (
          <StyledButton disabled label="Coming soon" />
        )}
      </Card>
    )
  );

export default renderCards;
