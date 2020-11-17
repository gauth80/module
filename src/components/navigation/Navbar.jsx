import React, {useRef} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const refButton1 = useRef(Navbar);
  const refButton2 = useRef(Navbar);


  const buttonLeft = () => {
    refButton2.current.classList.add("shade");
  }
  const buttonRight = () => {
    refButton1.current.classList.add("shade");
  }

  const removeShade = () => {
    if(refButton1.current.classList.contains("shade")) {
          refButton1.current.classList.remove("shade");
    } else if(refButton2.current.classList.contains("shade")) {
          refButton2.current.classList.remove("shade");
    }
  }

    return (
      <nav className="navbar row">
        <ul className="box-navbar col-6">
          <li className="list-box">
            <Link to="/" className="link-list col-2">liens-1</Link>
          </li>
          <li className="list-box">
            <Link to="/" className="link-list col-2">liens-2</Link>
          </li>
          <li className="list-box">
            <Link to="/" className="link-list col-2">liens-3</Link>
          </li>
        </ul>
        <ul className="box-navbar col-6">
            <li className="list-box offset-7">
              <Link
                to="/connexion"
                onMouseOver={buttonLeft}
                onMouseOut={removeShade}
                ref={refButton1}
                className="link-list col-3">
                Connexion
              </Link>
            </li>
            <li className="list-box">
              <Link
                to="inscription"
                onMouseOver={buttonRight}
                onMouseOut={removeShade}
                ref={refButton2}
                className="link-list col-3 ml-2">
                Inscription
              </Link>
            </li>
        </ul>
      </nav>
    )
  }

export default Navbar;
