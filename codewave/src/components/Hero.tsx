import { useState, useEffect } from "react";
import styled from "styled-components";
import heroImage from "../assets/BG.webp";

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
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  color: white;
  font-family: Arial;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.8rem);
  margin-top: 10px;
  color: white;
  font-family: Arial;
  max-width: 80%;
  min-height: 2rem;
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
  font-size: clamp(1.3rem, 1.5vw, 1.8rem);
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s;

  i {
    font-size: 1.5rem;
  }

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

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection id="Inicio">
      <Title>Co.wave</Title>
      <Subtitle>{text}</Subtitle>
      <Button href="https://wa.me/5511999999999" target="_blank">
        <i className="fa-brands fa-whatsapp"></i>
        Fale Conosco
      </Button>
    </HeroSection>
  );
};

export default Hero;
