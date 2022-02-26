import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useEffect, useRef } from "react";
import PageLayout from "../components/page-layout";

const Home = () => {
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  let context = null;
  const frameCount = 750;

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");
    const animatedImage = new Image();
    animatedImage.src = `/animation/home/out1.jpg`;
    animatedImage.onload = () => {
      context.drawImage(animatedImage, 0, 0);
    };
  }, []);

  useScrollPosition(({ currPos }) => {
    const { y: currY } = currPos;
    const scrollFraction = -currY / 5000;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil((scrollFraction * frameCount) / 3)
    );
    const animatedImage = new Image();
    animatedImage.src = `/animation/home/out${frameIndex}.jpg`;
    animatedImage.onload = () => {
      context.drawImage(animatedImage, 0, 0);
    };
  }, []);

  return (
    <PageLayout page="Home">
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            Come to the{" "}
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 lg:inline">
              autonomous vehicle
            </span>{" "}
            conference to learn about its engineering, ethics, and policymaking.
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
            The National Autonomous Vehicle Conference is a unique opportunity
            to learn about the future of autonomous vehicles.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a
              className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0"
              href="#"
            >
              Register
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              className="inline-flex items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0"
              href="#"
            >
              View Conference
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <img
            src="/hero.jpg"
            alt=""
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
        {/* <div className="grid grid-cols-4 gap-10 text-center lg:grid-cols-8">
          <div className="flex items-center justify-center">
            <img src="/logos/todoist.svg" alt="Todoist Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/slack-icon.svg" alt="Slack Logo" className="block object-contain h-12" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/typeform.svg" alt="Typeform Logo" className="block object-contain h-12" />
          </div>
        </div> */}
        <p className="mt-16 text-base font-medium text-center text-gray-500">
          We've partnered with various industry-leading companies and startups
          to provide you the best quality conference.&nbsp;
          <AniLink
            className="inline-flex items-center justify-center text-primary hover:text-primary-dark"
            fade
            to="/sponsors"
            duration={1}
          >
            Our sponsors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-3 h-3 ml-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </AniLink>
        </p>
      </section>
      <div className="h-[1500vh]">
        <div ref={stickyRef} className="sticky mt-10 top-0">
          <canvas
            width={1920}
            height={1080}
            className={`w-full`}
            ref={canvasRef}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
