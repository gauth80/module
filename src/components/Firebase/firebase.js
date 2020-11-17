import app from 'firebase/app';
import 'firebase/auth';
import key from './key/config.json';

//key de l'api :)
const config = key;

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  inscription = (email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password);


  connexion = (email,password) =>
    this.auth.signInWithEmailAndPassword(email,password);

  deconnexion = () => {
    this.auth.signOut();
  }
}

export default Firebase;
