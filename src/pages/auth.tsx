import React, { useState } from "react";
import PageLayout from '../components/page-layout';
import { StaticImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { auth, firestore } from "../../firebase";
import { useAuthState } from "../hooks/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { navigate } from "gatsby";
import { FaGoogle, FaGithub, FaTimes, FaExclamationCircle } from "react-icons/fa";

const Auth = ({ location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [multiAuth, setMultiAuth] = useState(false)
  const [multiAuthProvider, setMultiAuthProvider] = useState(null)
  const [multiAuthCredential, setMultiAuthCredential] = useState(null)
  const [alreadyUsed, setAlreadyUsed] = useState(false)
  const [noAccount, setNoAccount] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)
  const [user, loading, error] = useAuthState()
  if (loading) return <div></div>
  if (user) navigate("/account")
  const authType = location?.state?.authType || "register"

  const finishMultipleAuthentication = async () => {
    const result = await signInWithPopup(auth, multiAuthProvider)
    await linkWithCredential(result.user, multiAuthCredential);
    navigate("/account");
  }

  const handleMultipleAuthentication = async (email, credential) => {
    const methods = await fetchSignInMethodsForEmail(auth, email);

    if (methods[0] === 'password') {
      const promptUserForPassword = () => {
        return prompt('Please enter your password');
      }
      const password = promptUserForPassword();
      const result = await signInWithEmailAndPassword(auth, email, password)
      await linkWithCredential(result.user, credential);
      navigate("/account");
      return;
    }

    const providers = {
      "google.com": new GoogleAuthProvider(),
      "github.com": new GithubAuthProvider(),
    }
    const provider = providers[methods[0]];

    if (provider) {
      setMultiAuth(true)
      setMultiAuthProvider(provider)
      setMultiAuthCredential(credential)
    }
  }

  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      await setDoc(doc(firestore, "users", result.user.uid), {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      })
      navigate("/account")
    } catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      if (error.code == "auth/account-exists-with-different-credential") {
        handleMultipleAuthentication(error.customData.email, credential)
      }
    }
  }

  const signUpWithGithub = async () => {
    const provider = new GithubAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      await setDoc(doc(firestore, "users", result.user.uid), {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      })
      navigate("/account")
      // ...
    } catch (error) {
      console.log(error, error.code)
      const credential = GithubAuthProvider.credentialFromError(error);
      if (error.code == "auth/account-exists-with-different-credential") {
        handleMultipleAuthentication(error.customData.email, credential)
      }
    }
  }

  const signUpWithEmail = async (e) => {
    e.preventDefault()
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password)
      // Signed in 
      await setDoc(doc(firestore, "users", user.uid), {
        displayName: name,
        email: email,
      })
      navigate("/account")
      // ...
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      if (errorCode == "auth/email-already-in-use") {
        setAlreadyUsed(true)
      }
    }
  }

  const signInWithEmail = (e) => {
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
        if (error.code == "auth/user-not-found") {
          setNoAccount(true)
        }
        if (error.code == "auth/wrong-password") {
          setWrongPassword(true)
        }
      });
  }

  return (
    <PageLayout page="Auth">
      <section className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="w-full px-4 py-20 mx-auto xl:py-20 md:w-3/5 lg:w-4/5 xl:w-3/5">
          <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">
            {authType == "register" ? "Sign up for the expo by creating your personal account!" : "Sign in to view your expo account and explore the event! "}
          </h1>
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button onClick={signUpWithGoogle} className="py-3 btn btn-icon btn-google">
                <FaGoogle width={20} height={20} className="mr-2" />
                Google
              </button>
              <button onClick={signUpWithGithub} className="py-3 btn btn-icon btn-dark">
                <FaGithub width={20} height={20} className="mr-2" />
                Github
              </button>
            </div>
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
            </div>
          </div>
          <form className="mt-8 space-y-4" onSubmit={authType == "register" ? (e) => signUpWithEmail(e) : (e) => signInWithEmail(e)}>
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
              <span className="block mb-1 text-xs font-medium text-gray-700">Create a Password</span>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {/* {authType == "register" && <div>
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
            </div>} */}
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
        {alreadyUsed && <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Email Already Used.</p>
                    <p className="mt-1 text-sm text-gray-500">Sign in with Google or Github.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setAlreadyUsed(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FaTimes className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {multiAuth && <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Linking Providers!</p>
                    <p className="mt-1 text-sm text-gray-500">You've created an account with a different provider before. If you want to sign in using this provider instead, please press continue and log in with your original provider.</p>
                    <div className="mt-3 flex space-x-7">
                      <button
                        type="button"
                        onClick={finishMultipleAuthentication}
                        className="bg-white rounded-md text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setMultiAuth(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FaTimes className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {noAccount && <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Account not found.</p>
                    <p className="mt-1 text-sm text-gray-500">Make an account or sign in with Google/Github.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setNoAccount(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FaTimes className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {wrongPassword && <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Incorrect Credentials.</p>
                    <p className="mt-1 text-sm text-gray-500">You've entered an incorrect password.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setWrongPassword(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <FaTimes className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </section>
    </PageLayout>
  )
}

export default Auth;