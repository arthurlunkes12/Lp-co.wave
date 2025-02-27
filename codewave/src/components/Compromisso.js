import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { FaCheckCircle, FaHandshake, FaLightbulb } from "react-icons/fa"; // Ícones profissionais
const NossoCompromisso = () => {
    return (_jsxs(Section, { id: "NossoCompromisso", children: [_jsx("h2", { children: "Nosso Compromisso" }), _jsxs("p", { children: ["Na ", _jsx("strong", { children: "Co.wave" }), ", estamos comprometidos em oferecer solu\u00E7\u00F5es digitais inovadoras, garantindo qualidade, efici\u00EAncia e satisfa\u00E7\u00E3o para nossos clientes."] }), _jsxs(Grid, { children: [_jsxs(Card, { children: [_jsx(FaCheckCircle, { size: 50, color: "#8509dd" }), _jsx("h3", { children: "Qualidade e Excel\u00EAncia" }), _jsx("p", { children: "Cada projeto \u00E9 desenvolvido com aten\u00E7\u00E3o aos detalhes e as melhores pr\u00E1ticas do mercado." })] }), _jsxs(Card, { children: [_jsx(FaHandshake, { size: 50, color: "#8509dd" }), _jsx("h3", { children: "Transpar\u00EAncia e Confian\u00E7a" }), _jsx("p", { children: "Prezamos pela comunica\u00E7\u00E3o aberta e uma rela\u00E7\u00E3o de confian\u00E7a com nossos clientes." })] }), _jsxs(Card, { children: [_jsx(FaLightbulb, { size: 50, color: "#8509dd" }), _jsx("h3", { children: "Inova\u00E7\u00E3o Constante" }), _jsx("p", { children: "Buscamos sempre novas tecnologias para entregar solu\u00E7\u00F5es modernas e eficazes." })] })] })] }));
};
export default NossoCompromisso;
// Styled Components
const Section = styled.section `
  padding: 55px;
  text-align: center;
  background: rgb(138, 138, 138);

  h2 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
    color: #fff;
  }
`;
const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Ajuste para telas médias */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const Card = styled.div `
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(226, 226, 226, 0.88);
  text-align: center;
  max-width: 350px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.4rem;
    margin: 15px 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Faz os cards ficarem centralizados */
  }

  @media (max-width: 480px) {
    padding: 25px;
  }
`;
