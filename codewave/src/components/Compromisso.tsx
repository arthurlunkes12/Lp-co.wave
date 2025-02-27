import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaHandshake, FaLightbulb } from "react-icons/fa"; // Ícones profissionais

const NossoCompromisso: React.FC = () => {
  return (
    <Section id="NossoCompromisso">
      <h2>Nosso Compromisso</h2>
      <p>
        Na <strong>Co.wave</strong>, estamos comprometidos em oferecer soluções
        digitais inovadoras, garantindo qualidade, eficiência e satisfação para
        nossos clientes.
      </p>

      <Grid>
        <Card>
          <FaCheckCircle size={50} color="#8509dd" />
          <h3>Qualidade e Excelência</h3>
          <p>
            Cada projeto é desenvolvido com atenção aos detalhes e as melhores
            práticas do mercado.
          </p>
        </Card>

        <Card>
          <FaHandshake size={50} color="#8509dd" />
          <h3>Transparência e Confiança</h3>
          <p>
            Prezamos pela comunicação aberta e uma relação de confiança com
            nossos clientes.
          </p>
        </Card>

        <Card>
          <FaLightbulb size={50} color="#8509dd" />
          <h3>Inovação Constante</h3>
          <p>
            Buscamos sempre novas tecnologias para entregar soluções modernas e
            eficazes.
          </p>
        </Card>
      </Grid>
    </Section>
  );
};

export default NossoCompromisso;

// Styled Components
const Section = styled.section`
  padding: 60px 5%;
  text-align: center;
  background: #f3f3f3;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
    color: #555;
  }
`;

const Grid = styled.div`
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

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(19, 18, 19, 0.38);
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
