import React from 'react';
import '../styles/Accueil.css';
import TabImg from './TabImg';
import Actualite from './Actualite'; // Importer le composant Actualite
import image from '../img/drapeau_italie2.jpg'; // Assure-toi que le chemin est correct
import italieIcon from '../img/Italie_icon.png';
import divinaCommedia from '../img/DivinaComedia.jpg';
import zerocalcare from '../img/zerocalcare.jpg';
import greenPea from '../img/greenPea.jpg';
import sergio from '../img/sergio.jpg';
import dal from '../img/dal.jpg';
import raffaello from '../img/raffaelloSuperstar.jpg';
import lupi from '../img/lupi.jpg';
import portata from '../img/portata.jpg';
import TopNavbar from "./Nav/TopNavbar";
import Sidebar from "./Nav/Sidebar";

const Accueil = () => {
  return (
    <>
    <Sidebar/>
      <TopNavbar />
      <div className="accueil-container">
        {/* Section Hero avec image de fond et texte en overlay */}
        <div className="hero">
          <div className="hero-content">
            <h1>Bienvenue en Italie</h1>
          </div>
        </div>

        {/* Section de bienvenue et présentation */}
        <div className="accueil-container1">
          <h1 className="h1">
            Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne
          </h1>
          <TabImg
            imageUrl={image}
            imageAlt="Drapeau italien"
            title="Notre association a pour vocation :"
            description={
              <ul>
                <li>
                  <span className='span'>- d’établir et développer</span> des liens de solidarité et d’amitié entre les italianistes de la région parisienne;
                </li>
                <li>
                  <span className='span'>- de renseigner</span> les professeurs d’italien sur la diffusion de l’enseignement en région parisienne ;
                </li>
                <li>
                  <span className='span'>- de promouvoir</span> l’enseignement de l’italien.
                </li>
              </ul>
            }
          />
        </div>

        {/* Image décorative */}
        <img className="img" src={italieIcon} alt="Icône Italie" />

        {/* Section d'exploration culturelle */}
        <div className="accueil-container1">
          <h2 className="txt2">
            Exploration culturelle : Plongée au cœur de l'Italie avec l'Association des Professeurs d'Italien de la Région Parisienne
          </h2>
          <p className="txt">
            Nous sommes également des défenseurs de la diversité linguistique et culturelle...
          </p>
        </div>

        {/* Section Actualités */}
        <div className="accueil-container2">
          <h2 className="txt3 h2">Actualités</h2>
          <p className='p'>... DAL WEB</p>
          <div className="actualite-container">
            <div className="actualite-box">
              <Actualite
                image={divinaCommedia}
                title="La Divina Commedia"
                description="Con tutto si può giocare, anche con Dante Alighieri..."
                url="https://www.lastampa.it/cultura/2021/01/21/news/la-divina-commedia-diventa-un-gioco-da-tavolo-come-quello-dell-oca-1.39802733"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={zerocalcare}
                title="Zerocalcare sur Netflix"
                description="L'arrivo della serie animata di Zerocalcare sur Netflix..."
                url="https://youtu.be/c0p3iwtw9tU"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={greenPea}
                title="Green Pea apre a Torino l’8 dicembre"
                description="L’attesissimo centro commerciale della famiglia Farinetti..."
                url="https://www.gamberorosso.it/notizie/green-pea-apre-a-torino-l8-dicembre-ecco-cose-la-scommessa-ecologica-di-farinetti/"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={sergio}
                title="Sergio Mattarella: «Dante, nostro contemporaneo... »"
                description="La musica per rendere omaggio al Sommo poeta..."
                url="https://www.corriere.it/cultura/20_ottobre_03/sergio-mattarella-dante-nostro-contemporaneo-cosi-sua-voce-parla-futuro-5416bf66-05a5-11eb-867c-57744a2cabe2.shtml"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={dal}
                title="Dal 2021 riapre al pubblico il corridoio più famoso del mondo"
                description="Nel 2021 aprirà al pubblico una gemma del patrimonio artistico italiano..."
                url="https://it.businessinsider.com/corridoio-vasariano-firenze-palazzo-vecchio-uffici-palazzo-pitti-ponte-vecchio-2021-riapertura/"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={raffaello}
                title="Raffaello superstar, a Roma la più grande mostra"
                description="Le Scuderie del Quirinale celebreranno Raffaello Sanzio con la più spettacolare monografia..."
                url="https://roma.repubblica.it/cronaca/2019/12/25/news/raffaello_superstar_a_roma_la_piu_grande_mostra_con_cento_capolavori-244337923/"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={lupi}
                title="I lupi di Liu Ruowang invadono Napoli"
                description="Cento grandi lupi di metallo assediano minacciosi la statua di un guerriero..."
                url="http://www.rainews.it/dl/rainews/media/Cento-lupi-in-piazza-Municipio-a-Napoli-la-natura-che-si-ribella-all-uomo-7a4ad6e0-29a7-42ed-824b-d74e0b326cab.html#foto-3"
              />
            </div>
            <div className="actualite-box">
              <Actualite
                image={portata}
                title="Portata alla luce un’altra villa romana a Enna"
                description="Con l’installazione della copertura si sono conclusi i lavori..."
                url="http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
