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
            Here's what to look forward to at our autonomous vehicle national conference! Click each card to learn more about the content of each session and workshop!
          </p>
        </div>
        <div className="space-y-2">
          <nav className="tab justify-center">
            <a className={`tab-link ${tabSelect === 0 ? 'active' : ''}`} onClick={() => setTabSelect(0)}>Sessions</a>
            <a className={`tab-link ${tabSelect === 1 ? 'active' : ''}`} onClick={() => setTabSelect(1)}>Timeline</a>
          </nav>
        </div>
        {tabSelect == 0 && <div className="grid gap-8 grid-cols-2 mt-8">
          <Session
            name="Paul Schmitt - Motion Planning System Architect & Expressive Robotics Manager at Motional"
            category="Engineering"
            title="Can Cars Gesture? Expressive Autonomous Vehicles"
            description="Imagine this. You’re walking down a street in a busy city and, as you’re about to cross the road, you see a vehicle approaching.
                        Something gives you pause. You look closer, and you realize the driver’s seat is empty. There’s no one behind the wheel, and the car appears to be driving itself.
                        What would you do? How would you feel? Is it safe to cross? Now what if the vehicle was able to express its intent to you, in a way that was almost familiar?
                        We exposed 60 pedestrians to a variety of AV intention expressions using exaggerated sound, light, and sculpted motion within a virtual intersection environment.
                        We are excited to share our take-aways from applying HRI concepts to a non-anthropomorphic robot. At Motional our goal is to make driverless vehicles a safe, reliable, and accessible reality.
                        Central to our mission is ensuring society understands how our vehicles fit into their communities, and feels safe in their presence."
            image="/profiles/paul-schmitt.png"
            links={[]}
          />
          <Session
            name="Dr. Shu Kong - Postdoctoral Researcher at CMU's Argo AI Center for Autonomous Vehicle Research"
            category="Engineering"
            title="Open World Visual Perception for Autonomous Driving"
            description="Visual perception is indispensable in autonomous vehicles. 
                        Today's visual perception algorithms are often developed under a closed-world paradigm (e.g., training machine-learned models over curated datasets),
                        which assumes the data distribution and categorical labels are fixed a priori.
                        This assumption is unrealistic in the real open world, which contains situations that are dynamic and unpredictable.
                        As a result, closed-world visual perception systems appear to be brittle in the open-world.
                        For example, autonomous vehicles with such systems could fail to recognize a never-before-seen overturned truck and crash into it.
                        This talk explores how to detect and recognize unknown objects in the scene."
            image="/profiles/shu-kong.jpeg"
            links={[
              {
                name: "github",
                url: "https://github.com/aimerykong",
              },
            ]}
          />
          <Session
            name="Barrie Kirk - Co-Founder and Executive Director of CAVCOE (Canadian Automated Vehicles Center of Excellence)"
            category="Engineering"
            title="Career Opportunities in the CAV Ecosystem"
            description="The presentation comprises three modules. First, the current status of connected and automated vehicles (CAVs) and the expected deployment trends.
                        Second, the big picture socio-economic impact on businesses, governments, and our personal lives over the next 20 years.
                        Third, more focused information on the career opportunities in the CAV ecosystem, including both STEM and non-STEM career paths."
            image="/profiles/barrie-kirk.jpg"
            links={[]}
          />
          <Session
            name="Dr. Neehar Peri - PhD Student at CMU's Argo AI Center for Autonomous Vehicle Research"
            category="Engineering"
            title="Metrics and Methods for 3D Detection and Forecasting"
            description="3D object detection and forecasting are fundamental components of embodied perception.
                        Detection benchmarks only consider common classes for evaluation, often ignoring rare categories such as strollers and wheelchairs.
                        For safety critical applications such as AVs, detecting objects in the long-tail is critical for safe driving.
                        Further downstream, forecasting benchmarks assume that methods have access to perfect detections, which does not reflect the requirements of on-vehicle systems.
                        This talk explores limitations of the status quo and presents novel metrics and methods for 3D detection and forecasting."
            image="/profiles/neehar-peri.png"
            links={[]}
          />
          <Session
            name="Emmy Li - Instructional Design Engineer at Inspirit AI (Stanford University Alumni)"
            category="Engineering"
            title="A Gentle Introduction to Artificial Intelligence"
            description="Ever seen a car drive around without passengers or accidentally set off the Alexa in your home? What about the advertisements on your Instagram knowing that you’re in market for a new pair of pants or Netflix recommending a movie you’ve been hearing about?
                        These are all examples of artificial intelligence, or computers becoming as “smart” as humans. In this talk, we will begin by taking a look at all the ways that AI influences the way we navigate the world,
                        peek under the hood to see how machine learning works, and offer insight into how young learners play a key role in creating ethical and responsible technology."
            image="/profiles/emmy-li.jpeg"
            links={[]}
          />
          <Session
            name="Kurt Fredland"
            category="Engineering"
            title="Advancing Autonomous Perception with 4D Imaging Radar"
            description="High resolution 4D imaging radars have significant advantages to conventional radar and other sensing modalities used today in autonomous driving applications.
                        However, some challenges persist in the development of these sensors; primarily achieving high angular resolution,
                        extended long range performance and strong interference resistance, while meeting automotive form factor and cost constraints.
                        Additionally, advanced perception requirements for autonomous driving demands novel software algorithms and machine learning and AI techniques to process high resolution radar data.
                        Zadar has developed an end-to-end software-defined 4D imaging radar solution by combining the latest signal processing techniques and machine learning and AI algorithms to achieve superior perception performance.
                        Join this session to understand Zadar's approach to developing their novel perception solution and how their high-performance portfolio of software-defined 4D imaging radar products enable advanced autonomous vehicles of the future."
            image="/profiles/placeholder.png"
            links={[]}
          />
          <Session
            name="TBD"
            category="Engineering"
            title="Autonomous Vehicle Technology"
            description="TODO"
            image="/profiles/placeholder.png"
            links={[]}
          />
        </div>}
        {tabSelect == 1 && <Timeline />}
      </section>
    </PageLayout>
  )
}

export default Schedule;