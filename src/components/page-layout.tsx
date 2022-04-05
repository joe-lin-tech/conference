import React from "react";
import '../styles/global.css';
import Footer from "./footer";
import Navigation from './navigation';
import SEO from "@bradgarropy/gatsby-plugin-seo"
// import { useAuthState } from "../hooks/firebase";

const PageLayout = ({ page, children }) => {
  return (
    <main>
      <SEO
        title="Autonomous Vehicle Expo"
        description="Learn about the engineering, ethics, and policymaking of emerging autonomous vehicle technology."
      />
      <Navigation page={page} />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout