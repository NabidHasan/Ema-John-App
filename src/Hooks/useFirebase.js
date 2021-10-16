import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import authenticationInitialize from "../Firebase/firebase.installation";

authenticationInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

        });
    }, [])
    const logOut = () => {

        signOut(auth).then(() => {
            setUser({})
        })

    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }


};

export default useFirebase;