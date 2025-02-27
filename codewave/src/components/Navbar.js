import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones do menu
import logo from "../assets/logo2.webp";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const smoothScroll = (id) => {
        const target = document.getElementById(id);
        if (!target)
            return;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: targetPosition - 80, behavior: "smooth" });
        setMenuOpen(false);
    };
    return (_jsx(Nav, { children: _jsxs(NavContainer, { children: [_jsxs(LogoContainer, { children: [_jsx(LogoImage, { src: logo, alt: "Logo" }), _jsxs(LogoText, { children: [_jsx("span", { children: "CO" }), ".WAVE"] })] }), _jsx(Hamburger, { onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? _jsx(FiX, { size: 30 }) : _jsx(FiMenu, { size: 30 }) }), _jsxs(NavLinks, { className: menuOpen ? "open" : "", children: [_jsx(NavLink, { onClick: () => smoothScroll("Inicio"), children: "In\u00EDcio" }), _jsx(NavLink, { onClick: () => smoothScroll("Sobre"), children: "Sobre" }), _jsx(NavLink, { onClick: () => smoothScroll("NossoCompromisso"), children: "Compromisso" }), _jsx(NavLink, { onClick: () => smoothScroll("Portifolio"), children: "Portf\u00F3lio" }), _jsx(NavLink, { onClick: () => smoothScroll("FAQ"), children: "Faq" }), _jsx(ContactButton, { onClick: () => smoothScroll("Contato"), children: "Contact" })] })] }) }));
};
export default Navbar;
const Nav = styled.nav `
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 70px;
  }
`;
const NavContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const LogoContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
`;
const LogoImage = styled.img `
  width: 120px;
  height: auto;

  @media (max-width: 768px) {
    width: 90px;
  }

  @media (max-width: 480px) {
    width: 70px;
  }
`;
const LogoText = styled.h1 `
  font-size: 26px;
  font-weight: bold;
  color: #1a202c;
  span {
    color: purple;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const Hamburger = styled.div `
  display: none;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;
const NavLinks = styled.div `
  display: flex;
  align-items: center;
  gap: 25px;
  cursor: pointer;

  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    gap: 15px;
    padding: 20px 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;
const NavLink = styled.a `
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const ContactButton = styled.a `
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: #333;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
