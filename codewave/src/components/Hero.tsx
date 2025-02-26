import React, { useState, useEffect } from "react";
import styled from "styled-components";
import heroImage from "../assets/BG.webp";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: url(${heroImage}) no-repeat center center/cover;
  box-sizing: border-box;
  padding: 0 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    min-height: 90vh;
    background-attachment: scroll;
  }

  @media (max-width: 768px) {
    min-height: 85vh;
  }

  @media (max-width: 480px) {
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  color: white;
  font-family: monospace;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.8rem);
  margin-top: 10px;
  color: white;
  font-family: monospace;
  max-width: 80%;
  word-wrap: break-word;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 30px;
  background: #25d366;
  color: white;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s;

  &:hover {
    background: #1ebe57;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const Hero = () => {
  const fullText =
    "Criação, otimização e inovação para sua marca brilhar online!";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 25); // Velocidade aumentada

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <HeroSection id="Inicio">
      <Title>Co.wave</Title>
      <Subtitle>{text}</Subtitle>
      <Button href="https://wa.me/5511999999999" target="_blank">
        <FaWhatsapp size={20} /> Fale Conosco
      </Button>
    </HeroSection>
  );
};

export default Hero;
