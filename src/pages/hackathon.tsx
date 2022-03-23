import { navigate } from "gatsby";
import React, { useState } from "react";

const Hackathon = () => {
  return (
    <div className="bg-indigo-700 h-screen flex items-center">
      <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Participate in the Autonomous Vehicle Expo Hackathon and win prizes!</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Head over to our Devpost page and view more information about the hackathon. You can sign up there as well!
        </p>
        <a
          href="https://autonomous-vehicle-expo.devpost.com/?preview_token=VCjAoSZbd4MlnPvypurTh62C15WeDDXfqs05eyyb7Eg%3D"
          target="_blank"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Sign up on Devpost
        </a>
      </div>
    </div>
  )
}

export default Hackathon;