import React from "react";
import '../styles/global.css';
import Footer from "./footer";
import Navigation from './navigation';
// import { useAuthState } from "../hooks/firebase";
import { Helmet } from "react-helmet"

const PageLayout = ({ page, children }) => {
  return (
    <>
      <Helmet>
        {/* <SEO
            title="Autonomous Vehicle Expo"
            description="Learn about the engineering, ethics, and policymaking of emerging autonomous vehicle technology."
          /> */}
        <title>Autonomous Vehicle Expo</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Learn about the engineering, ethics, and policymaking of emerging autonomous vehicle technology.
                                            The virtual expo is happening on April 16-17th with speakers from industry-leading companies, such as NVIDIA, Waymo, and Motional,
                                            as well as workshops led by prestigious programs like MIT Beaverworks and Inspirit AI." />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff"/>
      </Helmet>
      <main>
        <Navigation page={page} />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default PageLayout