import React from 'react';
import styled from 'styled-components';

const BurgerMenu = (props) => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: ${(props) => props.theme.navbarLinks};
    display: block;
    position: relative;
    width: 3rem;
    height: 0.3rem;
    margin-bottom: 0.6rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    background: ${(props) => props.theme.themePink};
    transform: rotate(45deg);
    top: -8px;
  }

  .open span:nth-child(1) {
    background: ${(props) => props.theme.themeBlue};
    transform: rotate(-45deg);
    top: 8px;
  }
`;
