import React from "react";
import PageLayout from '../components/page-layout';
import { StaticImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useAuth, useFirestore } from "../hooks/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { navigate } from "gatsby";

const signUpWithGoogle = () => {
  const auth = useAuth()
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const firestore = useFirestore()
      console.log(user)
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

const Auth = () => {
  return (
    <PageLayout page="Auth">
      <section className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="w-full px-4 py-20 mx-auto xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
          <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">Sign up for this autonomous vehicle conference for free!</h1>
          <div className="mt-8 space-y-10">
            <div className="grid grid-cols-2 gap-4">
              <button onClick={signUpWithGoogle} className="py-3 btn btn-icon btn-google">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                  <path
                    d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                  />
                </svg>
                Google
              </button>
              <a href="#" className="py-3 btn btn-icon btn-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                  <path
                    d="M19.665,16.811c-0.287,0.664-0.627,1.275-1.021,1.837c-0.537,0.767-0.978,1.297-1.316,1.592	c-0.525,0.482-1.089,0.73-1.692,0.744c-0.432,0-0.954-0.123-1.562-0.373c-0.61-0.249-1.17-0.371-1.683-0.371	c-0.537,0-1.113,0.122-1.73,0.371c-0.616,0.25-1.114,0.381-1.495,0.393c-0.577,0.025-1.154-0.229-1.729-0.764	c-0.367-0.32-0.826-0.87-1.377-1.648c-0.59-0.829-1.075-1.794-1.455-2.891c-0.407-1.187-0.611-2.335-0.611-3.447	c0-1.273,0.275-2.372,0.826-3.292c0.434-0.74,1.01-1.323,1.73-1.751C7.271,6.782,8.051,6.563,8.89,6.549	c0.46,0,1.063,0.142,1.81,0.422s1.227,0.422,1.436,0.422c0.158,0,0.689-0.167,1.593-0.498c0.853-0.307,1.573-0.434,2.163-0.384	c1.6,0.129,2.801,0.759,3.6,1.895c-1.43,0.867-2.137,2.08-2.123,3.637c0.012,1.213,0.453,2.222,1.317,3.023	c0.392,0.372,0.829,0.659,1.315,0.863C19.895,16.236,19.783,16.529,19.665,16.811L19.665,16.811z M15.998,2.38	c0,0.95-0.348,1.838-1.039,2.659c-0.836,0.976-1.846,1.541-2.941,1.452c-0.014-0.114-0.021-0.234-0.021-0.36	c0-0.913,0.396-1.889,1.103-2.688c0.352-0.404,0.8-0.741,1.343-1.009c0.542-0.264,1.054-0.41,1.536-0.435	C15.992,2.127,15.998,2.254,15.998,2.38L15.998,2.38z"
                  />
                </svg>
                Apple
              </a>
            </div>
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">Or</span>
            </div>
          </div>
          <form className="mt-8 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
              <input className="form-input" type="email" placeholder="Ex. james@bond.com" required />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
              <input className="form-input" type="password" placeholder="••••••••" required />
            </label>
            <input type="submit" className="w-full btn btn-primary btn-lg" value="Register" />
          </form>
          <div className="pt-6 mt-6 text-sm font-medium text-gray-700 border-t border-gray-200">
            Already have an account?&nbsp;
            <a href="#" className="text-blue-600 hover:text-blue-800">Sign Up</a>
          </div>
        </div>
        <div className="px-4 py-20 space-y-10 xl:py-32 md:px-40 lg:px-20 xl:px-40">
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
              <p className="mt-1 text-gray-600">Join our national autonomous vehicle conference, featuring speakers and workshops, for free.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-blue-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-blue-500">Your app platform</h2>
              <p className="mt-1 text-gray-600">A platform for apps, with app management & instant scaling, for development and production.</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-blue-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-blue-500">Deploy now</h2>
              <p className="mt-1 text-gray-600">Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Auth;