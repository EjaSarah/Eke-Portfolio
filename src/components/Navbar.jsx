// src/components/Navbar.jsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import LogoImage from "../assets/images/bg-image2.jpg";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #000;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
  color: white;

  &.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: gold;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

function Navbar() {
  return (
    <Nav>
      <Logo src={LogoImage} alt="Eke Ume Logo" />

      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/work">Work Profile</StyledLink>
        <StyledLink to="/reviews">Reviews</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>

      <SocialIcons>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram color="gold" size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook color="gold" size={20} />
        </a>
      </SocialIcons>
    </Nav>
  );
}

export default Navbar;
