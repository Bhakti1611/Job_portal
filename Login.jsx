    import React from 'react'

    import { GoogleAuthProvider } from "firebase/auth";

    import { getAuth } from "firebase/auth";
    import { signInWithPopup } from "firebase/auth";

    import app from '../firebase/firebase.config';


    const Login = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const handleLogin = () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    // Additional handling if needed
                })
                .catch((error) => {
                    // Error handling
                    console.error("Error occurred during login:", error);
                });
        };
        

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            
            <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>
        </div>
    )
    }

    export default Login