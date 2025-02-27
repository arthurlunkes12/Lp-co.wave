import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, memo, Suspense, lazy } from "react";
import styled from "styled-components";
const FaChevronDown = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaChevronDown })));
const FaChevronUp = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaChevronUp })));
const faqData = [
    {
        question: "Quanto tempo leva para desenvolver um site?",
        answer: "O tempo varia de acordo com a complexidade do projeto. Uma landing page pode levar de 3 a 7 dias, enquanto um site institucional pode levar 2 a 4 semanas. Projetos mais robustos, como e-commerces, podem levar 4 a 8 semanas.",
    },
    {
        question: "Preciso saber programar para ter um site?",
        answer: "Não! Nós cuidamos de todo o processo para você. Criamos sites sob medida, otimizados e prontos para uso, sem que você precise entender de código.",
    },
    {
        question: "Quais tecnologias vocês utilizam no desenvolvimento?",
        answer: "Utilizamos as tecnologias mais modernas, como React, Next.js, Tailwind CSS, Node.js e Django, para garantir alta performance e segurança.",
    },
    {
        question: "Meu site será responsivo para celulares e tablets?",
        answer: "Sim! Todos os nossos projetos são totalmente responsivos, garantindo uma experiência perfeita em celulares, tablets e desktops.",
    },
    {
        question: "Vocês oferecem manutenção após a entrega do site?",
        answer: "Sim! Oferecemos planos de manutenção para atualizar conteúdos, corrigir possíveis erros e melhorar a performance do site ao longo do tempo.",
    },
    {
        question: "Como posso entrar em contato para solicitar um orçamento?",
        answer: "Você pode nos chamar pelo WhatsApp, e-mail ou preencher nosso formulário de contato na seção 'Fale Conosco'.",
    },
];
const FAQSection = memo(() => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = useCallback((index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }, []);
    return (_jsxs(Section, { id: "FAQ", children: [_jsx("h2", { children: "Perguntas Frequentes" }), _jsx(FAQContainer, { children: faqData.map((item, index) => (_jsxs(FAQItem, { onClick: () => toggleFAQ(index), "$isOpen": openIndex === index, children: [_jsxs(Question, { children: [item.question, _jsx(Suspense, { fallback: _jsx("span", { children: "..." }), children: openIndex === index ? _jsx(FaChevronUp, {}) : _jsx(FaChevronDown, {}) })] }), _jsx(Answer, { "$isOpen": openIndex === index, children: item.answer })] }, index))) })] }));
});
export default FAQSection;
const Section = styled.section `
  padding: 55px;
  background: #f4f4f4;
  text-align: center;
  h2 {
    font-size: 2rem;
    color: #222;
    margin-bottom: 30px;
    font-weight: 700;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
const FAQContainer = styled.div `
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const FAQItem = styled.div `
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  }
`;
const Question = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;
const Answer = styled.p `
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  height: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;
