import React, { useState } from 'react'
import header from '../../assets/header.jpg'
import evolution from "../../assets/evolution.jpg"
import features from "../../assets/features.jpg"
import gallery_1 from "../../assets/gallery-1.jpg"
import gallery_2 from "../../assets/gallery-2.jpg"
import gallery_3 from "../../assets/gallery-3.jpg"
import gallery_4 from "../../assets/gallery-4.jpg"
import gallery_5 from "../../assets/gallery-5.jpg"
import gallery_6 from "../../assets/gallery-6.jpg"
const Home = () => {
  let [active,setactive] = useState(1)
  const click = (id)=>{
    setactive(id)
    console.log(id)
  }
  return (
   <>
    <header className="section__container header__container">
      <img src={header} alt="header" />
    </header>

    <section className="section__container story__container">
      <h2 className="section__header">01 PERAK HISTOIRE</h2>
      <h1 className='font-bold mb-5 text-[20px]'>- Passion et Début</h1>
      <p>
      Notre entreprise est née de la passion partagée pour les motos. Fondée par des enthousiastes du deux-roues, nous avons commencé avec la vision de créer une plateforme unique permettant aux passionnés de vendre et d'acheter des motos entre particuliers, favorisant ainsi une communauté engagée et dynamique.
      </p>
      <h1 className='font-bold mb-5 text-[20px]'>- Expansion et Technologie</h1>
      <p>
      Au fil du temps, nous avons étendu nos horizons et intégré les dernières technologies pour améliorer l'expérience de nos utilisateurs. Cette expansion nous a permis de toucher un public plus large et de consolider notre position en tant que leader dans le domaine de la vente de motos entre particuliers.
      </p>
      <h1 className='font-bold mb-5 text-[20px]'>- Vision Globale</h1>
      <p>
      Avec une vision tournée vers l'avenir, nous avons élargi nos horizons pour devenir une plateforme de renommée internationale. Grâce à des partenariats stratégiques et des fonctionnalités innovantes, nous connectons désormais les passionnés de motos du monde entier, créant ainsi une expérience d'achat sans frontières.
      </p>
      <p>Aujourd'hui, notre entreprise continue de croître et d'évoluer, toujours animée par la passion pour les deux roues et l'engagement envers une communauté unie par la passion de la moto.</p>
    </section>

    <section className="section__container evolution__container">
      <h2 className="section__header">02 JAWA PERAK EVOLUTION</h2>
      <div className="evolution__grid">
        <div className="evolution__image">
          <img src={evolution} alt="evolution" />
        </div>
        <div className="evolution__content">
          <div className="evolution__nav">
            <a  className={`cursor-pointer ${active === 1 ? "active" : ""}`} onClick={()=>click(1)}>1990</a>
            <a  className={`cursor-pointer ${active === 2 ? "active" : ""}`} onClick={()=>click(2)}>2005</a>
            <a  className={`cursor-pointer ${active === 3 ? "active" : ""}`} onClick={()=>click(3)}>2019</a>
            <a  className={`cursor-pointer ${active === 4 ? "active" : ""}`} onClick={()=>click(4)}>2023</a>
          </div>
          <p className={`${active === 1 ? "block" : "hidden"}`}>
            En 1990, l'entreprise a lancé une plateforme innovante permettant aux passionnés de moto de vendre et d'acheter des motos entre eux. Ce concept révolutionnaire a simplifié le processus de vente et d'achat, en créant une communauté dynamique de motards.
          </p>
          <p className={`${active === 2 ? "block" : "hidden"}`}>
            En 2005, l'entreprise a étendu sa plateforme en intégrant des fonctionnalités avancées et en augmentant son accessibilité. Les utilisateurs pouvaient désormais publier des annonces plus facilement et trouver des acheteurs ou des vendeurs potentiels dans leur région grâce à des outils de recherche améliorés.
          </p>
          <p className={`${active === 3 ? "block" : "hidden"}`}>
           En 2019, l'entreprise a modernisé sa plateforme en introduisant des applications mobiles et des technologies de pointe. Ces améliorations ont permis aux utilisateurs de gérer leurs annonces, de communiquer avec d'autres passionnés et de finaliser leurs transactions en toute simplicité, directement depuis leurs smartphones.
          </p>
          <p className={`${active === 4 ? "block" : "hidden"}`}>
          En 2023, l'entreprise a élargi son marché en s'ouvrant à l'international. Avec des options de langue multilingues et des services de livraison intégrés, les utilisateurs peuvent désormais acheter et vendre des motos à l'échelle mondiale. Cette expansion a permis de créer une communauté globale de motards, partageant leur passion à travers les frontières.
          </p>
        </div>
      </div>
    </section>

    <section className="feature">
      <div className="section__container feature__container">
        <div className="feature__image">
          <img src={features} alt="feature" />
        </div>
        <div className="feature__content">
          <h2 className="section__header">03 FEATURES</h2>
          <ul>
            <li>Annonces Personnalisées</li>
            <li>Vérification des Utilisateurs </li>
            <li>Assistance Clientèle 24/7</li>
            <li>Alertes Personnalisées</li>
            <li>Sécurisé Votre Information</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section__container gallery__container">
      <h2 className="section__header">04 GALLERY</h2>
      <div className="gallery__grid">
        <div className="gallery__col">
          <img src={gallery_1} alt="gallery" />
        </div>
        <div className="gallery__col">
          <img src={gallery_2} alt="gallery" />
          <img src={gallery_3} alt="gallery" />
          <img src={gallery_4} alt="gallery" />
          <img src={gallery_5} alt="gallery" />
        </div>
        <div className="gallery__col">
          <img src={gallery_6} alt="gallery" />
        </div>
      </div>
    </section>
   </>
  )
}

export default Home
