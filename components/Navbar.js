import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "../constants/data";
import { socialMedia } from "./SocialMedia";

export default function Navbar() {
  const router = useRouter()
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathways = [
    {id: 'about', value: 'about'},
    {id: 'experience', value: 'experience'},
    {id: 'projects', value: 'projects'},
    {id: 'contact', value: 'contact'},
  ]

  const directory = pathways.map((path) => {
    const redirect = "#" + path.value
    return (
        <Link
          to={path.value}
          key={path.id}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={`text-base text-xs transition ease-in-out duration-1000 cursor-pointer hover:text-light_gray ${
            router.asPath === {redirect}
              ? "text-dark_gray font-bold dark:text-ivory"
              : "text-dark_gray font-light dark:text-ivory"
          }`}
          >
            {path.value.toUpperCase()}{" "}
        </Link>
    )
  });

  return (
    <div className="sticky z-50 top-0 mx-auto px-4 py-5 bg-ivory dark:bg-dark_gray">
      <div className="flex  md:flex-row justify-between items-center">
        <Link 
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="aspect-square max-w-xs object-fit hover:scale-150 duration-300 cursor-pointer"
          >
          <Image 
            className="hover:shadow-xl duration-300"
            src="/logo.png"
            alt="Jonathan Tan"
            width={50}
            height={50}
            />
        </Link>

        <div className="space-x-20 hidden md:block">
          {directory}
        </div>

        <div className="space-x-4 flex flow-row items-center">
          {socialMedia("dark_gray")}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}