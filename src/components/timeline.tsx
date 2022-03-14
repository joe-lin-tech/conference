import React from "react";

const Timeline = () => {
  const sessions = [
    {
      title: "Can Cars Gesture? Expressive Autonomous Vehicles",
      speaker: "Paul Schmitt - Motion Planning System Architect & Expressive Robotics Manager at Motional",
      description: "",
      category: "Engineering",
      image: "profiles/paul-schmitt.png",
    },
    {
      title: "Responsibility and Accountability for Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Ethics",
      image: "profiles/placeholder.png",
    },
    {
      title: "The Future of Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Engineering",
      image: "profiles/placeholder.png",
    },
    {
      title: "Responsibility and Accountability for Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Ethics",
      image: "profiles/placeholder.png",
    },
    {
      title: "The Future of Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Engineering",
      image: "profiles/placeholder.png",
    },
  ]

  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {sessions.map(s => {
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
                      <dd><time dateTime="2022-01-10T17:00">April 16th, 2022 at hh:mm AM/PM</time></dd>
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