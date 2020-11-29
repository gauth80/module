import React from 'react';
//modules tiers
import Swup from 'swup';
// Composant du diapo (abstract)
import Slide from '../diapo/Slide';
// Le Dom virtuel impose de conaître d'avance ces composants & elements.
import mern from '../../media/img/mern.jpg';
import image2 from '../../media/img/wallpaper.jpg';
import image3 from '../../media/img/wrapInscription.jpg';


const Images = [
    {
      src : mern,
      txt : "MongoDB, ExpressJs, React, NodeJs",
      alt : "stack Mern"
    },
    {
      src : image2,
      txt : "un texte",
      alt : "un texte alt"
    },
    {
      src : image3,
      txt : "un texte",
      alt : "un texte alt"
    },
];

const Main = (props) => {
  const swup = new Swup();
  return (
    <main id="swup" className="container transition-fade">
      <Slide img={Images}/>
    </main>
  )
}

export default Main;
