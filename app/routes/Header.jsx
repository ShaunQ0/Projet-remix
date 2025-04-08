import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@remix-run/react";

// Components
import FullButton from "./Buttons/FullButton";

// Assets
import HeaderImage from "../../assets/img/header-img.png";
// Remplacez les anciens décoratifs par les icônes burger et close
import BurgerIcon from "../assets/svg/BurgerIcon.jsx";
import CloseIcon from "../assets/svg/CloseIcon.jsx";

export default function Header() {
  // État pour gérer l'affichage de l'icône de menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60 darkColor">
            Forum des associations franco-italiennes
          </h1>
          <HeaderP className="font13 semiBold">
            Découvrez le prochain forum des associations italiennes et son programme.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
          {/* Bouton de menu : affiche BurgerIcon si fermé, CloseIcon si ouvert */}
          <IconWrapper onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <BurgerIcon />}
          </IconWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg" />
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  position: relative;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

// Boîte qui contient l'icône burger/close, positionnée sur l'image
const IconWrapper = styled.div`
  position: absolute;
  right: -50px;
  top: 20px;
  cursor: pointer;
  @media (max-width: 960px) {
    right: 20px;
    top: 20px;
  }
`;
