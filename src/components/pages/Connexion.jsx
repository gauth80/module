import React, {useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import wrap from '../../media/img/wrapInscription.jpg';
import coffe from '../../media/img/coffeW.png';


const Connexion = (props) => {

  //inst context
  const ctx = useContext(FirebaseContext);

  //var etat
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn,setBtn] = useState(false);
  const [error,setError] = useState('');



  useEffect(()=> {
      password.length >= 8 && email !== '' ? setBtn(true) : setBtn(false)
  }, [password,email,btn]);

  const handleSubmit = e => {

    //annule refresh attr btn
    e.preventDefault();
    ctx.connexion(email,password).then(user => {
      props.history.push("/accueil");

    }).catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
      setBtn(false);
    })
  }

  const errorForm = error !== '' &&
    <div className="offset-1 col-xs-11 col-sm-11 my-2">
      {error.message}
    </div>;


// def value a '' sinon hook non controllée, hors obj js
  return (
      <section className="wrap container row col-sm-12" style={{backgroundImage:`url(${wrap})`}}>
        <form onSubmit={handleSubmit} className="row offset-0 offset-sm-2 p-xs-2 p-sm-5 col-xs-12 col-sm-8 mt-xs-0 mt-sm-5 form inscription">
          <fieldset className="col-xs-12 col-sm-12 col-lg-8 row">
            <legend className="col-12">Qui êtes vous ?</legend>
            <label htmlFor="email" className="row my-3 col-12 col-md-10">
              <input type="email"
                id="email"
                placeholder="Indiquez votre mail"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required/>
            </label>
            <label htmlFor="password" className="row my-3 col-12 col-md-10">
              <input type="password"
                id="password"
                placeholder="Choisissez un mot de passe"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required/>
            </label>
          </fieldset>
          <figure className=" d-none d-lg-block col-lg-4">
            <img src={coffe} alt="coffee" className="fluid"/>
          </figure>
            {
              btn ?
                <button className="col-4 col-md-3 p-2 btn-neon">se connecter</button>
              :
                <button disabled className="col-4 col-md-3 p-2 btn-neon shade">se connecter</button>
            }
            {errorForm}
        </form>
        <div className="row offset-xs-0 offset-sm-2 col-xs-12 col-sm-8 py-3 xs-center infoSub">
            <h3 className="offset-sm-1 col-12 col-sm-11">Autre alternative :</h3>
            <Link className="offset-sm-1 col-12 col-sm-11" to="/inscription">S'inscrire</Link>
        </div>
      </section>
  )
}

Connexion.propTypes = {
  connexion : PropTypes.func.isRequired
}

export default Connexion;
