import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Components layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './layouts/Home';
//Components sas
import Connexion from './sas/Connexion';
import Inscription from './sas/Inscription';
//Components pages
import Main from './pages/Main';
import NoFound from './error/NoFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/accueil" component={Main}/>
            <Route path ="/connexion" component={Connexion}/>
            <Route path ="/inscription" component={Inscription}/>
            <Route component={NoFound}/>
          </Switch>
        <Footer />
      </Router >
    )
  }
}

export default App;
