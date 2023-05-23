import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      //object has 2 properties, id and length

      id: 1,
      link: "home",
    },
    {
      //object has 2 properties, id and length

      id: 2,
      link: "about",
    },
    {
      //object has 2 properties, id and length

      id: 3,
      link: "portfolio",
    },
    {
      //object has 2 properties, id and length

      id: 4,
      link: "experience",
    },
    {
      //object has 2 properties, id and length

      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-medium-dark-beige">
      <div>
        <h1 className="text-5xl ml-2">My Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          //loop over the array we just made to display the navbar links instead of individually creating each one with a list item

          //need a key to loop through an array and map it to a jsx element (key needs to be unique and consistent)
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-poiner pr-4 z-10 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-light-beige to-medium-dark-beige text-black-500">
        {links.map(({ id, link }) => (
          //loop over the array we just made to display the navbar links instead of individually creating each one with a list item

          //need a key to loop through an array and map it to a jsx element (key needs to be unique and consistent)
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize py-6
         text-4xl"
          >
            {link}
          </li>
        ))}
      </ul>
      )}

   
    </div>
  );
};

export default NavBar;
