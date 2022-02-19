import React from "react";
import PageLayout from '../components/page-layout';
import ProfileCard from "../components/profile-card";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <PageLayout page="About">
      <section className="px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">Conference Team</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-6 text-lg text-center text-gray-600 md:text-xl lg:px-24">
            The Conference Team primarily consists of representatives from BSA Troop 452 and PAVE. The team is also composed of various high school and college volunteers.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-4">
          <div className="col-start-2">
            <ProfileCard name="Joe Lin" position="Conference Lead" image={<StaticImage className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="../images/profiles/joe-lin.jpeg" alt="" />} />
          </div>
          <div className="col-end-4">
            <ProfileCard name="Tabitha Colter" position="Conference Lead" image={<StaticImage className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="../images/profiles/tabitha-colter.jpeg" alt="" />} />
          </div>
          <div className="col-start-1">
            <ProfileCard name="First Last" position="Logistics Lead" image={<StaticImage className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="../images/profiles/joe-lin.jpeg" alt="" />} />
          </div>
          <ProfileCard name="First Last" position="Promotion Lead" image={<StaticImage className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="../images/profiles/joe-lin.jpeg" alt="" />} />
          <ProfileCard name="First Last" position="Outreach Lead" image={<StaticImage className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="../images/profiles/joe-lin.jpeg" alt="" />} />
          <ProfileCard name="First Last" position="Response Lead" image={<StaticImage className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="../images/profiles/joe-lin.jpeg" alt="" />} />
        </div>
      </section>
    </PageLayout>
  )
}

export default About;