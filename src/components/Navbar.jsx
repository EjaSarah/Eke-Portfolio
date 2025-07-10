import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import LogoImage from "../assets/images/bg-image2.jpg";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #222;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: ${(props) => props.theme.background};
    padding: 2rem;
    display: ${(props) => (props.open ? "flex" : "none")};
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
const StyledLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.color};
  text-decoration: none;

  &.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.accent};
  }

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.accent};
    transition: color 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const IconButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.color};
    cursor: pointer;
  }

  @media (min-width: 769px) {
    .menu-toggle {
      display: none;
    }
  }
`;

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo src={LogoImage} alt="Eke Ume Logo" />
        <IconButtons>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            title="Toggle Theme"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            title="Menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </IconButtons>
      </NavContainer>

      <NavLinks open={menuOpen}>
        <li>
          <StyledLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/work" onClick={() => setMenuOpen(false)}>
            Work
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </StyledLink>
        </li>
        <SocialIcons>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={20} />
          </a>
        </SocialIcons>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
