import React, { useState } from "react";
import Avatar from "react-avatar";
import { FaGithub, FaLinkedin, FaFacebook, FaEllipsisH, FaArrowCircleRight } from "react-icons/fa";

const LinkIcons = {
  github: <FaGithub className="w-4 h-4 fill-current" />,
  linkedin: <FaLinkedin className="w-4 h-4 fill-current" />,
  facebook: <FaFacebook className="w-4 h-4 fill-current" />,
}

const Session = ({ name, category, title, description, image, links }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
      <div className="w-full h-full px-6 py-6 mx-auto bg-white rounded-md flex flex-col justify-between">
        <div>
          <div className="grid grid-cols-8 gap-6 items-center">
            <div className="col-start-1 col-end-3 justify-self-center">
              <Avatar src={image} round size="100%" />
            </div>
            <div className="col-start-3 col-end-8">
              <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
              <span className="text-xs font-light text-gray-900">{name}</span>
              <div className="flex items-center justify-between mt-3">
                <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</span>
                <div className="flex items-center justify-start">
                  {links.map((link) => (
                    <a href={link.url} target="_blank" className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      aria-label={link.name}>
                      {LinkIcons[link.name]}
                    </a>
                  ))}
                  <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                      <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                      <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <a className="flex justify-center cursor-pointer" onClick={() => setShowModal(true)}>
              {/* <FaEllipsisH className="w-4 h-4 fill-current" /> */}
              <FaArrowCircleRight className="w-6 h-6 fill-current" />
            </a>
            {showModal && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-4xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                      <div className="flex flex-col items-start justify-between p-5 border-b rounded-t">
                        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                        <span className="flex items-center">
                          <div className="flex -space-x-5">
                            <div className="avatar avatar-xs ring ring-white"><img src={image} /></div>
                          </div>
                          <span className="ml-2 text-s font-light text-gray-900">{name}</span>
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="col-start-2 col-end-9 text-sm text-gray-900">{description}</p>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t rounded-b">
                        <button
                          className="btn btn-sm btn-primary px-6 py-3 outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Return to Schedule
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session;