import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import key from './key/config.json';

//key de l'api :)
//const config = key;





class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  inscription = (email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password);


  connexion = (email,password) =>
    this.auth.signInWithEmailAndPassword(email,password);

  deconnexion = () =>
    this.auth.signOut();


  user = uid =>
    //this.db.doc(`user/${uid}`);
    this.db.collection("user").doc();

}

export default Firebase;
