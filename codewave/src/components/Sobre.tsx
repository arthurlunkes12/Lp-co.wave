import styled from "styled-components";
import { lazy, Suspense, memo } from "react";

// Lazy Loading para os ícones
const FaWhatsapp = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaWhatsapp }))
);
const FaPython = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaPython }))
);
const FaHtml5 = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaHtml5 }))
);
const FaCss3Alt = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaCss3Alt }))
);
const FaJs = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaJs }))
);
const FaReact = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaReact }))
);
const FaNodeJs = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaNodeJs }))
);
const SiDjango = lazy(() =>
  import("react-icons/si").then((mod) => ({ default: mod.SiDjango }))
);
const SiTypescript = lazy(() =>
  import("react-icons/si").then((mod) => ({ default: mod.SiTypescript }))
);

const technologies = [
  { icon: <FaPython size={40} color="#3776AB" />, name: "Python" },
  { icon: <SiDjango size={40} color="#092E20" />, name: "Django" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS" },
  { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTypescript size={40} color="#3178C6" />, name: "TypeScript" },
  { icon: <FaReact size={40} color="#61DAFB" />, name: "React" },
  { icon: <FaNodeJs size={40} color="#83CD29" />, name: "Node.js" },
];

const AboutSection = memo(() => {
  return (
    <Section id="Sobre">
      <Content>
        <TextContainer>
          <h2>Sobre a Co.wave</h2>
          <p>
            Nós da <strong>Co.wave</strong> somos especializados na criação e
            otimização de soluções digitais para potencializar a presença online
            de marcas e negócios. Utilizamos tecnologias modernas para garantir
            inovação, performance e design responsivo em nossos projetos.
          </p>
          <Button href="https://wa.me/5511999999999" target="_blank">
            <Suspense fallback={<span>...</span>}>
              <FaWhatsapp size={20} />
            </Suspense>
            Vamos conversar?
          </Button>
        </TextContainer>
        <TechContainer>
          <h3>Tecnologias Utilizadas</h3>
          <Icons>
            {technologies.map((tech, index) => (
              <Tech key={index}>
                <Suspense fallback={<span>...</span>}>{tech.icon}</Suspense>
                {tech.name}
              </Tech>
            ))}
          </Icons>
        </TechContainer>
      </Content>
    </Section>
  );
});

export default AboutSection;

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: 55px 0;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  h2 {
    font-size: 2rem;
    color: #000;
  }
  p {
    font-size: 1.2rem;
    margin-top: 15px;
    color: #000;
  }
`;

const TechContainer = styled.div`
  flex: 1;
  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 12px 25px;
  background: #25d366;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 8px;
  transition: transform 0.3s, background 0.3s;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: #1ebe57;
    transform: scale(1.05);
  }
`;
