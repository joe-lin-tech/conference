import React from "react";

const Timeline = () => {
  const saturday = [
    {
      title: "Can Cars Gesture? Expressive Autonomous Vehicles",
      speaker: "Paul Schmitt - Motion Planning System Architect & Expressive Robotics Manager at Motional",
      description: "",
      time: "April 16th, 2022 at 9:00 AM PST",
      category: "Engineering",
      image: "/profiles/paul-schmitt.png",
    },
    {
      title: "Autonomous Vehicles Program Overview - California DMV",
      speaker: "Miguel D. Acosta - California Department of Motor Vehicles (Autonomous Vehicles Branch)",
      description: "TODO",
      time: "April 16th, 2022 at 10:00 AM PST",
      category: "Policymaking",
      image: "/profiles/miguel-acosta.jpg",
    },
    {
      title: "A Gentle Introduction to Artificial Intelligence",
      speaker: "Emmy Li - Instructional Design Engineer at Inspirit AI (Stanford University Alumni)",
      description: "TODO",
      time: "April 16th, 2022 at 11:00 AM PST",
      category: "Engineering",
      image: "/profiles/emmy-li.jpeg",
    },
    {
      title: "Metrics and Methods for 3D Detection and Forecasting",
      speaker: "Dr. Neehar Peri - PhD Student at CMU’s Argo AI Center for Autonomous Vehicle Research",
      description: "TODO",
      time: "April 16th, 2022 at 1:00 PM PST",
      category: "Engineering",
      image: "/profiles/neehar-peri.png",
    },
    {
      title: "NVIDIA’s AI Infrastructure for Self-Driving Cars",
      speaker: "Yifang Xu - Engineering Manager (Perception for Autonomous Driving) at NVIDIA",
      description: "TODO",
      time: "April 16th, 2022 at 2:00 PM PST",
      category: "Engineering",
      image: "/profiles/yifang-xu.jpg",
    },
  ]

  const sunday = [
    {
      title: "Open World Visual Perception for Autonomous Driving",
      speaker: "Dr. Shu Kong - Postdoctoral Researcher at CMU’s Argo AI Center for Autonomous Vehicle Research",
      description: "TODO",
      time: "April 17th, 2022 at 9:00 AM PST",
      category: "Engineering",
      image: "/profiles/shu-kong.jpeg",
    },
    {
      title: "Career Opportunities in the CAV Ecosystem",
      speaker: "Barrie Kirk - Co-Founder and Executive Director of CAVCOE (Canadian Automated Vehicles Center of Excellence)",
      description: "TODO",
      time: "April 17th, 2022 at 10:00 AM PST",
      category: "Engineering",
      image: "/profiles/barrie-kirk.jpg",
    },
    {
      title: "The Path to Autonomy",
      speaker: "Katie Clothier - Autonomous Vehicle Product Developer at Stantec GenerationAV at Stantec GenerationAV",
      description: "TODO",
      time: "April 17th, 2022 at 11:00 AM PST",
      category: "Engineering",
      image: "/profiles/katie-clothier.png",
    },
    {
      title: "Waymo 101: The Potential of Autonomous Driving Technology",
      speaker: "Amanda Ventura Zink - Public Affairs Manager at Waymo",
      description: "TODO",
      time: "April 17th, 2022 at 1:00 PM PST",
      category: "Engineering",
      image: "/profiles/amanda-zink.jpg",
    }
  ]

  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6">
          {saturday.map(s => {
            return (
              <li className="relative flex space-x-6 py-6 xl:static">
                <img src={s.image} alt="" className="h-14 w-14 flex-none rounded-full" />
                <div className="flex-auto">
                  <h1 className="text-lg leading-6 font-medium text-gray-900">{s.title}</h1>
                  <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{s.speaker}</h3>
                  <dl className="mt-1 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </dt>
                      <dd>{s.time}</dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </dt>
                      <dd>Zoom Conference</dd>
                    </div>
                  </dl>
                </div>
              </li>
            )
          })}
        </ol>
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6">
          {sunday.map(s => {
            return (
              <li className="relative flex space-x-6 py-6 xl:static">
                <img src={s.image} alt="" className="h-14 w-14 flex-none rounded-full" />
                <div className="flex-auto">
                  <h1 className="text-lg leading-6 font-medium text-gray-900">{s.title}</h1>
                  <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{s.speaker}</h3>
                  <dl className="mt-1 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </dt>
                      <dd>{s.time}</dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </dt>
                      <dd>Zoom Conference</dd>
                    </div>
                  </dl>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Timeline;