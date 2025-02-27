import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import mockup1 from "../assets/mockup2.webp";
import mockup3 from "../assets/mockup3.webp";
import mockup4 from "../assets/mockup4.webp";
const projects = [
    {
        image: mockup1,
        title: "Site para Restaurantes",
        description: "Solução profissional para restaurantes destacarem seu cardápio e receberem pedidos online",
    },
    {
        image: mockup4,
        title: "E-commerce em geral",
        description: "Loja virtual completa para vendas online, com design elegante e intuitivo.",
    },
    {
        image: mockup3,
        title: "Agência Digital",
        description: "Site institucional para agências captarem leads e exibirem portfólio.",
    },
];
const PortfolioSection = () => {
    return (_jsxs(Section, { id: "Portifolio", children: [_jsx("h2", { children: "Projetos que Transformam Ideias em Realidade" }), _jsx("p", { children: "N\u00E3o perca tempo! Solicite sua Landing Page ou Site sob medida hoje mesmo." }), _jsx(Grid, { children: projects.map((project, index) => (_jsxs(Card, { children: [_jsx("img", { src: project.image, alt: project.title, loading: "lazy", width: "280", height: "180" }), _jsxs(CardContent, { children: [_jsx("h3", { children: project.title }), _jsx("p", { children: project.description })] })] }, index))) })] }));
};
export default PortfolioSection;
// Styled Components
const Section = styled.section `
  width: 100vw;
  overflow-x: hidden;
  padding: 55px 0;
  background: rgba(197, 197, 197, 0.36);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: #000;
    margin-bottom: 80px;
  }
`;
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: auto;
  padding: 0 5%;

  @media (max-width: 1024px) {
    gap: 20px;
  }
`;
const Card = styled.div `
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(19, 18, 19, 0.38);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    object-position: top;
  }
`;
const CardContent = styled.div `
  padding: 15px;

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #8509dd;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      color: #6200b3;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
