import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/options")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                        <p> FocusApp </p>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login

// import React, { useEffect } from 'react';
// import { getAuth } from 'firebase/auth';
// import 'firebaseui/dist/firebaseui.css';
// import firebase from 'firebase/compat/app';
// import firebaseui from 'firebaseui/dist/firebaseui';
// import firebaseApp from './firebaseConfig'; // Import Firebase app instance

// const Login = () => {
//   useEffect(() => {
//     const auth = getAuth(firebaseApp); // Import FirebaseApp from firebaseConfig.js

//     // FirebaseUI configuration
//     const uiConfig = {
//       signInSuccessUrl: '/',
//       signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         // Add more authentication providers as needed
//       ],
//       // Other config options as needed
//     };

//     // Initialize FirebaseUI
//     const ui = new firebaseui.auth.AuthUI(auth);
//     ui.start('#firebaseui-auth-container', uiConfig);

//     return () => {
//       // Clean up FirebaseUI instance
//       ui.delete();
//     };
//   }, []);

//   return (
//     <div id="firebaseui-auth-container"></div>
//   );
// };

// export default Login;