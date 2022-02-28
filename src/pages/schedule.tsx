import React, { useState } from "react";
import PageLayout from '../components/page-layout';
import Session from "../components/session";
import Timeline from "../components/timeline";

const Schedule = () => {
  const [tabSelect, setTabSelect] = useState(0);
  return (
    <PageLayout page="Schedule">
      <section className="px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">Conference Schedule</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-6 text-lg text-center text-gray-600 md:text-xl lg:px-24">
            Here's what to look forward to at our autonomous vehicle national conference! Use the attached zoom links to join the respective sessions on the conference day!
          </p>
        </div>
        <div className="space-y-2">
          <nav className="tab justify-center">
            <a className={`tab-link ${tabSelect === 0 ? 'active' : ''}`} onClick={() => setTabSelect(0)}>Sessions</a>
            <a className={`tab-link ${tabSelect === 1 ? 'active' : ''}`} onClick={() => setTabSelect(1)}>Timeline</a>
          </nav>
        </div>
        {tabSelect == 0 && <div className="grid gap-8 grid-cols-3 mt-8">
          <Session
            name="Dr. Shu Kong"
            category="Engineering"
            title="Open World Visual Perception for Autonomous Driving"
            description="Explore state-of-the-art techniques for recognizing unknown obstacles when driving in the open world."
            image="profiles/shu-kong.jpeg"
            links={[
              {
                name: "github",
                url: "https://github.com/aimerykong",
              },
            ]}
          />
          <Session
            name="TBD"
            category="Engineering"
            title="Current State-of-the-Art Object Detection Deep Learning Networks"
            description="TODO"
            image="profiles/placeholder.png"
            links={[]}
          />
          <Session
            name="TBD"
            category="Ethics"
            title="Responsibility and Accountability for Automated Vehicles"
            description="TODO"
            image="profiles/placeholder.png"
            links={[]}
          />
          <Session
            name="TBD"
            category="Policy"
            title="Urban Mobility Policy for Autonomous Vehicles"
            description="TODO"
            image="profiles/placeholder.png"
            links={[]}
          />
          <Session
            name="TBD"
            category="Engineering"
            title="Autonomous Vehicle Technology"
            description="TODO"
            image="profiles/placeholder.png"
            links={[]}
          />
          <Session
            name="TBD"
            category="Engineering"
            title="Autonomous Vehicle Technology"
            description="TODO"
            image="profiles/placeholder.png"
            links={[]}
          />
        </div>}
        {tabSelect == 1 && <Timeline />}
      </section>
    </PageLayout>
  )
}

export default Schedule;