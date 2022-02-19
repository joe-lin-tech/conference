import React from "react";

const Timeline = () => {
  const sessions = [
    {
      title: "Current State-of-the-Art Object Detection Deep Learning Networks",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "Responsibility and Accountability for Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "The Future of Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "Responsibility and Accountability for Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "The Future of Automated Vehicles",
      speaker: "Dr. John Doe",
      description: "TODO",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ]

  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Previous month</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <div className="flex-auto font-semibold">January</div>
            <button type="button" className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Next month</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            <button type="button" className="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2021-12-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2021-12-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2021-12-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2021-12-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2021-12-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
            </button>
            <button type="button" className="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-07" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">7</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-08" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">8</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-09" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">9</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-10" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">10</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-11" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">11</time>
            </button>
            <button type="button" className="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-12" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">12</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-13" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">13</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-14" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">14</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-15" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">15</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-16" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">16</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-17" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">17</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-18" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">18</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-19" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">19</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-20" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">20</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-21" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">21</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-22" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">22</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-23" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">23</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-24" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">24</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-25" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">25</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-26" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">26</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-27" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">27</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-28" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">28</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-29" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">29</time>
            </button>
            <button type="button" className="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-30" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">30</time>
            </button>
            <button type="button" className="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-01-31" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">31</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-02-01" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">1</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-02-02" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">2</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-02-03" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">3</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-02-04" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">4</time>
            </button>
            <button type="button" className="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-02-05" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">5</time>
            </button>
            <button type="button" className="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10">
              <time dateTime="2022-02-06" className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">6</time>
            </button>
          </div>
        </div>
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          {sessions.map(s => {
            return (
              <li className="relative flex space-x-6 py-6 xl:static">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-14 w-14 flex-none rounded-full" />
                <div className="flex-auto">
                  <h1 className="text-lg leading-6 font-medium text-gray-900">{s.title}</h1>
                  <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{s.speaker}</h3>
                  <dl className="mt-1 flex flex-col text-gray-500 xl:flex-row">
                    <div className="flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Date</span>
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                      </dt>
                      <dd><time dateTime="2022-01-10T17:00">January 10th, 2022 at 5:00 PM</time></dd>
                    </div>
                    <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt className="mt-0.5">
                        <span className="sr-only">Location</span>
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                      </dt>
                      <dd>Starbucks</dd>
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