import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut   } from "firebase/auth";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import firebaseConfig from '../firebase.config';
import 'firebase/auth';
import { UserContext } from '../../App';
import { useHistory,useLocation, useNavigate } from 'react-router-dom';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const SingIn = () => {
    // const history = useNavigate  ();
    // const location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const provider = new GoogleAuthProvider();
    const [userInfo, setUserInfo] = useContext(UserContext);
    console.log(userInfo)
    const SingInWithGooglePopUp = () => {
        
       
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUserInfo(user)
               
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
    }
    return (
        <div className="mt-5">


            <Card className="ms-auto me-auto pt-4" style={{ width: '28rem', height: "200px" }}>

                <Button
                    className="mt-5 ms-5 btn-primary w-75"
                    onClick={SingInWithGooglePopUp}
                    size="small"
                    variant="contained"
                    color="secondary"

                > Continue With Google</Button>
                <p className="text-center">Don't have Account? </p>

            </Card>
        </div>
    );
};

export default SingIn;