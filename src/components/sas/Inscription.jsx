import React, {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import {FirebaseContext} from '../Firebase';

import wrap from '../../media/img/wrapInscription.jpg';
import coffe from '../../media/img/coffeW.png';


const Inscription = (props) => {

  //inst context
  const ctx = useContext(FirebaseContext);

  //variable d'etats
  const [error, setError] = useState('');
  const [btn,setBtn] = useState(false);
  const [pseudo,setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  //envoyée a api
  const handleSubmit = e => {

    //annule refresh attr btn
    e.preventDefault();

    //conssume context, methode(state).res(key)
    ctx.inscription(email,password).then(user => {

      //redirect
      props.history.push("/accueil");
    })
    .catch(error => {
      //init var
      setBtn(false);
      setPseudo('');
      setEmail('');
      setPassword('');
      setConfPassword('');
      setError(error);
    })
  }

  //error
  const errorForm = error !== '' &&
    <div className="offset-1 col-xs-11 col-sm-11 my-2">
      {error.message}
    </div>;


    useEffect( () => {
      if(password.length >= 8 && email && pseudo !== '' && password === confPassword) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    },[pseudo,email,password,confPassword,btn]);


// def value a '' sinon hook non controllée, hors obj js
  return (
      <section className="wrap container row col-sm-12" style={{backgroundImage:`url(${wrap})`}}>
        <form className="row offset-0 offset-sm-2 p-xs-2 p-sm-5 col-xs-12 col-sm-8 mt-xs-0 mt-sm-5 form inscription"
          onSubmit={handleSubmit}>
          <fieldset className="col-xs-12 col-sm-12 col-lg-8 row">
            <legend className="col-12">Se créer un compte</legend>
            <label htmlFor="pseudo" className="row my-3 col-12 col-md-10">
              <input type="text"
                id="pseudo"
                placeholder="Indiquez votre Pseudo"
                required
                autoFocus
                onChange={e => setPseudo(e.target.value)}
                value={pseudo}/>
            </label>
            <label htmlFor="email" className="row my-3 col-12 col-md-10">
              <input type="email"
                id="email"
                placeholder="Indiquez votre mail"
                required
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            </label>
            <label htmlFor="password" className="row my-3 col-12 col-md-10">
              <input type="password"
                id="password"
                placeholder="Choisissez un mot de passe"
                required
                onChange={e => setPassword(e.target.value)}
                value={password}/>
            </label>
            <label htmlFor="confPassword" className="row my-3 col-12 col-md-10">
              <input type="password"
                id="confPassword"
                placeholder="Comfirmer le mot de passe"
                required
                onChange={e => setConfPassword(e.target.value)}
                value={confPassword}/>
            </label>
            <div className="row my-3 col-12 col-md-10">
              {
                btn ?
                  <button className="col-4 col-md-3 p-2 btn-neon">s'inscrire</button>
                :
                  <button disabled className="col-4 col-md-3 p-2 btn-neon shade">s'inscrire</button>
              }
            </div>
          </fieldset>
          <figure className=" d-none d-lg-block col-lg-4">
            <img src={coffe} alt="coffee" className="fluid"/>
          </figure>
          {errorForm}
        </form>
        <div className="row offset-xs-0 offset-sm-2 col-xs-12 col-sm-8 py-3 xs-center infoSub">
            <h3 className="offset-sm-1 col-12 col-sm-11">Autre alternative :</h3>
            <Link className="offset-sm-1 col-12 col-sm-11" to="/connexion">Se connecté</Link>
        </div>
        <section className="row offset-0 offset-sm-2 col-xs-12 col-sm-8 py-3 xs-center infoSub">
          <article className="row offset-1 col-11">
            <h3 className="col-12">A quoi sert l'inscription ?</h3>
            <p className="col-11 col-sm-7 mb-3 xs-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis labore beatae autem temporibus impedit amet excepturi dolores dignissimos molestias, dolorum?
            </p>
            <h3 className="col-12">Où sont stockée les données ?</h3>
            <p className="col-11 col-sm-7 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis labore beatae autem temporibus impedit amet excepturi dolores dignissimos molestias, dolorum?
            </p>

          </article>
        </section>
      </section>
  )
}

export default Inscription;
