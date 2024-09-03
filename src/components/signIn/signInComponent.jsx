import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase/firebase";
import SignUp from "../signup/SignUp";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const logGoogleRedirectUser = () => {
        signInWithGoogleRedirect(auth);
    };

    useEffect(() => {
        const fetchRedirectResult = async () => {
            const result = await getRedirectResult(auth);
            if (result) {
                const { user } = result;
                await createUserDocumentFromAuth(user);
            }
        };

        fetchRedirectResult();
    }, []);

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>

            <SignUp/>
        </div>
    );
};

export default SignIn;
