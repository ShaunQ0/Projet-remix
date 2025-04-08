import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "./Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/projects/bulletin1.png";
import ProjectImg2 from "../../assets/img/projects/bulletin2.png";
import ProjectImg3 from "../../assets/img/projects/bulletin3.png";
import ProjectImg4 from "../../assets/img/projects/bulletin4.png";
import ProjectImg5 from "../../assets/img/projects/bulletin5.png";
import ProjectImg6 from "../../assets/img/projects/bulletin6.png";
import HeaderImage from "../../assets/img/Contact/Header-Contact.jpg";

// Ajoutez le loader pour que Remix puisse gérer les requêtes GET vers /Contact
export let loader = async () => {
  return null;
};

export function Contact() {
  return (
    <HeaderWrapper className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            Nous <span className="darkColor">contacter</span>
          </h1>
          <HeaderP className="font15">
            Pour nous signaler tout changement de coordonnées personnelles
            (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement
            de rattachement, de statut, etc.), merci d’envoyer un courriel à : <span className="semiBold">apirp.association@gmail.com.</span>
            <br />
            Pour les renouvellements d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien,
            nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières pages de notre bulletin annuel.
          </HeaderP>
          <h3>Mail : apirp.association@gmail.com</h3>
          <br />
          <h3>Suivez-nous sur <a href="https://m.facebook.com/APIRP/" target="_blank" className="darkColor">Facebook</a> !</h3>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
        </ImageWrapper>
      </RightSide>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
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
