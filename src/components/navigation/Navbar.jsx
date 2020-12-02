import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Deconnexion from './features/Deconnexion';


const Navbar = props => {

  //les ref
  const refButton1 = useRef(Navbar);
  const refButton2 = useRef(Navbar);

  //hides buttons
  const buttonLeft = () => {
    refButton2.current.classList.add("shade");}

  const buttonRight = () => {
    refButton1.current.classList.add("shade");}


  //show buttons
  const removeShade = () => {
    if(refButton1.current.classList.contains("shade")) {
          refButton1.current.classList.remove("shade");
    } else if(refButton2.current.classList.contains("shade")) {
          refButton2.current.classList.remove("shade");
    }
  }

    return (
      //changer col si switch
      <nav className="navbar row col-12">
        <ul className="box_navbar col-8">
          <li className="list_box col-3">
            <Link to="/" className="link_list">liens-1</Link>
          </li>
          <li className="list_box col-3">
            <Link to="/" className="link_list">liens-2</Link>
          </li>
          <li className="list_box col-3">
            <Link to="/" className="link_list">liens-3</Link>
          </li>
        </ul>
        <ul className="box_navbar col-4">
            <Deconnexion/>
            <li className="list_box col-3">
              <Link
                to="/connexion"
                onMouseOver={buttonLeft}
                onMouseOut={removeShade}
                ref={refButton1}
                className="link_list">
                Connexion
              </Link>
            </li>
            <li className="list_box col-3">
              <Link
                to="/inscription"
                onMouseOver={buttonRight}
                onMouseOut={removeShade}
                ref={refButton2}
                className="link_list">
                Inscription
              </Link>
            </li>
          </ul>
        </nav>
    )
  }

export default Navbar;
