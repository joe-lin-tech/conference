import React from "react";
import PageLayout from '../components/page-layout';
import ProfileCard from "../components/profile-card";

const Partners = () => {
  return (
    <PageLayout page="Partners">
      <section className="px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">Partners</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-6 text-lg text-center text-gray-600 md:text-xl lg:px-24">
            Check out our partners that made this autonomous vehicle conference possible!
          </p>
        </div>
        {/* <div className="grid gap-8 grid-cols-4">
          <div className="col-start-2">
            <ProfileCard name="Joe Lin" position="Conference Lead" image="../images/profiles/joe-lin.jpeg" />
          </div>
          <div className="col-end-4">
            <ProfileCard name="Tabitha Colter" position="Conference Lead" image="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
          </div>
          <div className="col-start-1">
            <ProfileCard name="First Last" position="Logistics Lead" image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </div>
          <></>
        </div> */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-0.5 md:grid-cols-5">
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="h-24"
                  src="https://avatars.githubusercontent.com/u/21328078?s=400&u=ea1dad3556e3d282677babcb2b642e61b8163715&v=4"
                  alt="Lynbrook Computer Science Club"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="w-full"
                  src="logos/lynbrookaiml.png"
                  alt="Lynbrook AI/ML Club"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="w-full"
                  src="logos/pcf.png"
                  alt="Project Code Foundation"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="max-h-12" src="tba.svg" alt="TBA" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="max-h-12"
                  src="tba.svg"
                  alt="TBA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Partners;