import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/apply" className="nav-links">
              Apply
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <a
              href="https://podcasts.apple.com/us/podcast/the-honor-your-body-podcast/id1478957908"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-links"
            >
              Podcast
            </a>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default withRouter(CollapseMenu);

const CollapseWrapper = styled(animated.div)`
  background: ${(props) => props.theme.navbarBackground};
  position: fixed;
  top: 8.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${(props) => props.theme.navbarLinks};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.navbarLinksHover};
    }
  }
`;
