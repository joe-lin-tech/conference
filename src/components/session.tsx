import React from "react";
import Avatar from "react-avatar";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const LinkIcons = {
  github: <FaGithub className="w-4 h-4 fill-current" />,
  linkedin: <FaLinkedin className="w-4 h-4 fill-current" />,
  facebook: <FaFacebook className="w-4 h-4 fill-current" />,
}

const Session = ({ name, category, title, description, image, links }) => {
  return (
    <div className="w-full max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md flex flex-col justify-between">
      <div>
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <Avatar src={image} round />
          </div>
          <div className="col-start-2 col-end-4">
            <span className="text-sm font-light text-gray-900">{name}</span>
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          </div>
        </div>
        <div>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start mt-4">
          {links.map((link) => (
            <a href={link.url} className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
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
        <span className="px-3 py-1 mt-4 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</span>
      </div>
    </div>
  )
}

export default Session;