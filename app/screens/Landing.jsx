import React from "react";
// Header & Footer
import TopNavbar from "../routes/Nav/TopNavbar";
import Footer from "../routes/Sections/Footer"; 

// Pages
import Accueil from "../routes/Accueil";
import Adherer from "../routes/Adherer";
import Apprendre from "../routes/Apprendre";
import Divers from "../routes/Divers";
import Enseigner from "../routes/Enseigner";
import { HeaderActivités, Activités } from "../routes/Sections/Activités";
import { Assoc, Bulletin, Contact, Elu } from "../routes/Sections/Contact";
import { HeaderPromouvoir, Promouvoir } from "../routes/Sections/Promouvoir";
import { HeaderForum, Forum } from "../routes/Sections/Forum";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <main>
        <Accueil /> {/* Remix gère le routage par fichier */}
      </main>
      <Footer />
    </>
  );
}
