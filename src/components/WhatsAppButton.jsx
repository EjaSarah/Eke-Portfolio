// src/components/WhatsAppButton.jsx
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const Button = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ebe5d;
  }
`;

function WhatsAppButton() {
  return (
    <Button
      href="https://wa.me/2348033286752"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </Button>
  );
}

export default WhatsAppButton;
