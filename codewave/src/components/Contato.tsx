import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const CTASection: React.FC = () => {
  return (
    <Section id="Contato">
      <Title>Pronto para transformar sua ideia em realidade?</Title>
      <Subtitle>
        Fale conosco agora, tire suas duvidas e receba um orçamento{" "}
        <strong>gratuito!</strong>
      </Subtitle>
      <CTAButton
        href="https://wa.me/seunumero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
        Fale pelo WhatsApp
      </CTAButton>
    </Section>
  );
};

export default CTASection;

// Styled Components
const Section = styled.section`
  background: rgb(255, 255, 255);
  padding: 55px 12%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
  max-width: 90%;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  max-width: 80%;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25d366;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  max-width: 90%;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 20px;
  }
`;
