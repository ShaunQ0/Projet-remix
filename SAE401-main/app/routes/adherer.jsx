import '../style/css/Adherer.css'; // Importe le fichier CSS pour le composant Adherer
import '../style/css/main.css'; // Importe le fichier CSS pour le composant Adherer
import adhererImg from '../img/img-adherer.png'; // Chemin vers ton image
import heroImage from '../img/drapeau_italie.jpg';
import HeaderPage from "../components/Elements/HeaderPage";


export function HeaderAdherer() {
    return (
      <HeaderPage
      h1 = "à notre association "
      h1Green = "Adhérer "
      description = "Bienvenue sur notre page d'adhésion. Découvrez les avantages de devenir membre de notre association."
      headerImage = {heroImage}
      scrollTo="#adherer"
      />
    );
  }


const Adherer = () => {
    return (
        <>
        
        <HeaderAdherer />
        <div className="adherer-container" id='adherer'>
            
            <div className="adherer-content1">
                
                <img src={adhererImg} alt="Adherer Image" className="adherer-image" />

                <div className="txt-content">
                    <h2 className='h2'>Pourquoi adhérer ?</h2>
                    <h3 className='h3'>Adhérer à l'A.P.I.R.P. vous permet de :</h3>
                    <ol className='custom-ol ol'>
                            <li >Participer activement aux assemblées générales.</li>
                            <li>Recevoir chaque année le bulletin imprimé de l’association et des plaquettes gratuites pour la promotion de l’italien.</li>
                            <li>
                                Soutenir des initiatives visant à promouvoir l’enseignement de l’italien en île-de-France, telles que :
                                <ul className='ul'>
                                    <li>- La réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France ;</li>
                                    <li>- La création et l’impression de plaquettes pour la promotion de l’italien ;</li>
                                    <li>- Notre participation à des manifestations et des événements culturels tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc.</li>
                                </ul>
                            </li>
                            <li>Connaître le réseau des professeurs d’italien de la Région Parisienne.</li>
                            <li>Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.</li>
                            <li>Bénéficier de l'union qui fait la force ; l'A.P.I.R.P. est un moyen de ne pas rester isolé et de favoriser des échanges actifs sur notre métier.</li>
                    </ol>
                </div>
            </div>

            <div className="adherer-content2">
                <h2 className='h2'>Qui peut adhérer à l’association ?</h2>
                <p className='p'>Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.</p>
                <h3>Comment y adhérer ?</h3>
                <p className='p'>Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.</p>

                <button className="button" onClick={() => window.open(FicheAdhesionPDF, '_blank')}>Télécharger la fiche d'adhésion</button>
            </div> 
        </div>
        </>
    );
}

export default Adherer;