import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "./firebase"

export const loginGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider)
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    }
}
export const logout = async () => {
    await signOut(auth)
}