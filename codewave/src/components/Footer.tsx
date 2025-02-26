import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} co.wave. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100vw;
  max-width: 100%; /* Garante que não passe do limite da tela */
  padding: 15px 20px;
  background: #000;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  position: relative;
  bottom: 0;
  overflow: hidden;
  box-sizing: border-box; /* Evita que padding afete a largura total */

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 12px 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 10px 12px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
  white-space: nowrap; /* Evita quebras desnecessárias */
`;
