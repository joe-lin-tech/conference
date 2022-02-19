import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"

const Navigation = ({ page }) => {
  return (
    <header className="z-30 w-full px-2 py-4 bg-white sm:px-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <AniLink fade to="/" title="Autonomous Vehicle Conference Home Page" className="flex items-center">
          <StaticImage src="../images/logo-icon.png" alt="Logo" placeholder="none" width={150} />
          <span className="sr-only">Autonomous Vehicle</span>
        </AniLink>
        <div className="flex items-center space-x-1">
          <div className="hidden space-x-1 md:inline-flex">
            <AniLink className="btn btn-sm btn-link" fade to="/about" duration={1}>About the Team</AniLink>
            <AniLink className="btn btn-sm btn-link" fade to="/schedule" duration={1}>Conference Schedule</AniLink>
            <AniLink className="btn btn-sm btn-link" fade to="/partners" duration={1}>Partners</AniLink>
            <AniLink className="btn btn-sm btn-link" fade to="/about" duration={1}>Contact</AniLink>
          </div>
          <AniLink className="btn btn-sm btn-primary" fade to="/auth" duration={1}>Register</AniLink>
          <div className="inline-flex md:hidden" x-data="{ open: false }">
            <button className="flex-none px-2 btn btn-link btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
            <div className="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow" x-cloak>
              <button className="self-end flex-none px-2 ml-2 btn btn-link btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span className="sr-only">Close Menu</span>
              </button>
              <a href="#" className="w-full btn btn-link">Features</a>
              <a href="#" className="w-full btn btn-link">Pricing</a>
              <a href="#" className="w-full btn btn-link">Blog</a>
              <a href="#" className="w-full btn btn-link">Company</a>
              <a href="#" className="w-full btn btn-link">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation