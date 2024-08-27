import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAe_DG75Ginj_177O3LRsl210_LLufUSNQ",
    authDomain: "fapion-clothing-database.firebaseapp.com",
    projectId: "fapion-clothing-database",
    storageBucket: "fapion-clothing-database.appspot.com",
    messagingSenderId: "771277304036",
    appId: "1:771277304036:web:5f8183d4f757b7b2a1bcf1"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef)

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch (error) {
            console.log('error creating the user', error.message);

        }


    }
    return userDocRef;
  }

