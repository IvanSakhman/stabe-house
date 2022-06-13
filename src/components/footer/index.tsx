import React from 'react';
import {
  Section,
  Menu,
  Container,
  BlockOfLinks,
  BlockOfIcons,
  BlockOfExternalLinks,
  StyledLink,
  Link,
  StyledExternalLink,
  FooterLogo,
  AllRightsText,
  Block,
  Description,
  LinkListItem,
  InfoBlock,
} from './footer.styled';
import { Wrapper } from '../wrapper';
import footerLogo from '../../icons/footerLogo.svg';
import facebook from '../../icons/facebookIcon.svg';
import linkedIn from '../../icons/linkedInIcon.svg';
import twitter from '../../icons/twitterIcon.svg';
import telegram from '../../icons/telegramIcon.svg';

const fistBlockOfLinks = ['Personal', 'Institutions', 'About us', 'Learn', 'Log in'];
const secondBlockOfLinks = ['FAQs', 'Rates', 'Careers', 'Press', 'Contact us'];
const externalBlockOfLinks = [
  'Privacy Policy',
  'Stablehouse Terms of Use',
  'Legal Notice',
  'Licenses',
];

const socialMediaIcons = [facebook, linkedIn, twitter, telegram];

const Footer = (): JSX.Element => {
  return (
    <Section>
      <Wrapper>
        <Menu>
          <BlockOfLinks>
            {fistBlockOfLinks.map((link, i) => (
              <LinkListItem key={link}>
                <StyledLink href="/" isActive={i === 0}>
                  <Link>{link}</Link>
                </StyledLink>
              </LinkListItem>
            ))}
          </BlockOfLinks>
          <BlockOfLinks>
            {secondBlockOfLinks.map((link) => (
              <LinkListItem key={link}>
                <StyledLink href="/">
                  <Link>{link}</Link>
                </StyledLink>
              </LinkListItem>
            ))}
          </BlockOfLinks>
        </Menu>
        <InfoBlock>
          <Container mobileOrder={2}>
            <FooterLogo src={footerLogo} alt="logo" />
            <AllRightsText>© 2021 All Rights Reserved</AllRightsText>
            <Description>
              Getting early access to Stablehouse does not guarantee that you will be eligible.
              Geographic, regulatory, and underwriting restrictions will apply. Trading
              qualifications are dependent upon regulatory and geographical restrictions. Rates for
              Stablehouse products are subject to change. StableHouse is headquartered in Bermuda,
              and is licensed to conduct digital asset business by the Bermuda Monetary Authority
              (BMA) under the Digital Asset Business Act 2018.
            </Description>
          </Container>
          <Container>
            <BlockOfIcons>
              {socialMediaIcons.map((icon) => (
                <LinkListItem key={icon}>
                  <a href="/">
                    <img src={icon} alt={icon} />
                  </a>
                </LinkListItem>
              ))}
            </BlockOfIcons>
            <Block>
              <BlockOfExternalLinks>
                {externalBlockOfLinks.map((link) => (
                  <LinkListItem key={link}>
                    <StyledExternalLink href="/">
                      <p>{link}</p>
                    </StyledExternalLink>
                  </LinkListItem>
                ))}
              </BlockOfExternalLinks>
              <Description>
                StableHouse | Century House, 16 Par-La-Ville Road, Hamilton, Bermuda HM08
              </Description>
            </Block>
          </Container>
        </InfoBlock>
      </Wrapper>
    </Section>
  );
};

export default Footer;
