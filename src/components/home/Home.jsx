import React, { useState } from 'react'
import header from '../../assets/Circa.png'
import evolution from "../../assets/pic_circa.png"
import features from "../../assets/evolution.png"
import gallery_1 from "../../assets/cap1.png"
import gallery_2 from "../../assets/cap2.png"
import gallery_3 from "../../assets/cap3.png"
import gallery_4 from "../../assets/cap4.png"
import gallery_5 from "../../assets/cap5.png"
import gallery_6 from "../../assets/cap6.png"
const Home = () => {
  let [active,setactive] = useState(1)
  const click = (id)=>{
    setactive(id)
    console.log(id)
  }
  return (
   <>
   <article className='flex flex-col md:flex-row  justify-around items-center h-auto mt-10 section__container'>
    <header className="">
        <img src={header} alt="header" className='w-[2500px]'/>
      </header>
      <section className="h-4/5 flex flex-col justify-around gap-6">
        <h2 className="text-[40px] font-bold textsh text-center">Circa</h2>
       <p className='md:w-[500px] w-auto'>Circa est une plateforme en ligne où les utilisateurs peuvent acheter et vendre des accessoires de mode directement entre eux, similaire à un marché sur Facebook. Les utilisateurs peuvent créer des annonces pour leurs articles avec des photos et des descriptions, et les mettre en vente. Circa facilite les transactions grâce à une interface conviviale, des outils de communication intégrés, des options de paiement sécurisées, et des évaluations des vendeurs et acheteurs. Rejoignez Circa pour vendre et acheter des sacs à main, bijoux, montres, et plus encore, en toute confiance et simplicité.</p>
      </section>
   </article>
   <section className="feature">
      <div className="section__container flex justify-around items-center flex-col md:flex-row">
        <div className="feature__image">
          <img src={features} alt="feature" className='w-[1000px] scale-100 md:scale-150'/>
        </div>
        <div className="feature__content">
          <h2 className="section__header text-[40px] font-bold textsh"> FEATURES</h2>
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
    <section className="section__container evolution__container ">
      <h2 className=" text-center text-[40px] font-bold textsh"> Circa EVOLUTION</h2>
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
          En 1990, Circa a été fondée comme une petite boutique locale spécialisée dans la vente et l'achat d'accessoires de mode d'occasion, tels que des sacs à main, des bijoux et des montres. L'entreprise a commencé avec un magasin physique situé au cœur d'une grande ville, offrant une sélection limitée mais soigneusement choisie d'articles de luxe.
          </p>
          <p className={`${active === 2 ? "block" : "hidden"}`}>
          En 2005, Circa a connu une expansion significative en ouvrant plusieurs nouvelles boutiques dans des villes importantes à travers le pays. Cette année a également marqué le lancement de leur premier site web, permettant aux clients de parcourir et d'acheter des articles en ligne. Le site a introduit des options de paiement sécurisées, élargissant ainsi la portée de Circa au-delà de ses magasins physiques.          </p>
          <p className={`${active === 3 ? "block" : "hidden"}`}>
          En 2019, Circa a transformé son modèle d'affaires en lançant une plateforme en ligne qui permet aux utilisateurs de vendre et d'acheter directement des accessoires de mode entre eux, similaire à un marché sur Facebook. Cette innovation a permis à Circa de créer une communauté dynamique de passionnés de mode, facilitant des transactions transparentes et sécurisées entre particuliers.          </p>
          <p className={`${active === 4 ? "block" : "hidden"}`}>
          En 2023, Circa continue de croître et d'améliorer son service. La plateforme en ligne est devenue plus conviviale avec de nouvelles fonctionnalités telles que des outils de communication intégrés, des évaluations des vendeurs et acheteurs, et un service client dédié. Circa est maintenant reconnue comme une des principales plateformes pour l'achat et la vente d'accessoires de mode, offrant une expérience utilisateur fluide et sécurisée.          </p>
        </div>
      </div>
    </section>

    <section className="section__container gallery__containe">
      <h2 className="section__header text-[40px] font-bold textsh"> GALLERY</h2>
      <div className="gallery__grid">
        <div className="gallery__col">
          <img src={gallery_1} alt="gallery" className='scale-100 md:scale-100'/>
        </div>
        <div className="gallery__col">
          <img src={gallery_2} alt="gallery" className='scale-100 md:scale-125' />
          <img src={gallery_3} alt="gallery" className='scale-100 md:scale-125' />
          <img src={gallery_4} alt="gallery" className='scale-100 md:scale-125' />
          <img src={gallery_5} alt="gallery" className='scale-100 md:scale-125' />
        </div>
        <div className="gallery__col">
          <img src={gallery_6} alt="gallery" className='scale-100 md:scale-125'/>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home
