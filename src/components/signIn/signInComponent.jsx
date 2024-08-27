import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = ()=> {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn;