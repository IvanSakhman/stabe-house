import React, { useState } from 'react';
import Arrow from '../../icons/arrow';
import {
  Section,
  StyledTitle,
  Menu,
  Tab,
  Question,
  Button,
  StyledSubtitle,
  Description,
  StyledUpArrow,
  StyledBottomSubtitle,
  Link,
} from './faq.styled';

const tabsMenu = ['General', 'Funding my account', 'Invest and earn', 'About Stablehouse'];

const faqItems = [
  {
    label: 'How do I sign up for a Stablehouse account?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consectetur adipisaliquip ex ealer.',
  },
  {
    label: 'Why do I need to verify my identity with Stablehouse?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consectetur adipisaliquip ex ealer.',
  },
  {
    label: 'What does StableHouse do with my information?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consectetur adipisaliquip ex ealer.',
  },
  {
    label: 'How long does account verification take?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consectetur adipisaliquip ex ealer.',
  },
  {
    label: 'What does Stablehouse do to secure my account?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consectetur adipisaliquip ex ealer.',
  },
  {
    label: 'Verifying your email address with Stablehouse',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consectetur adipisaliquip ex ealer.',
  },
];

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(-1);

  const handleQuestionSelect = (i: number) => {
    setActiveQuestion(activeQuestion === i ? -1 : i);
  };

  return (
    <Section>
      <StyledTitle>Frequently asked questions</StyledTitle>
      <Menu>
        {tabsMenu.map((tab, i) => (
          <Tab key={tab} onClick={() => setActiveTab(i)} isActive={activeTab === i}>
            {tab}
          </Tab>
        ))}
      </Menu>
      {faqItems.map((item, i) => {
        const isActive = activeQuestion === i;

        return (
          <Question key={item.label} isActive={isActive}>
            <Button onClick={() => handleQuestionSelect(i)}>
              <StyledSubtitle>{item.label}</StyledSubtitle>
              {isActive ? (
                <StyledUpArrow>
                  <Arrow color="var(--orange)" />
                </StyledUpArrow>
              ) : (
                <Arrow />
              )}
            </Button>
            <Description>{item.description}</Description>
          </Question>
        );
      })}
      <StyledBottomSubtitle>
        Have more questions? <Link href="/">Visit our Help Center</Link>
      </StyledBottomSubtitle>
    </Section>
  );
};

export default Faq;
