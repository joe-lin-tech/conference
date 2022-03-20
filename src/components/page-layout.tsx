import React from "react";
import '../styles/global.css';
import Footer from "./footer";
import Navigation from './navigation';
// import { useAuthState } from "../hooks/firebase";

const PageLayout = ({ page, children }) => {
  return (
    <main>
      <Navigation page={page} />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout