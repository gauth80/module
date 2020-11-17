import React, {useState, useContext, useEffect} from 'react';
import {FirebaseContext} from '../Firebase';


const Main = (props) => {

  const ctx = useContext(FirebaseContext);
  //var etats
  const [session,setSession] = useState(null);

  useEffect(() => {

    const user = ctx.auth.currentUser;
      if(user) {
        setSession(user);
      } else {
        setSession(null);
        props.history.push("/connexion");
      }
  },[]);

  return session === null ? (
    <main className="container row">
      <div className="helper">
              <p>..Cherche si tu existe dans les registres..</p>
      </div>
    </main>
  ) : (
    <>
      <p>Session trouvée !</p>
    </>
  )
}

export default Main;
