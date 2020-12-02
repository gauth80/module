import React from 'react';

// Composant du diapo (abstract)
import Slide from '../diapo/Slide';
// Le Dom virtuel impose de conaître d'avance ces composants & elements.
import mern from '../../media/img/mern.jpg';
import nodejs from '../../media/img/wallpaper.jpg';
import firefox from '../../media/img/wrapInscription.jpg';

const Images = [
    {
      src : mern,
      txt : "MongoDB, ExpressJs, React, NodeJs",
      alt : "stack Mern"
    },
    {
      src : nodejs,
      txt : "envirronement de développement",
      alt : "nodeJs"
    },
    {
      src : firefox,
      txt : "navigateur edition dev firefox",
      alt : "firefox"
    },
];

const Main = (props) => {
  return (
    <main className="container home">
      <Slide img={Images}/>
    </main>
  )
}

export default Main;
