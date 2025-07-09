// src/components/Footer.jsx
import styled from "styled-components";
import { FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #111;
  color: #f5f5f5;
  font-size: 0.9rem;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
`;

const FooterTitle = styled.h4`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid #333;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #ccc;

  strong {
    color: gold;
  }
`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Reach Me</FooterTitle>
          <p>
            <FaPhone /> 08033286752
          </p>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Office Address</FooterTitle>
          <p>2 Wahb Clos, Surulere, Lagos, Nigeria</p>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Connect with Me</FooterTitle>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram
              color="gold"
              size={20}
              style={{ marginRight: "10px" }}
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook color="gold" size={20} />
          </a>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        &copy; {year} Eke Ume. Designed by <strong>ejaSarah~Designs</strong>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
