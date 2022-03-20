import React, { useState } from "react";
import PageLayout from '../components/page-layout';
import { StaticImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { auth, firestore } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { navigate } from "gatsby";
import { FaGoogle, FaGithub } from "react-icons/fa";

const signUpWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      await setDoc(doc(firestore, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
      navigate("/account")
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
    });
}

const signUpWithGithub = () => {
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log(result)
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      await setDoc(doc(firestore, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
      navigate("/account")
      // ...
    }).catch((error) => {
      console.log(error)
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
}

const signUpWithEmail = (e, name, email, password, size) => {
  e.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      await setDoc(doc(firestore, "users", user.uid), {
        displayName: name,
        email: email,
        size: size,
      })
      navigate("/account")
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

const signInWithEmail = (e, email, password) => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/account")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const Auth = ({ location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [size, setSize] = useState("Small")
  const authType = location?.state?.authType || "register"
  
  return (
    <PageLayout page="Auth">
      <section className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="w-full px-4 py-20 mx-auto xl:py-20 md:w-3/5 lg:w-4/5 xl:w-3/5">
          <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">
            {authType == "register" ? "Sign up for this autonomous vehicle expo for free!" : "Sign in to view your expo account and explore the event! "}
          </h1>
          <div className="mt-8 space-y-10">
            <div className="grid grid-cols-2 gap-4">
              <button onClick={signUpWithGoogle} className="py-3 btn btn-icon btn-google">
                <FaGoogle width={20} height={20} className="mr-2" />
                Google
              </button>
              {/* <button onClick={signUpWithGithub} className="py-3 btn btn-icon btn-dark"> */}
              <button onClick={() => {}} className="py-3 btn btn-icon btn-dark">
                <FaGithub width={20} height={20} className="mr-2" />
                Github
              </button>
            </div>
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
            </div>
          </div>
          <form className="mt-8 space-y-4" onSubmit={authType == "register" ? (e) => signUpWithEmail(e, name, email, password, size) : (e) => signInWithEmail(e, email, password)}>
            {authType == "register" && <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Name</span>
              <input
                className="form-input"
                type="name"
                placeholder="Ex. John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>}
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. info@avexpo.org"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {authType == "register" && <div>
              <label htmlFor="size" className="block mb-1 text-xs font-medium text-gray-700">
                T-Shirt Size
              </label>
              <select
                id="size"
                name="size"
                className="form-select"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>}
            <input
              type="submit"
              className="w-full btn btn-primary btn-lg"
              value={authType == "register" ? "Register" : "Sign In"}
            />
          </form>
          <div className="pt-6 mt-6 text-sm font-medium text-gray-700 border-t border-gray-200">
            {authType == "register" ? 'Already have an account? ' : 'Don\'t have an account? '}
            {authType == "register" ? <AniLink fade to="/auth" state={{ authType: "signIn" }} className="text-blue-500 hover:text-blue-800">Sign In.</AniLink> : <AniLink fade to="/auth" state={{ authType: "register" }} className="text-blue-500 hover:text-blue-800">Register.</AniLink>}
          </div>
        </div>
        <div className="px-4 py-20 space-y-10 xl:py-20 md:px-40 lg:px-20 xl:px-40">
          <AniLink fade to="/" title="Autonomous Vehicle Conference Home Page" className="flex items-center">
            {/* <StaticImage src="../images/logo-icon.png" alt="Logo" placeholder="none" width={150} /> */}
            <StaticImage src="../images/logo.jpg" alt="Logo" placeholder="none" width={60} />
            <span className="sr-only">Autonomous Vehicle</span>
          </AniLink>
          <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-blue-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-blue-500">Free admission</h2>
              <p className="mt-1 text-gray-600">Join our free national autonomous vehicle conference and hackathon, featuring speakers and workshops.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-blue-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-blue-500">Your experience</h2>
              <p className="mt-1 text-gray-600">A diverse range of speakers and workshops that cater to your specific interests.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-blue-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-blue-500">Win prizes</h2>
              <p className="mt-1 text-gray-600">Don't miss this opportunity to win a diverse range of prizes, including merch and tech gadgets.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Auth;