import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from "gatsby-plugin-image"
import { useAuthState } from '../hooks/firebase';

const Navigation = ({ page }) => {
  const [user, loading, error] = useAuthState()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className="z-30 w-full px-2 py-4 bg-white sm:px-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <AniLink fade to="/" title="Autonomous Vehicle Conference Home Page" className="flex items-center" duration={1}>
          <StaticImage src="../images/logo.jpg" alt="Logo" placeholder="none" width={60} />
          <span className="sr-only">Autonomous Vehicle</span>
        </AniLink>
        <div className="flex items-center space-x-1">
          <div className="hidden md:inline-flex space-x-1">
            <AniLink className="btn btn-sm btn-link" fade to="/about" duration={1}>About the Team</AniLink>
            <AniLink className="btn btn-sm btn-link" fade to="/schedule" duration={1}>Event Schedule</AniLink>
            <AniLink className="btn btn-sm btn-link" fade to="/sponsors-partners" duration={1}>Sponsors + Partners</AniLink>
            <AniLink className="btn btn-sm btn-link" fade to="/contact" duration={1}>Contact</AniLink>
            <AniLink className="btn btn-sm btn-primary" fade to={user ? "/account" : "/auth"} state={{ authType: "register" }} duration={1}>{user ? "My Account" : "Register"}</AniLink>
            {!user && <AniLink className="btn btn-sm bg-green-400 text-white" fade to="/auth" state={{ authType: "signIn" }} duration={1}>Sign In</AniLink>}
          </div>
          <div className="inline-flex md:hidden flex-col">
            <button className="flex-none px-2 btn btn-link btn-sm" onClick={() => setShowMenu(!showMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
            {showMenu && <div className="absolute top-20 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow">
              <button className="self-end flex-none px-2 ml-2 btn btn-link btn-icon" onClick={() => setShowMenu(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span className="sr-only">Close Menu</span>
              </button>
              <AniLink className="btn btn-sm btn-link" fade to="/about" duration={1}>About the Team</AniLink>
              <AniLink className="btn btn-sm btn-link" fade to="/schedule" duration={1}>Event Schedule</AniLink>
              <AniLink className="btn btn-sm btn-link" fade to="/sponsors-partners" duration={1}>Sponsors + Partners</AniLink>
              <AniLink className="btn btn-sm btn-link" fade to="/contact" duration={1}>Contact</AniLink>
              <AniLink className="btn btn-sm btn-primary" fade to={user ? "/account" : "/auth"} state={{ authType: "register" }} duration={1}>{user ? "My Account" : "Register"}</AniLink>
              {!user && <AniLink className="btn btn-sm bg-green-400 text-white" fade to="/auth" state={{ authType: "signIn" }} duration={1}>Sign In</AniLink>}
            </div>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation