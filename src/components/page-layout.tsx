import React from "react";
import '../styles/global.css';
import Footer from "./footer";
import Navigation from './navigation';
import SEO from "@bradgarropy/gatsby-plugin-seo"
import { HeadProvider, Link, Meta } from "react-head";
// import { useAuthState } from "../hooks/firebase";

const PageLayout = ({ page, children }) => {
  return (
    <HeadProvider>
      {/* <SEO
          title="Autonomous Vehicle Expo"
          description="Learn about the engineering, ethics, and policymaking of emerging autonomous vehicle technology."
        /> */}
      <title>Autonomous Vehicle Expo</title>
      <Meta charSet="UTF-8" />
      <Meta name="description" content="Learn about the engineering, ethics, and policymaking of emerging autonomous vehicle technology.
                                          The virtual expo is happening on April 16-17th with speakers from industry-leading companies, such as NVIDIA, Waymo, and Motional,
                                          as well as workshops led by prestigious programs like MIT Beaverworks and Inspirit AI." />
      <Meta name="keywords" content="HTML, CSS, JavaScript" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
      <Link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <Link rel="shortcut icon" href="/favicon/favicon.ico" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <Meta name="theme-color" content="#ffffff"/>
      <main>
        <Navigation page={page} />
        {children}
        <Footer />
      </main>
    </HeadProvider>
  )
}

export default PageLayout