import React, { useState } from "react";
import PageLayout from '../components/page-layout';
import { FaCalendar, FaBug, FaHandsHelping } from "react-icons/fa";

const Contact = () => {
  const supportLinks = [
    {
      name: 'Event Inquiries',
      href: 'mailto:info@avexpo.org',
      description:
        <p className="mt-4 text-base text-blue-gray-500">
          Any questions or concerns about the Autonomous Vehicle Expo? Feel free to reach out to us at&nbsp;
          <a href="mailto:info@avexpo.org" className="text-blue-700 hover:text-blue-600">
          info@avexpo.org</a>.
        </p>,
      icon: FaCalendar,
    },
    {
      name: 'Technical Support',
      href: 'mailto:tech@avexpo.org',
      description:
        <p className="mt-4 text-base text-blue-gray-500">
          Experiencing any bugs on our website? Please reach out to us at&nbsp;
          <a href="mailto:tech@avexpo.org" className="text-blue-700 hover:text-blue-600">
          tech@avexpo.org</a> and we will get back to you ASAP!
        </p>,
      icon: FaBug,
    },
    {
      name: 'Sponorships + Partnerships',
      href: 'mailto:sponsorships@avexpo.org',
      description:
        <p className="mt-4 text-base text-blue-gray-500">
          Interested in becoming a sponsor or partner? View our sponsorship prospectus and reach out to us at&nbsp;
          <a href="mailto:sponsorships@avexpo.org" className="text-blue-700 hover:text-blue-600">
          sponsorships@avexpo.org</a>.
        </p>,
      icon: FaHandsHelping,
    },
  ]
  const faqs = [
    {
      id: 1,
      question: "Why do I need to sign up for an account?",
      answer:
        "Account and event registration are intertwined. This feature was implemented to personalize your event experience and enable more efficient communication.",
    },
    {
      id: 2,
      question: 'What do I get by attending this event?',
      answer:
        "You will not only get to hear the latest details on autonomous vehicle technology and impact, but also get practical knowledge through our in-depth workshops.",
    },
    {
      id: 3,
      question: 'How do I earn prizes at the event?',
      answer:
        'Prizes can be earned by fully attending speaker and workshop sessions throughout the event! You can view your prize progress in your account profile.',
    },
    {
      id: 4,
      question: "What are the benefits for becoming a sponsor or partner?",
      answer:
        'As a sponsor, you will receive the benefits listed on the sponsorship prospectus based on your sponsorship tier. As a partner, your main benefit is branding promo.',
    },
    {
      id: 5,
      question: 'How do I sign up for the hackathon?',
      answer: 'Hackathon registration is through Devpost, so please visit avexpo.org/hackathon .',
    },
    {
      id: 6,
      question: 'Why did the invisible man turn down the job offer?',
      answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ]

  return (
    <PageLayout page="Contact">
      <section className="px-4 pt-4 pb-10 mx-auto max-w-7xl">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-extrabold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">Contact</h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="mt-6 text-lg text-center text-gray-600 md:text-xl lg:px-24">
            Contact us if you have any questions about the event or if you are interested in sponsoring or partnering!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 mt-16">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-blue-gray-900">{link.name}</h3>
                {link.description}
                {/* <p className="mt-4 text-base text-blue-gray-500">{link.description}</p> */}
              </div>
              <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-blue-700 hover:text-blue-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <section
          className="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
          aria-labelledby="faq-heading"
        >
          <h2 className="text-3xl font-extrabold text-blue-gray-900" id="faq-heading">
            Frequently asked questions
          </h2>
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg font-medium text-blue-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base font-thin text-blue-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="relative bg-white" aria-labelledby="join-heading">
          <div className="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true" />
          <div className="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                <div className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
                <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <img
                      className="object-cover object-center rounded-3xl shadow-2xl"
                      src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                  <svg
                    className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                  <svg
                    className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                </div>
                <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                  <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                    Join our team
                  </h2>
                  <p className="text-lg text-white">
                    Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet
                    purus dui laoreet diam sed lacus, fames.
                  </p>
                  <a
                    className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-blue-gray-50 sm:inline-block sm:w-auto"
                    href="#"
                  >
                    Explore open positions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </PageLayout>
  )
}

export default Contact;