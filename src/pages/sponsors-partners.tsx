import React, { useState } from "react";
import PageLayout from '../components/page-layout';

const SponsorsPartners = () => {
  const [tabSelect, setTabSelect] = useState(0);
  return (
    <PageLayout page="Sponsors & Partners">
      <section className="px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">Sponsors & Partners</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-6 text-lg text-center text-gray-600 md:text-xl lg:px-24">
            Check out our sponsors and partners that made this autonomous vehicle conference possible!
          </p>
        </div>
        <div className="space-y-2">
          <nav className="tab justify-center">
            <a className={`tab-link ${tabSelect === 0 ? 'active' : ''}`} onClick={() => setTabSelect(0)}>Sponsors</a>
            <a className={`tab-link ${tabSelect === 1 ? 'active' : ''}`} onClick={() => setTabSelect(1)}>Partners</a>
          </nav>
        </div>
        {tabSelect == 0 && <div className="bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-0.5">
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="h-24" src="/logos/zadarlabs.png" alt="ZadarLabs" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full" src="/logos/beaverworks.png" alt="MIT Beaverworks" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full md:w-auto md:h-24" src="/logos/waymo.png" alt="Waymo" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full" src="/logos/cavcoe.png" alt="CAVCOE" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="h-24" src="/logos/motional.png" alt="Motional" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full" src="/logos/nanomath.png" alt="Nanomath" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="h-24" src="/logos/poketwo.webp" alt="Poketwo" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full" src="/logos/bizlink.png" alt="BizLink" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full" src="/logos/inspirit-ai.png" alt="Inspirit AI" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <a href="https://stickermule.com" target="_blank">
                  <img className="h-24" src="/logos/sticker-mule.png" alt="StickerMule" />
                </a>
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <a href="https://taskade.com" target="_blank">
                  <img className="w-full" src="/logos/taskade.png" alt="Taskade" />
                </a>
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img className="w-full" src="/logos/aops.png" alt="Art of Problem Solving" />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <div className="h-24 flex items-center">
                  <img className="w-full" src="/logos/digital-ocean.png" alt="Digital Ocean" />
                </div>
              </div>
            </div>
          </div>
        </div>}
        {tabSelect == 1 && <div className="bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-0.5 md:grid-cols-5">
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="w-full"
                  src="/logos/pave.png"
                  alt="Partners for Automated Vehicle Education"
                />
              </div>
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
                  src="/logos/lynbrook-aiml.png"
                  alt="Lynbrook AI/ML Club"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="w-full"
                  src="/logos/pcf.png"
                  alt="Project Code Foundation"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="h-24"
                  src="/logos/lynbrook-science.jpg"
                  alt="Lynbrook Science Club"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="w-full md:w-auto md:h-24"
                  src="/logos/ten80-education.png"
                  alt="Ten80 Education"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="h-24"
                  src="/logos/lynbrook-robotics.png"
                  alt="Lynbrook Robotics"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="h-24"
                  src="/logos/smlc.png"
                  alt="SMLC"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center py-4 px-8 bg-gray-50">
                <img
                  className="h-24"
                  src="/logos/lynbrook-engineering.png"
                  alt="Lynbrook Engineering"
                />
              </div>
            </div>
          </div>
        </div>}
      </section>
    </PageLayout>
  )
}

export default SponsorsPartners;