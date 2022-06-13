import React from 'react';
import {
  StyledBurger,
  StyledLogo,
  StyledHeader,
  Navbar,
  LinkContainer,
  StyledLink,
  ButtonsContainer,
  StyledButton,
} from './header.styled';
import { Wrapper } from '../wrapper';
import Button from '../button';

const links = ['Personal', 'About us', 'Institutions', 'Learn'];

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <Navbar>
          <StyledBurger />
          <StyledLogo />
          <LinkContainer>
            {links.map((link, i) => (
              <li key={link}>
                <StyledLink href="/" isActive={i === 0}>
                  <p>{link}</p>
                </StyledLink>
              </li>
            ))}
          </LinkContainer>
          <ButtonsContainer>
            <Button isOutlined label="Log in" />
            <StyledButton label="Join the waitlist" />
          </ButtonsContainer>
        </Navbar>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
