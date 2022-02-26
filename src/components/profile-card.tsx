import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const LinkIcons = {
  github: <FaGithub className="w-6 h-6 fill-current" />,
  linkedin: <FaLinkedin className="w-6 h-6 fill-current" />,
  facebook: <FaFacebook className="w-6 h-6 fill-current" />,
}

const ProfileCard = ({ name, position, url, links }) => {
  return (
    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
      <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={url} alt="" />
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 capitalize group-hover:text-white">{name}</h1>
      <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">{position}</p>
      <div className="flex mt-3 -mx-2">
        {links.map((link) => (
          <a href={link.url} className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label={link.name}>
            {LinkIcons[link.name]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard;